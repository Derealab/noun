import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SupportChat from "@/components/SupportChat";

// Everything under src/app/(marketing)/ renders inside this automatically —
// the folder name in parentheses never shows up in the URL.
export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <SupportChat />
    </>
  );
}
