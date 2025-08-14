import React from "react";

export default function About() {
  return (
    <section className="card">
      <h1>About</h1>
      <p><strong>Name:</strong> Jordon Turiello</p>
      <p><strong>Student Number:</strong> 21489152 </p>
      <h2>How to use this website</h2>
      <ol>
        <li>Go to <em>Tabs Builder</em>.</li>
        <li>Add/rename tabs (up to 15), write content.</li>
        <li>Click <em>Generate Output</em> → Copy the HTML.</li>
        <li>Paste into a blank file (e.g., <code>Hello.html</code>) and open it.</li>
      </ol>
      <video controls width={720} aria-label="Demo video">
        <source src="" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
