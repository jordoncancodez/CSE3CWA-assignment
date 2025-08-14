"use client";
import React from "react";


import { useState } from "react";

export default function Hamburger({ onToggle }: { onToggle: (open: boolean) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      className="hamburger"
      aria-label="Toggle menu"
      aria-expanded={open}
      onClick={() => { const n = !open; setOpen(n); onToggle(n); }}
    >
      <span className="line l1" />
      <span className="line l2" />
      <span className="line l3" />
    </button>
  );
}
