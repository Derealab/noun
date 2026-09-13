"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Swap these hrefs for your real routes as pages get built.
// "highlight: true" marks the Student Portal as the one visually distinct CTA in the nav.
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Admissions", href: "/admissions" },
  { label: "Academics", href: "/academics" },
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link href="/" aria-label="NOUN home" onClick={() => setIsOpen(false)}>
          <Image
            src="/logo.svg"
            alt="NOUN logo"
            width={48}
            height={46}
            priority
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop links — hidden below md breakpoint */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}

          {/* Student Portal — deliberately styled as a solid button, not a text link,
              and kept in the exact same spot on every page (see Section 1 of the site structure doc) */}
          <Link
            href="/portal"
            className="bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-secondary"
          >
            Student Portal
          </Link>
        </div>

        {/* Mobile hamburger toggle — only visible below md breakpoint */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu panel — slides/appears below the navbar when open */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/portal"
              className="mt-2 rounded-full bg-blue-600 px-5 py-2 text-center text-base font-semibold text-white hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Student Portal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
