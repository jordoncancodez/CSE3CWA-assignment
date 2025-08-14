"use client";
import React, { useState } from "react";

export default function TabsBuilder() {
  const steps = [
    { id: 1, title: "Step 1", content: "Step 1:\n1. Do something\n2. Continue\n3. etc" },
    { id: 2, title: "Step 2", content: "Step 2:\n1. Install VSCode\n2. Install Chrome\n3. Install Node\n4. etc" },
    { id: 3, title: "Step 3", content: "Step 3:\n1. Finalise\n2. Test\n3. Submit" },
  ];

  const [activeStep, setActiveStep] = useState(steps[0]);

  return (
    <div className="tb-row">
      {/* Tabs Headers */}
      <div className="tb-box tb-list">
        <div style={{ marginBottom: ".5rem" }}>
          <strong>Tabs Headers:</strong> <button style={{ fontWeight: "bold" }}>[+]</button>
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {steps.map((step) => (
            <button
              key={step.id}
              className={activeStep.id === step.id ? "active" : ""}
              onClick={() => setActiveStep(step)}
            >
              {step.title}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs Content */}
      <div className="tb-box">
        <strong>Tabs Content</strong>
        <div style={{ border: "1px solid black", padding: ".5rem", marginTop: ".5rem" }}>
          {activeStep.content.split("\n").map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </div>
      </div>

      {/* Output */}
      <div className="tb-box">
        <strong>Output</strong>
        <div style={{ border: "2px solid black", padding: ".5rem", whiteSpace: "pre-wrap", fontFamily: "monospace", marginTop: ".5rem" }}>
{`<div>
  <h2>${activeStep.title}</h2>
  <p>${activeStep.content.replace(/\n/g, "<br/>")}</p>
</div>`}
        </div>
      </div>
    </div>
  );
}
