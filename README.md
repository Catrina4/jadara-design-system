# JADARA Design System

A reusable React + TypeScript design system for the **JADARA** platform.

The design system provides reusable UI components, patterns, layouts, and complete screen examples for the JADARA application. It is designed to be developed independently from the main JADARA application so that the UI can be built, tested, reviewed, and refined before integration.

---

## 📋 Table of Contents

* [Overview](#-overview)
* [Tech Stack](#-tech-stack)
* [Requirements](#-requirements)
* [Getting Started](#-getting-started)
* [Running the Design System](#-running-the-design-system)
* [Project Structure](#-project-structure)
* [Components](#-components)
* [Patterns](#-patterns)
* [Reviewer Screens](#-reviewer-screens)
* [Storybook](#-storybook)
* [How to Modify Components](#-how-to-modify-components)
* [How to Add a New Component](#-how-to-add-a-new-component)
* [How to Add a New Screen](#-how-to-add-a-new-screen)
* [Testing Your Changes](#-testing-your-changes)
* [Building the Project](#-building-the-project)
* [Git Workflow](#-git-workflow)
* [Working With the Main JADARA Application](#-working-with-the-main-jadara-application)
* [Development Guidelines](#-development-guidelines)
* [Troubleshooting](#-troubleshooting)
* [Contributing](#-contributing)

---

# 🎨 Overview

The JADARA Design System is the UI foundation for the JADARA platform.

It contains:

* Base UI components
* Form components
* Navigation components
* Cards
* Data display components
* Feedback components
* Layout components
* Reusable page patterns
* Reviewer-specific screens
* Storybook stories for visual development

The goal is to keep the JADARA interface:

* Consistent
* Reusable
* Accessible
* Responsive
* Easy to maintain
* Easy to extend

---

# 🛠 Tech Stack

The project currently uses:

* **React**
* **TypeScript**
* **Vite**
* **Storybook**
* **Lucide React**
* **CSS**

---

# 💻 Requirements

Before starting, make sure you have installed:

### Node.js

Recommended:

```text
Node.js 20+
```

Check your version:

```bash
node --version
```

You should see something similar to:

```text
v20.x.x
```

### npm

Check:

```bash
npm --version
```

---

# 🚀 Getting Started

## 1. Clone the repository

From GitHub:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

Replace:

```text
YOUR_USERNAME
```

and:

```text
YOUR_REPOSITORY
```

with the actual GitHub repository information.

Then enter the project:

```bash
cd jadara-design-system
```

---

## 2. Install dependencies

Run:

```bash
npm install
```

This installs all required dependencies from `package.json`.

---

# ▶️ Running the Design System

There are two main ways to work with the project.

## Run the development application

```bash
npm run dev
```

Vite will start the development server.

The terminal will show the local URL, usually:

```text
http://localhost:5173
```

Open that URL in your browser.

---

# 📚 Running Storybook

Storybook is the primary environment for developing and reviewing the design system.

Start Storybook:

```bash
npm run storybook
```

Storybook will normally be available at:

```text
http://localhost:6006
```

Storybook allows you to:

* View components
* Test different component states
* Review responsive layouts
* Develop new components
* Review complete screens
* Test reusable patterns without running the main JADARA application

---

# 📁 Project Structure

The project generally follows this structure:

```text
jadara-design-system/
│
├── .storybook/
│   └── ...
│
├── public/
│   └── ...
│
├── src/
│   │
│   ├── components/
│   │   ├── Avatar/
│   │   ├── Badge/
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Divider/
│   │   ├── IconButton/
│   │   ├── Input/
│   │   ├── Modal/
│   │   ├── SearchField/
│   │   ├── Select/
│   │   └── Textarea/
│   │
│   ├── patterns/
│   │   ├── AppShell/
│   │   ├── DataTable/
│   │   ├── StatCard/
│   │   ├── ProjectCard/
│   │   ├── ProfileCard/
│   │   ├── EvidenceCard/
│   │   ├── ActivityItem/
│   │   ├── SkillCard/
│   │   ├── FileUpload/
│   │   ├── FormField/
│   │   ├── TechnologyInput/
│   │   ├── Alert/
│   │   ├── EmptyState/
│   │   ├── StatusBadge/
│   │   ├── VerificationStatus/
│   │   └── ReviewerScreens/
│   │
│   ├── App.tsx
│   ├── index.ts
│   └── ...
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

The exact folder structure may evolve as the design system grows.

---

# 🧩 Components

The design system contains reusable components such as:

### Basic UI

* Avatar
* Badge
* Button
* Card
* Divider
* IconButton
* Input
* Modal
* SearchField
* Select
* Textarea

### Layout

* AppShell
* Sidebar
* Topbar
* PageContainer
* PageHeader
* Section

### Data Display

* DataTable
* StatCard
* ProjectCard
* ProfileCard
* EvidenceCard
* ActivityItem
* SkillCard

### Forms

* FormField
* FileUpload
* TechnologyInput

### Feedback

* Alert
* EmptyState
* StatusBadge
* VerificationStatus

---

# 🧱 Patterns

Patterns combine multiple components to solve common interface problems.

For example:

```text
StatCard
    +
Card
    +
Button
    +
ActivityItem
```

can be combined to create a complete dashboard section.

Patterns should be preferred over duplicating the same UI structure across multiple screens.

---

# 👨‍⚖️ Reviewer Screens

The design system includes complete reviewer-facing screen examples.

Current reviewer screens include:

1. **Reviewer Dashboard**
2. **Pending Reviews**
3. **Review Detail**
4. **Reviewed Projects**
5. **My Statistics**
6. **Messages**
7. **Calendar**
8. **Profile**
9. **Settings**

There is intentionally **no separate Notifications screen**.

The reviewer screens are primarily used for:

* UI development
* Design validation
* Component integration
* Responsive testing
* Storybook review

The data shown in these screens is mock/demo data.

Real authentication, API calls, routing, and backend data belong to the main JADARA application.

---

# 📖 Storybook

Storybook is the main visual development environment.

Run:

```bash
npm run storybook
```

Then open:

```text
http://localhost:6006
```

You should see the available component and pattern stories.

Look for:

```text
Components
Patterns
Screens
```

The reviewer screens should appear under:

```text
Screens
└── Reviewer
```

From there you can preview each reviewer screen independently.

---

# ✏️ How to Modify a Component

Suppose you want to modify the Button.

Find its implementation inside:

```text
src/components/Button/
```

You will typically find:

```text
Button.tsx
Button.css
Button.stories.tsx
```

Modify the component:

```text
Button.tsx
```

Modify its styling:

```text
Button.css
```

Modify or add Storybook examples:

```text
Button.stories.tsx
```

Then run Storybook:

```bash
npm run storybook
```

Your changes should appear automatically while Storybook is running.

---

# ➕ How to Add a New Component

When adding a component, follow the existing structure.

For example:

```text
src/components/Tooltip/
```

Create:

```text
Tooltip.tsx
Tooltip.css
Tooltip.stories.tsx
```

A basic component should:

* Use TypeScript
* Define a clear props interface
* Be reusable
* Avoid application-specific business logic
* Have accessible markup
* Have a Storybook story
* Follow the existing design language

---

# 🖥️ How to Add a New Screen

Screens should generally live inside:

```text
src/patterns/
```

For example:

```text
src/patterns/AdminScreens/
```

A screen should reuse existing components whenever possible.

For example:

```tsx
<PageHeader
  title="Admin Dashboard"
  description="Overview of platform activity"
/>

<StatCard
  title="Users"
  value="1,248"
/>

<Card>
  ...
</Card>

<Button>
  View users
</Button>
```

Avoid recreating components that already exist.

If you need a UI element that doesn't exist, consider adding it as a reusable component first.

---

# 🔄 Component → Pattern → Screen

A useful rule for the project is:

```text
Component
    ↓
Pattern
    ↓
Screen
    ↓
Main JADARA Application
```

### Component

Small reusable UI element.

Example:

```text
Button
```

### Pattern

Reusable combination of components.

Example:

```text
StatCard + Card + ActivityItem
```

### Screen

Complete page assembled from components and patterns.

Example:

```text
Reviewer Dashboard
```

### Main Application

The production application adds:

* Routing
* Authentication
* API integration
* Real database data
* Permissions
* Business logic

---

# 🧪 Testing Your Changes

Before committing changes, run:

```bash
npm run build
```

If the project has linting configured, also run:

```bash
npm run lint
```

If a test script exists:

```bash
npm test
```

The most important check for UI changes is Storybook:

```bash
npm run storybook
```

Review:

* Desktop layout
* Mobile layout
* Hover states
* Disabled states
* Empty states
* Error states
* Long text
* Different data lengths
* Component combinations

---

# 🏗 Building the Project

To create a production build:

```bash
npm run build
```

The generated build will normally be placed in:

```text
dist/
```

Do not commit the generated `dist/` directory unless the project specifically requires it.

---

# 🌿 Git Workflow

When working on the design system, avoid making changes directly on `main` unless that is the team's agreed workflow.

Create a branch:

```bash
git checkout -b feature/reviewer-screens
```

Make your changes.

Check the changes:

```bash
git status
```

Stage them:

```bash
git add .
```

Commit:

```bash
git commit -m "feat: update reviewer screens"
```

Push:

```bash
git push -u origin feature/reviewer-screens
```

Then create a Pull Request on GitHub.

---

# 🔍 Before Committing

Always check:

```bash
git status
```

Review what changed:

```bash
git diff
```

Then:

```bash
npm run build
```

If everything is good:

```bash
git add .
git commit -m "your commit message"
git push
```

---

# 🔗 Working With the Main JADARA Application

The design system and the main JADARA application should be treated as separate projects during development.

### Design System

Responsible for:

```text
UI
Components
Patterns
Visual design
Storybook
Reusable screens
```

### Main JADARA Application

Responsible for:

```text
Authentication
Routing
API
Database
Business logic
Permissions
Real application state
```

The design system should **not** contain application-specific API calls unless explicitly required.

For example, avoid putting:

```text
POST /v1/auth/login
```

inside a reusable Button or Card component.

Instead:

```text
Main Application
      ↓
API / Authentication
      ↓
Application State
      ↓
Design System Components
```

---

# 📦 Using the Design System in Another Project

There are two common approaches.

## Option 1 — Develop locally

Clone this repository and work directly on the design system:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd jadara-design-system
npm install
npm run storybook
```

This is recommended when actively developing the design system.

---

## Option 2 — Use it as a package

The design system can eventually be published as an npm package and consumed by another application.

For example:

```bash
npm install @jadara/design-system
```

Then:

```tsx
import { Button, Card, Avatar } from "@jadara/design-system";
```

The exact package setup depends on the project's publishing configuration.

---

# 🎯 Development Guidelines

## 1. Reuse before creating

Before creating a new component, check whether an existing component can solve the problem.

---

## 2. Keep components reusable

Avoid hardcoding JADARA business logic into basic UI components.

Good:

```tsx
<Button variant="primary">
  Approve
</Button>
```

Avoid:

```tsx
<JadaraApproveReviewerButton />
```

unless there is a genuine reusable pattern requiring it.

---

## 3. Use TypeScript

Define component props explicitly.

Example:

```tsx
interface ExampleProps {
  title: string;
  description?: string;
}
```

---

## 4. Add Storybook coverage

New reusable components should have Storybook stories.

At minimum, consider:

* Default
* Important variants
* Disabled state
* Empty state
* Error state
* Long content
* Responsive behavior

---

## 5. Keep styling consistent

Use the existing design tokens, spacing, typography, borders, shadows, and component patterns rather than introducing arbitrary values everywhere.

---

## 6. Use Lucide icons

When an icon is needed, prefer:

```tsx
import { Search, Settings, Calendar } from "lucide-react";
```

instead of manually created text symbols such as:

```text
🔍
⚙
📅
```

This keeps the interface visually consistent.

---

# 📱 Responsive Design

All screens should be tested at different viewport sizes.

At minimum, check:

```text
Mobile
Tablet
Desktop
Large Desktop
```

Pay particular attention to:

* Sidebar behavior
* Tables
* Cards
* Forms
* Navigation
* Calendar layouts
* Message panels
* Long project names
* Buttons

---

# ♿ Accessibility

Components should be accessible by default.

Consider:

* Semantic HTML
* Keyboard navigation
* Focus states
* Labels for inputs
* `aria-label` where appropriate
* Sufficient contrast
* Disabled states
* Error messages
* Screen-reader-friendly controls

---

# 🐛 Troubleshooting

## `npm install` fails

Try:

```bash
rm -rf node_modules
rm -f package-lock.json
npm install
```

Then restart the development server.

> Only remove `package-lock.json` if you understand that this may regenerate dependency versions. Prefer keeping the existing lockfile when possible.

---

## Storybook doesn't start

Try:

```bash
npm install
```

Then:

```bash
npm run storybook
```

If the problem continues, check:

```bash
node --version
npm --version
```

and inspect the terminal error.

---

## Component doesn't appear in Storybook

Check that the story file matches the Storybook configuration.

For example:

```text
Button.stories.tsx
```

and that it is located inside the configured source directories.

---

## TypeScript errors

Run:

```bash
npm run build
```

The terminal output should identify the file and line causing the problem.

---

## Changes aren't appearing

If Storybook is already running:

1. Save the file.
2. Wait for the page to reload.
3. Refresh the browser if necessary.
4. Check the browser console.
5. Check the terminal for TypeScript/build errors.

---

# 🤝 Contributing

When contributing to the design system:

1. Pull the latest changes.

```bash
git pull
```

2. Create a feature branch.

```bash
git checkout -b feature/my-change
```

3. Make your changes.

4. Add/update Storybook stories.

5. Test the design system.

```bash
npm run build
npm run storybook
```

6. Review your Git diff.

```bash
git diff
```

7. Commit.

```bash
git add .
git commit -m "feat: describe your change"
```

8. Push.

```bash
git push -u origin feature/my-change
```

9. Open a Pull Request.

---

# 🚦Recommended Workflow

For any new JADARA UI feature:

```text
1. Identify the required UI
          ↓
2. Check existing components
          ↓
3. Create missing components
          ↓
4. Add Storybook stories
          ↓
5. Combine components into patterns
          ↓
6. Build the complete screen
          ↓
7. Test desktop + mobile
          ↓
8. Review in Storybook
          ↓
9. Commit + push
          ↓
10. Integrate into main JADARA application
```

---

# 📌 Important

The JADARA Design System is a **UI development environment**, not the production JADARA application.

Mock data inside Storybook/screens is intentional.

Production functionality such as:

* Login
* Authentication
* API requests
* Database access
* Real reviewer data
* Permissions
* Routing
* Notifications
* Application state

should be implemented in the main JADARA application.

---

# 👥 For New Developers

If you are joining the project for the first time, the quickest setup is:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd jadara-design-system
npm install
npm run storybook
```

Then open:

```text
http://localhost:6006
```

Start by exploring:

```text
Components
```

then:

```text
Patterns
```

and finally:

```text
Screens → Reviewer
```

The Storybook screens are the best place to understand how the individual design-system components are combined into complete JADARA interfaces.

---

# 📄 License

Add the project's applicable license here.

---

# JADARA

**JADARA Design System**

Build components once.
Reuse them everywhere.
