import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Directorates", href: "/about#directorates" },
  { label: "Policies & Governance", href: "/about#policies" },
  { label: "Careers", href: "/careers" },
  { label: "Procurement", href: "/procurement" },
  { label: "Alumni", href: "/alumni" },
  { label: "Official Domains & Fraud Alerts", href: "/fraud-alerts" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-gray-200 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} National Open University of Nigeria</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-600">Twitter/X</a>
            <a href="#" className="hover:text-blue-600">Instagram</a>
            <a href="#" className="hover:text-blue-600">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
