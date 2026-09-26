import Image from "next/image";
import LoginForm from "@/components/LoginForm";

export const metadata = {
  title: "Student login | NOUN",
  description: "Sign in to your NOUN student dashboard.",
};

export default function StudentLoginPage() {
  return (
    <main className="grid min-h-screen bg-[#f4f6f1] lg:grid-cols-[1.05fr_0.95fr]">
      <section className="relative hidden overflow-hidden bg-secondary lg:block">
        <Image src="/image.png" alt="Students studying together" fill priority sizes="55vw" className="object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/25 to-transparent" />
        <div className="absolute bottom-12 left-12 max-w-lg text-white xl:left-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#b6dc55]">NOUN student services</p>
          <h1 className="text-5xl font-semibold leading-tight">Your learning journey, in one place.</h1>
          <p className="mt-5 max-w-md text-base leading-7 text-white/75">View your courses, results, registration status, and the next steps in your academic journey.</p>
        </div>
      </section>

      <section className="flex items-center justify-center px-6 py-12 sm:px-10">
        <div className="w-full max-w-md">
          <div className="mb-10 lg:hidden">
            <Image src="/logo.svg" alt="NOUN" width={48} height={46} className="h-12 w-auto" />
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Student portal</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-secondary">Welcome back.</h2>
          <p className="mt-3 text-sm leading-6 text-gray-600">Sign in with your student credentials to continue.</p>
          <LoginForm />
        </div>
      </section>
    </main>
  );
}