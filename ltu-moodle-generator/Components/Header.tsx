"use client";
import React from "react";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import ThemeToggle from "./ThemeToggle";
import { getCookie, setCookie } from "@/lib/menuCookie";

// Replace this with YOUR real student number once
const STUDENT_NUMBER = "s1234567";
const STUDENT_NAME = "Your Name";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/tabs", label: "Tabs Builder" },
  { href: "/about", label: "About" },
  { href: "/escape-room", label: "Escape Room" },
  { href: "/coding-races", label: "Coding Races" },
  { href: "/court-room", label: "Court Room" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Remember last visited menu tab via cookie
  useEffect(() => {
    const last = getCookie("last_menu");
    if (!last) setCookie("last_menu", pathname);
    else if (pathname === "/" && last && last !== "/") {
      // Optional: redirect to last visited section on first hit
      // Comment out next line if you don't want auto-redirect:
      // router.replace(last);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => { setCookie("last_menu", pathname); }, [pathname]);

  return (
    <header className="header">
      <div className="container">
        <div className="spread">
          <div className="brand" aria-label={`${STUDENT_NAME} ${STUDENT_NUMBER}`}>
            <span className="student">{STUDENT_NUMBER}</span>
            <Link href="/"><strong>LTU HTML Generator</strong></Link>
          </div>
          <nav className="nav desktopOnly" aria-label="Primary">
            {LINKS.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={pathname === l.href ? "active" : ""}
              >
                {l.label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>
          <div className="desktopOnly" aria-hidden="true" />
          <div className="mobileOnly">
            <Hamburger onToggle={setMobileOpen} />
          </div>
        </div>

        <div className="mobileMenu" style={{display: mobileOpen ? "block" : "none"}}>
          <nav aria-label="Mobile">
            {LINKS.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className={pathname === l.href ? "active" : ""}>
                {l.label}
              </Link>
            ))}
            <div style={{ marginTop: ".5rem" }}><ThemeToggle /></div>
          </nav>
        </div>
      </div>
    </header>
  );
}
