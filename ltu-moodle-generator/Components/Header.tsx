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
      <div className="topbar">
        <div className="title">CSE3CWA Assignment 1</div>
        <div className="student">12345678</div>
      </div>

      <nav className="tabnav">
        {/* Desktop permanent menu */}
        <Link href="/" className={pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link href="/tabs-builder" className={pathname === "/tabs-builder" ? "active" : ""}>
        Tabs Builder
        </Link>
        <Link href="/court-room" className={pathname === "/court-room" ? "active" : ""}>
          Court Room
        </Link>
        <Link href="/coding-race" className={pathname === "/coding-race" ? "active" : ""}>
          Coding Race
        </Link>
        <Link href="/escape-room" className={pathname === "/escape-room" ? "active" : ""}>
          Escape Room
        </Link>

        <div className="spacer" />

        {/* Theme dropdown */}
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          style={{
            padding: "0.25rem 0.5rem",
            border: "2px solid currentColor",
            borderRadius: "4px",
            background: "var(--bg-color)",
            color: "var(--text-color)",
            fontWeight: "600",
          }}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
        </select>

        {/* Burger button */}
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

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobileMenu">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/tabs-builder" onClick={() => setMenuOpen(false)}>Tabs Builder</Link>
          <Link href="/court-room" onClick={() => setMenuOpen(false)}>Court Room</Link>
          <Link href="/coding-race" onClick={() => setMenuOpen(false)}>Coding Race</Link>
          <Link href="/escape-room" onClick={() => setMenuOpen(false)}>Escape Room</Link>
        </div>
      )}
    </header>
  );
}
