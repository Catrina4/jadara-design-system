import { useState } from "react";
import "./PatternsShowcase.css";

import {
  Button,
  Badge,
  Card,
  Input,
  Textarea,
  Avatar,
  IconButton,
  Divider,
} from "../index";

import { ThemeToggle } from "../theme/ThemeToggle";

function PatternsShowcase() {
  const [activeNav, setActiveNav] = useState("Dashboard");

  const navigation = [
    { label: "Dashboard", icon: "⌂" },
    { label: "Projects", icon: "▣" },
    { label: "Skills", icon: "◆" },
    { label: "Reviews", icon: "✓" },
    { label: "Candidates", icon: "◉" },
  ];

  return (
    <div className="showcase">

      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <aside className="showcase-sidebar">

        <div className="sidebar-brand">
          <div className="brand-mark">J</div>

          <div>
            <strong>JADARA</strong>
            <span>Design System</span>
          </div>
        </div>

        <div className="sidebar-section">
          <span className="sidebar-label">MAIN</span>

          <nav>
            {navigation.map((item) => (
              <button
                key={item.label}
                className={`sidebar-item ${
                  activeNav === item.label ? "active" : ""
                }`}
                onClick={() => setActiveNav(item.label)}
              >
                <span className="sidebar-icon">
                  {item.icon}
                </span>

                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="sidebar-section">
          <span className="sidebar-label">SYSTEM</span>

          <nav>
            <button className="sidebar-item">
              <span className="sidebar-icon">⚙</span>
              Settings
            </button>

            <button className="sidebar-item">
              <span className="sidebar-icon">?</span>
              Help Center
            </button>
          </nav>
        </div>

        <div className="sidebar-bottom">

          <div className="sidebar-user">
            <Avatar
              src="https://i.pravatar.cc/100?img=47"
              alt="User"
              size="md"
            />

            <div className="sidebar-user-info">
              <strong>Catrina</strong>
              <span>Designer</span>
            </div>

            <IconButton
              aria-label="More options"
              label="More options"
              icon="⋮"
            />
          </div>

        </div>

      </aside>


      {/* =====================================================
          MAIN
      ====================================================== */}

      <main className="showcase-main">

        {/* TOPBAR */}

        <header className="showcase-topbar">

          <div className="breadcrumb">
            Design System
            <span>/</span>
            Playground
          </div>

          <div className="topbar-actions">

            <IconButton
              aria-label="Notifications"
              label="Notifications"
              icon="🔔"
            />

            <ThemeToggle />

            <Avatar
              src="https://i.pravatar.cc/100?img=47"
              alt="Profile"
              size="sm"
            />

          </div>

        </header>


        {/* CONTENT */}

        <div className="showcase-content">

          {/* PAGE HEADER */}

          <section className="page-header">

            <div>
              <span className="eyebrow">
                JADARA DESIGN SYSTEM
              </span>

              <h1>Patterns Playground</h1>

              <p>
                A complete visual playground for testing the
                JADARA foundations, components and patterns.
              </p>
            </div>

            <div className="page-header-actions">

              <Button variant="secondary">
                View Documentation
              </Button>

              <Button variant="primary">
                Create Project
              </Button>

            </div>

          </section>


          <Divider />


          {/* =================================================
              STAT CARDS
          ================================================== */}

          <section className="showcase-section">

            <SectionTitle
              title="Stat Cards"
              description="Dashboard metrics and quick statistics."
            />

            <div className="stats-grid">

              <StatCard
                label="Pending Reviews"
                value="24"
                change="+12%"
                positive
                icon="◷"
              />

              <StatCard
                label="Reviewed Projects"
                value="184"
                change="+8.4%"
                positive
                icon="✓"
              />

              <StatCard
                label="Active Skills"
                value="36"
                change="+4"
                positive
                icon="◆"
              />

              <StatCard
                label="Candidates"
                value="1,284"
                change="-2.1%"
                positive={false}
                icon="◉"
              />

            </div>

          </section>


          {/* =================================================
              COMPONENTS
          ================================================== */}

          <section className="showcase-section">

            <SectionTitle
              title="Components"
              description="Core reusable JADARA UI components."
            />

            <div className="component-grid">

              <Card className="demo-card">

                <DemoTitle title="Buttons" />

                <div className="demo-row">

                  <Button variant="primary">
                    Primary
                  </Button>

                  <Button variant="secondary">
                    Secondary
                  </Button>

                  <Button variant="ghost">
                    Ghost
                  </Button>

                  <Button variant="danger">
                    Delete
                  </Button>

                </div>

              </Card>


              <Card className="demo-card">

                <DemoTitle title="Badges" />

                <div className="demo-row">

                  <Badge variant="success">
                    Approved
                  </Badge>

                  <Badge variant="warning">
                    Pending
                  </Badge>

                  <Badge variant="error">
                    Rejected
                  </Badge>

                  <Badge variant="info">
                    In Review
                  </Badge>

                </div>

              </Card>


              <Card className="demo-card">

                <DemoTitle title="Avatar" />

                <div className="avatar-row">

                  <Avatar
                    src="https://i.pravatar.cc/100?img=32"
                    alt="User"
                    size="sm"
                  />

                  <Avatar
                    src="https://i.pravatar.cc/100?img=32"
                    alt="User"
                    size="md"
                  />

                  <Avatar
                    src="https://i.pravatar.cc/100?img=32"
                    alt="User"
                    size="lg"
                  />

                </div>

              </Card>

            </div>

          </section>


          {/* =================================================
              DATA DISPLAY
          ================================================== */}

          <section className="showcase-section">

            <SectionTitle
              title="Data Display"
              description="Patterns used throughout JADARA dashboards."
            />

            <div className="data-grid">

              <ProjectCard />

              <SkillCard />

              <ProfileCard />

            </div>

          </section>


          {/* =================================================
              STATUS
          ================================================== */}

          <section className="showcase-section">

            <SectionTitle
              title="Status"
              description="Verification and project states."
            />

            <Card className="demo-card">

              <div className="status-list">

                <StatusRow
                  title="Project approved"
                  description="The reviewer approved this project."
                  status="Approved"
                  variant="success"
                />

                <StatusRow
                  title="Waiting for review"
                  description="This project is currently waiting."
                  status="Pending"
                  variant="warning"
                />

                <StatusRow
                  title="Project rejected"
                  description="Additional evidence is required."
                  status="Rejected"
                  variant="error"
                />

              </div>

            </Card>

          </section>


          {/* =================================================
              FORMS
          ================================================== */}

          <section className="showcase-section">

            <SectionTitle
              title="Forms"
              description="Inputs and form patterns."
            />

            <Card className="form-demo">

              <div className="form-grid">

                <Input
                  label="Project title"
                  placeholder="Enter project title"
                />

                <Input
                  label="Skill"
                  placeholder="Search skills..."
                />

              </div>

              <Textarea
                label="Description"
                placeholder="Describe your project..."
              />

              <div className="technology-input">

                <label>Technologies</label>

                <div className="technology-box">

                  <span className="technology-chip">
                    React
                    <button>×</button>
                  </span>

                  <span className="technology-chip">
                    TypeScript
                    <button>×</button>
                  </span>

                  <input
                    placeholder="Add technology..."
                  />

                </div>

              </div>

              <div className="form-actions">

                <Button variant="ghost">
                  Cancel
                </Button>

                <Button variant="primary">
                  Save Project
                </Button>

              </div>

            </Card>

          </section>


          {/* =================================================
              ACTIVITY
          ================================================== */}

          <section className="showcase-section">

            <SectionTitle
              title="Activity"
              description="Recent platform activity."
            />

            <Card className="activity-card">

              <Activity
                icon="✓"
                title="Project approved"
                text="Mobile Banking Application"
                time="5 minutes ago"
              />

              <Divider />

              <Activity
                icon="◉"
                title="New project submitted"
                text="E-commerce Platform"
                time="24 minutes ago"
              />

              <Divider />

              <Activity
                icon="◆"
                title="New skill added"
                text="React Native"
                time="1 hour ago"
              />

            </Card>

          </section>


          {/* =================================================
              EMPTY STATE
          ================================================== */}

          <section className="showcase-section">

            <SectionTitle
              title="Empty State"
              description="Used when there is no content."
            />

            <Card className="empty-state">

              <div className="empty-icon">
                ◌
              </div>

              <h3>No projects yet</h3>

              <p>
                You haven't created any projects yet.
                Start by creating your first project.
              </p>

              <Button variant="primary">
                Create Project
              </Button>

            </Card>

          </section>

        </div>

      </main>

    </div>
  );
}


/* ============================================================
   SMALL INTERNAL COMPONENTS
============================================================ */

function SectionTitle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}


function DemoTitle({
  title,
}: {
  title: string;
}) {
  return (
    <h3 className="demo-title">
      {title}
    </h3>
  );
}


function StatCard({
  label,
  value,
  change,
  positive,
  icon,
}: {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  icon: string;
}) {
  return (
    <Card className="stat-card">

      <div className="stat-top">

        <div className="stat-icon">
          {icon}
        </div>

        <Badge
          variant={positive ? "success" : "error"}
        >
          {change}
        </Badge>

      </div>

      <span className="stat-label">
        {label}
      </span>

      <strong className="stat-value">
        {value}
      </strong>

    </Card>
  );
}


function ProjectCard() {
  return (
    <Card className="project-card">

      <div className="project-card-top">

        <div className="project-icon">
          ◈
        </div>

        <Badge variant="success">
          Approved
        </Badge>

      </div>

      <h3>
        Mobile Banking Application
      </h3>

      <p>
        A modern banking application designed
        for mobile users.
      </p>

      <div className="project-tags">

        <span>React</span>
        <span>TypeScript</span>
        <span>Node.js</span>

      </div>

      <div className="project-footer">

        <Avatar
          src="https://i.pravatar.cc/100?img=12"
          alt="User"
          size="sm"
        />

        <span>Sarah Ahmed</span>

      </div>

    </Card>
  );
}


function SkillCard() {
  return (
    <Card className="skill-card">

      <div className="skill-icon">
        ◆
      </div>

      <div className="skill-content">

        <div className="skill-heading">

          <h3>React Development</h3>

          <Badge variant="success">
            Verified
          </Badge>

        </div>

        <p>
          Frontend development using React,
          TypeScript and modern web technologies.
        </p>

        <div className="skill-progress">

          <div className="progress-track">
            <div className="progress-value" />
          </div>

          <span>86%</span>

        </div>

      </div>

    </Card>
  );
}


function ProfileCard() {
  return (
    <Card className="profile-card">

      <Avatar
        src="https://i.pravatar.cc/100?img=44"
        alt="Profile"
        size="lg"
      />

      <h3>Sarah Ahmed</h3>

      <p>
        Frontend Developer
      </p>

      <div className="profile-skills">

        <span>React</span>
        <span>TypeScript</span>
        <span>UI/UX</span>

      </div>

      <Button
        variant="secondary"
        fullWidth
      >
        View Profile
      </Button>

    </Card>
  );
}


function StatusRow({
  title,
  description,
  status,
  variant,
}: {
  title: string;
  description: string;
  status: "Approved" | "Pending" | "Rejected";
  variant: "success" | "warning" | "error";
}) {
  return (
    <div className="status-row">

      <div className="status-check">
        {variant === "success"
          ? "✓"
          : variant === "warning"
          ? "!"
          : "×"}
      </div>

      <div className="status-content">

        <strong>{title}</strong>

        <span>{description}</span>

      </div>

      <Badge variant={variant}>
        {status}
      </Badge>

    </div>
  );
}


function Activity({
  icon,
  title,
  text,
  time,
}: {
  icon: string;
  title: string;
  text: string;
  time: string;
}) {
  return (
    <div className="activity-item">

      <div className="activity-icon">
        {icon}
      </div>

      <div className="activity-content">

        <strong>{title}</strong>

        <span>{text}</span>

      </div>

      <time>{time}</time>

    </div>
  );
}


export default PatternsShowcase;