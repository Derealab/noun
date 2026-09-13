import Link from "next/link";
import Image from "next/image";
import { NEWS_ITEMS } from "@/data/siteData";

// Placeholder data — swap for real content/CMS data as it becomes available.
const AUDIENCES = [
  { label: "Prospective Student", href: "/admissions", blurb: "See how to apply and what it costs" },
  { label: "Current Student", href: "/portal", blurb: "Go to your dashboard" },
  { label: "Staff", href: "/portal", blurb: "Access staff tools" },
  { label: "Alumni", href: "/alumni", blurb: "Stay connected" },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative isolate flex min-h-[560px] items-end overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8">
       
        <div className="absolute inset-0 -z-10 bg-black/25" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-3/4 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
        <div className="relative max-w-xl text-left text-white">
          <h1 className="max-w-lg text-3xl font-bold leading-tight sm:text-4xl">
            Our education is key to your successful future
          </h1>
          <div className="mt-4 grid max-w-2xl gap-3 text-xs leading-snug text-white/90 sm:grid-cols-2">
            <p>
              We provide students with a high-quality education that allows them to develop the personal skills and interests.
            </p>
            <p>
              We pay special attention to the development of team spirit and social activities to form future leaders.
            </p>
          </div>
        </div>
      </section>

      {/* 2. "I am a..." audience selector */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center text-sm font-semibold uppercase tracking-wide text-gray-500">
          I am a...
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {AUDIENCES.map((a) => (
            <Link
              key={a.label}
              href={a.href}
              className="border border-gray-200 p-5 text-center transition-colors hover:border-primary hover:bg-primary"
            >
              <p className="font-semibold text-gray-900">{a.label}</p>
              <p className="mt-1 text-sm text-gray-500">{a.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Official Domains notice — high priority, not buried in the footer */}
      <section className="bg-accent py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-3 rounded-xl  bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-amber-800">Official domains only:</span>{" "}
              NOUN&apos;s real web addresses are listed on our verified domains page. Report any other site claiming to be NOUN.
            </p>
            <Link
              href="/fraud-alerts"
              className="whitespace-nowrap rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-secondary"
            >
              View official domains
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Academics highlight */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900">Explore our faculties</h2>
        <p className="mt-2 text-gray-600">Nine faculties, one consistent way to find what you need.</p>
        <Link
          href="/academics"
          className="mt-6 inline-block text-sm font-semibold text-primary hover:text-secondary"
        >
          Browse all faculties →
        </Link>
      </section>

      {/* 5. News & Announcements */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Latest news</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-4">
            {NEWS_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group border border-gray-200 bg-white p-5"
              >
                <div className="overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={400}
                    height={200}
                    className="h-80 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-xs font-medium text-gray-400">{item.date}</p>
                  <p className="mt-1 font-semibold text-gray-900">{item.title}</p>
                  <p className="mt-2 text-sm text-gray-600">{item.readMoreLabel}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="/news"
            className="mt-6 inline-block text-sm font-semibold text-primary hover:text-secondary"
          >
            See all news →
          </Link>
        </div>
      </section>

      {/* 6. Student life / stats */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
          <div>
            <p className="text-3xl font-bold text-gray-900">500K+</p>
            <p className="mt-1 text-sm text-gray-500">Students</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">9</p>
            <p className="mt-1 text-sm text-gray-500">Faculties</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">70+</p>
            <p className="mt-1 text-sm text-gray-500">Study centres</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">1983</p>
            <p className="mt-1 text-sm text-gray-500">Founded</p>
          </div>
        </div>
      </section>
    </>
  );
}
