import React from "react";

"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light"|"dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light"|"dark" | null;
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const t = saved ?? (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", t);
    setTheme(t);
  }, []);

  function toggle() {
    const t = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("theme", t);
    setTheme(t);
  }

  return (
    <button onClick={toggle} aria-pressed={theme==="dark"} title="Toggle theme">
      {theme === "dark" ? "☾ Dark" : "☀︎ Light"}
    </button>
  );
}
