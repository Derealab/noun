import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const SESSION_COOKIE = "noun_student_session";
const SESSION_MAX_AGE = 60 * 60 * 8;

export type StudentSession = {
  email: string;
  name: string;
  studentId: string;
};

function getSecret() {
  return process.env.AUTH_SECRET ?? "local-development-secret-change-me";
}

function getConfiguredCredentials() {
  if (process.env.NODE_ENV === "production" && (!process.env.STUDENT_EMAIL || !process.env.STUDENT_PASSWORD)) {
    throw new Error("STUDENT_EMAIL and STUDENT_PASSWORD must be configured in production.");
  }

  return {
    email: process.env.STUDENT_EMAIL ?? "student@noun.edu.ng",
    password: process.env.STUDENT_PASSWORD ?? "Student@123",
    name: process.env.STUDENT_NAME ?? "NOUN Student",
    studentId: process.env.STUDENT_ID ?? "NOUN/2026/0001",
  };
}

function sign(value: string) {
  return createHmac("sha256", getSecret()).update(value).digest("base64url");
}

function encodeSession(session: StudentSession) {
  const payload = Buffer.from(JSON.stringify(session)).toString("base64url");
  return `${payload}.${sign(payload)}`;
}

function decodeSession(value: string): StudentSession | null {
  const [payload, signature] = value.split(".");
  if (!payload || !signature) return null;

  const expected = sign(payload);
  const providedBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  if (providedBuffer.length !== expectedBuffer.length || !timingSafeEqual(providedBuffer, expectedBuffer)) {
    return null;
  }

  try {
    const parsed = JSON.parse(Buffer.from(payload, "base64url").toString()) as StudentSession;
    if (!parsed.email || !parsed.name || !parsed.studentId) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function authenticateStudent(email: string, password: string) {
  const credentials = getConfiguredCredentials();
  if (email.trim().toLowerCase() !== credentials.email.toLowerCase() || password !== credentials.password) {
    return null;
  }

  return {
    email: credentials.email,
    name: credentials.name,
    studentId: credentials.studentId,
  } satisfies StudentSession;
}

export async function createStudentSession(session: StudentSession) {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, encodeSession(session), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: SESSION_MAX_AGE,
    path: "/",
  });
}

export async function getStudentSession() {
  const cookieStore = await cookies();
  const value = cookieStore.get(SESSION_COOKIE)?.value;
  return value ? decodeSession(value) : null;
}

export async function clearStudentSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}