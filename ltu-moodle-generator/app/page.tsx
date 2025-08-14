import React from "react";

import Link from "next/link";

export default function Home() {
  return (
    <section className="card">
      <h1>Welcome 👋</h1>
      <p>
        This tool builds **Tabs** content and outputs clean HTML + JS with **inline CSS only** so you can paste it straight into Moodle.
      </p>
      <ul>
        <li>Create/rename up to 15 tabs</li>
        <li>Edit content for each tab</li>
        <li>Auto-saves to <code>localStorage</code></li>
        <li>Generate and copy the HTML</li>
      </ul>
      <p>
        Start here: <Link href="/tabs" className="kbd">Open Tabs Builder →</Link>
      </p>
    </section>
  );
}
