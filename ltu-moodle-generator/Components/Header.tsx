"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [activeTab, setActiveTab] = useState(pathname);

  useEffect(() => {
    const savedTheme = document.cookie
      .split("; ")
      .find((row) => row.startsWith("theme="))
      ?.split("=")[1];
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }

    const savedTab = document.cookie
      .split("; ")
      .find((row) => row.startsWith("activeTab="))
      ?.split("=")[1];
    if (savedTab && savedTab !== pathname) {
      setActiveTab(savedTab);
      router.push(savedTab);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.cookie = `theme=${theme}; path=/; max-age=31536000`;
  }, [theme]);

  const handleTabClick = (href: string) => {
    setActiveTab(href);
    document.cookie = `activeTab=${href}; path=/; max-age=31536000`;
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="topbar">
        <div className="student">21489152</div>
        <div className="title">CSE3CWA Assignment 1</div>
      </div>

      <nav className={`tabnav ${menuOpen ? "open" : ""}`}>
        <Link href="/" className={activeTab === "/" ? "active" : ""} onClick={() => handleTabClick("/")}>Home</Link>
        <Link href="/court-room" className={activeTab === "/court-room" ? "active" : ""} onClick={() => handleTabClick("/court-room")}>Court Room</Link>
        <Link href="/coding-races" className={activeTab === "/coding-races" ? "active" : ""} onClick={() => handleTabClick("/coding-races")}>Coding Races</Link>
        <Link href="/escape-room" className={activeTab === "/escape-room" ? "active" : ""} onClick={() => handleTabClick("/escape-room")}>Escape Room</Link>
        <Link href="/tabs-builder" className={activeTab === "/tabs-builder" ? "active" : ""} onClick={() => handleTabClick("/tabs-builder")}>Tabs</Link>
        <Link href="/about" className={activeTab === "/about" ? "active" : ""} onClick={() => handleTabClick("/about")}>About</Link>

        <div className="spacer" />
        <select value={theme} onChange={(e) => setTheme(e.target.value)} className="theme-select">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
        </select>

        <button className="hamburger" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span className="line l1" />
          <span className="line l2" />
          <span className="line l3" />
        </button>
      </nav>

      {menuOpen && (
        <div className="mobileMenu">
          <Link href="/" onClick={() => handleTabClick("/")}>Home</Link>
          <Link href="/court-room" onClick={() => handleTabClick("/court-room")}>Court Room</Link>
          <Link href="/coding-races" onClick={() => handleTabClick("/coding-races")}>Coding Races</Link>
          <Link href="/escape-room" onClick={() => handleTabClick("/escape-room")}>Escape Room</Link>
          <Link href="/tabs-builder" onClick={() => handleTabClick("/tabs-builder")}>Tabs</Link>
          <Link href="/about" onClick={() => handleTabClick("/about")}>About</Link>
        </div>
      )}
    </header>
  );
}
