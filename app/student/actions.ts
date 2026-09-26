"use server";

import { redirect } from "next/navigation";
import { authenticateStudent, clearStudentSession, createStudentSession } from "@/lib/auth";

export type LoginState = {
  error?: string;
};

export async function loginStudent(_previousState: LoginState, formData: FormData): Promise<LoginState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return { error: "Enter your student email and password." };
  }

  const student = authenticateStudent(email, password);
  if (!student) {
    return { error: "Those credentials were not recognised. Check them and try again." };
  }

  await createStudentSession(student);
  redirect("/student/dashboard");
}

export async function logoutStudent() {
  await clearStudentSession();
  redirect("/student/login");
}