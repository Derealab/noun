"use client";

import { useActionState, useState } from "react";
import { loginStudent, type LoginState } from "@/app/student/actions";

const initialState: LoginState = {};

export default function LoginForm() {
  const [state, action, pending] = useActionState(loginStudent, initialState);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form action={action} className="mt-8 space-y-5">
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-secondary">Student email</label>
        <input id="email" name="email" type="email" autoComplete="username" required placeholder="you@noun.edu.ng" className="mt-2 w-full border border-gray-300 bg-white px-4 py-3 text-sm text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-semibold text-secondary">Password</label>
        <div className="relative mt-2">
          <input id="password" name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" required className="w-full border border-gray-300 bg-white px-4 py-3 pr-12 text-sm text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
          <button type="button" onClick={() => setShowPassword((visible) => !visible)} aria-label={showPassword ? "Hide password" : "Show password"} aria-pressed={showPassword} className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-gray-500 transition hover:text-primary">
            {showPassword ? (
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M10.6 10.6a2 2 0 002.8 2.8M9.9 4.3A10.8 10.8 0 0112 4c5.1 0 8.5 4 9.7 6a17.6 17.6 0 01-3.1 3.5M6.2 6.2C4.6 7.4 3.4 9 2.3 10c1.2 2 4.6 6 9.7 6 1 0 1.9-.2 2.8-.5" /></svg>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.3 12C3.5 10 6.9 6 12 6s8.5 4 9.7 6c-1.2 2-4.6 6-9.7 6s-8.5-4-9.7-6z" /><circle cx="12" cy="12" r="2.5" /></svg>
            )}
          </button>
        </div>
      </div>
      {state.error && <p role="alert" className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{state.error}</p>}
      <button type="submit" disabled={pending} className="w-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-secondary disabled:cursor-wait disabled:opacity-60">
        {pending ? "Signing in..." : "Sign in to dashboard"}
      </button>
      <p className="text-center text-xs leading-5 text-gray-500">Need help accessing your account? Contact the student support team.</p>
    </form>
  );
}