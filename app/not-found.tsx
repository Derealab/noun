import Link from "next/link";

// Next.js renders this automatically for any unmatched route —
// no need to link to it manually from anywhere.
export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold text-primary">404</p>
      <h1 className="mt-2 text-3xl font-bold text-gray-900">
        We couldn't find that page
      </h1>
      <p className="mt-3 text-gray-600">
        The page you're looking for might have moved, or the link may be outdated.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-secondary"
        >
          Back to Home
        </Link>
        <Link
          href="/faq"
          className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:border-blue-600 hover:text-blue-600"
        >
          Visit the FAQ
        </Link>
      </div>

      {/* Specific to the domain-confusion problem the audit uncovered */}
      <p className="mt-8 text-sm text-gray-500">
        Looking for a service that used to live on a different site?{" "}
        <Link href="/fraud-alerts" className="font-medium text-blue-600 hover:text-blue-700">
          See our official domains list
        </Link>{" "}
        — everything now lives here on nou.edu.ng.
      </p>
    </div>
  );
}
