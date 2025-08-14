"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className="header">
      {/* Topbar */}
      <div className="topbar">
        <div className="student">21489152</div>
        <div className="title">CSE3CWA Assignment 1</div>
      </div>

      {/* Nav */}
      <nav className={`tabnav ${menuOpen ? "open" : ""}`}>
        {/* Tabs is now the homepage */}
        <Link
          href="/"
          className={
            pathname === "/" || pathname === "/tabs-builder" ? "active" : ""
          }
        >
          Tabs
        </Link>
        <Link
          href="/court-room"
          className={pathname === "/court-room" ? "active" : ""}
        >
          Court Room
        </Link>
        <Link
          href="/coding-races"
          className={pathname === "/coding-races" ? "active" : ""}
        >
          Coding Race
        </Link>
        <Link
          href="/escape-room"
          className={pathname === "/escape-room" ? "active" : ""}
        >
          Escape Room
        </Link>
        <Link
          href="/about"
          className={pathname === "/about" ? "active" : ""}
        >
          About
        </Link>

        <div className="spacer" />

        {/* Theme Selector */}
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="theme-select"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
        </select>

        {/* Burger Icon */}
        <button
          className="hamburger"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="line l1" />
          <span className="line l2" />
          <span className="line l3" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobileMenu">
          <Link href="/" onClick={() => setMenuOpen(false)}>Tabs</Link>
          <Link href="/court-room" onClick={() => setMenuOpen(false)}>Court Room</Link>
          <Link href="/coding-races" onClick={() => setMenuOpen(false)}>Coding Race</Link>
          <Link href="/escape-room" onClick={() => setMenuOpen(false)}>Escape Room</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
        </div>
      )}
    </header>
  );
}
