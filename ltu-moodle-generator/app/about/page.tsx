export default function AboutPage() {
    return (
      <section className="card about-card">
        {/* Project Title */}
        <h1>About This Project</h1>
        <p>
          This assignment supports{" "}
          <strong>CSE3CWA Assignment 1</strong>.  
          demonstrating the use of Next.js, CSS and React for building a responsive and accessible web dev tool.
        </p>
  
        {/* Features Section */}
        <div className="bordered-section">
          <h2>Features</h2>
          <ul>
          <li>Tabs Builder is the main homepage</li>
          <li>Themes (Light, Dark, Blue, Green, Purple)</li>
            <li>Responsive and modern design with mobile-friendly navigation</li>
            <li>Interactive game pages like Court Room, Coding Race, and Escape Room, coming soon</li>
            <li>Accessibility friendly layout</li>
          </ul>
        </div>
  
        {/* Purpose Section */}
        <div className="bordered-section">
          <h2>Purpose</h2>
          <p>
            The project shows modern web development practices,
            focusing on user experience, accessibility, and responsiveness.
          </p>
        </div>
  
        {/* Video Placeholder Under Purpose */}
        <div className="video-placeholder">
          <p>Video Placeholder — How to Use the Website</p>
        </div>
      </section>
    );
  }
  