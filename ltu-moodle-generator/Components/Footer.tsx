"use client";
import React from "react";
import { useEffect, useState } from "react";

// student details displayed at the bottom left
const STUDENT_NUMBER = "21489152";
const STUDENT_NAME = "Jordon Turiello";

export default function Footer() {
  const [dateStr, setDateStr] = useState("");
  useEffect(() => { setDateStr(new Date().toLocaleDateString()); }, []);
  return (
    <footer>
      <div className="container spread" style={{padding: "1rem 0"}}>
        <small>© {new Date().getFullYear()} {STUDENT_NAME} ({STUDENT_NUMBER}) — {dateStr} </small>
        <small>La Trobe University</small>
      </div>
    </footer>
  );
}
