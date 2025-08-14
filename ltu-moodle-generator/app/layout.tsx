import React from "react";

export const metadata = {
  title: "LTU HTML Generator",
  description: "Next.js app that outputs HTML+JS (inline CSS) for Moodle",
};

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="light">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main" className="container main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
