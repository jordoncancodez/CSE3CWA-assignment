CSE3CWA Assignment 1 – LTU Moodle HTML Generator

Name: Jordon Turiello
Student Number: 21489152

Assignment: 1 – Project Implementation

Project Overview
This project is a MoodlLMSe HTML Generator built with Next.js and TypeScript.
It allows teachers and students to quickly generate accessible, tab-based learning content that can be embedded directly into LMS.

The project demonstrates:
A consistent and accessible layout with header, navigation menu, main content, and footer.
Tabs Builder tool outputs HTML + inline CSS
Accessibility compliance, high-contrast theme 
Multiple color themes (Light, Dark, Blue, Green, Purple).
Persistence using local storage

Features
1. Header & Navigation
Displays assignment title and student number.
Active menu item is highlighted.
Permanent navigation menu with links to: Court Room, Coding Race, Escape Room, Tabs, About.

2. Tabs Builder (Main Tool)
Add, remove, and edit custom tabs (up to 15).
How to Use dropdown with instructions.
Generate button produces ready-to-use HTML with inline CSS.
Preset option to quickly generate sample tabs.
Edit tab headings and content
Download button saves the output as weekAssign.html.

3.Themes
 Light, Dark, Blue, Green, Purple. Accessible color choices with strong contrast.

4. Accessibility
Tabs are fully keyboard navigable with Arrow keys, Home, End.
Semantic HTML with header, nav, main, footer, section.
High-contrast color options for readability.

5. Persistence (Local Storage)
Tabs and content are saved to local storage (tabsBuilder.v1).
Data is restored automatically after reload.

-- Technologies Used
TypeScript
Next.js
React with Hooks
Local Storage API
CSS Modules / global.css

-- Running the Project

1. Clone repository
git clone https://github.com/jordoncancodez/CSE3CWA-assignment.git

2. cd assignment-1

3. Install dependencies
npm install

4. Run development server
npm run dev

5. Open in browser
http://localhost:3000

