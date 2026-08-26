import {
  LayoutDashboard,
  FolderKanban,
  ClipboardCheck,
  Users,
  MessageSquare,
  BarChart3,
  Settings,
  HelpCircle,
  Bell,
  Search,
  ArrowUpRight,
  Clock3,
  CheckCircle2,
  XCircle,
  Eye,
  MoreHorizontal,
  FileCheck2,
  Sparkles,
} from "lucide-react";

import "./PatternsShowcase.css";

export default function PatternsShowcase() {
  return (
    <div className="showcase">

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside className="showcase-sidebar">

        <div className="sidebar-brand">
          <div className="brand-mark">
            <Sparkles size={17} />
          </div>

          <span>JADARA</span>
        </div>

        <div className="sidebar-user">
          <div className="user-avatar">
            A
          </div>

          <div>
            <strong>Ahmed Reviewer</strong>
            <span>Reviewer</span>
          </div>

          <MoreHorizontal size={17} />
        </div>

        <nav className="sidebar-nav">

          <SidebarItem
            icon={<LayoutDashboard size={18} />}
            label="Dashboard"
            active
          />

          <SidebarItem
            icon={<FolderKanban size={18} />}
            label="Projects"
          />

          <SidebarItem
            icon={<ClipboardCheck size={18} />}
            label="Reviews"
            badge="12"
          />

          <SidebarItem
            icon={<Users size={18} />}
            label="Talents"
          />

          <SidebarItem
            icon={<MessageSquare size={18} />}
            label="Messages"
            badge="5"
          />

          <SidebarItem
            icon={<BarChart3 size={18} />}
            label="Analytics"
          />

          <div className="sidebar-section-title">
            GENERAL
          </div>

          <SidebarItem
            icon={<Settings size={18} />}
            label="Settings"
          />

          <SidebarItem
            icon={<HelpCircle size={18} />}
            label="Help Center"
          />

        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-profile">
            <div className="user-avatar small">
              A
            </div>

            <div>
              <strong>Ahmed Benali</strong>
              <span>Reviewer</span>
            </div>
          </div>
        </div>

      </aside>


      {/* =====================================================
          MAIN APPLICATION
      ===================================================== */}

      <main className="showcase-main">

        {/* TOPBAR */}

        <header className="showcase-topbar">

          <div className="search-wrapper">
            <Search size={17} />

            <input
              placeholder="Search anything..."
            />

            <kbd>⌘ K</kbd>
          </div>

          <div className="topbar-actions">

            <button className="icon-button">
              <Bell size={18} />
              <span className="notification-dot" />
            </button>

            <div className="topbar-avatar">
              A
            </div>

          </div>

        </header>


        {/* PAGE CONTENT */}

        <div className="showcase-content">

          {/* PAGE HEADER */}

          <div className="page-header">

            <div>

              <div className="breadcrumb">
                Dashboard
              </div>

              <h1>
                Reviewer Dashboard
              </h1>

              <p>
                Review projects and verify talent submissions.
              </p>

            </div>

            <div className="page-actions">

              <button className="secondary-button">
                <Eye size={16} />
                View Projects
              </button>

              <button className="primary-button">
                <ClipboardCheck size={16} />
                New Review
              </button>

            </div>

          </div>


          {/* =================================================
              STAT CARDS
          ================================================= */}

          <section className="stats-grid">

            <StatCard
              icon={<Clock3 size={20} />}
              title="Pending Reviews"
              value="12"
              trend="+3 today"
              variant="purple"
            />

            <StatCard
              icon={<CheckCircle2 size={20} />}
              title="Approved"
              value="48"
              trend="+8 this week"
              variant="green"
            />

            <StatCard
              icon={<XCircle size={20} />}
              title="Rejected"
              value="7"
              trend="-2 this week"
              variant="red"
            />

            <StatCard
              icon={<FileCheck2 size={20} />}
              title="Total Reviews"
              value="67"
              trend="+14 this month"
              variant="blue"
            />

          </section>


          {/* =================================================
              CONTENT GRID
          ================================================= */}

          <section className="dashboard-grid">

            {/* RECENT REVIEWS */}

            <div className="panel reviews-panel">

              <div className="panel-header">

                <div>
                  <h2>Pending Reviews</h2>

                  <p>
                    Projects waiting for your verification
                  </p>
                </div>

                <button className="text-button">
                  View all
                  <ArrowUpRight size={15} />
                </button>

              </div>


              <div className="project-list">

                <ProjectRow
                  title="E-Commerce Platform"
                  student="Ahmed Benali"
                  technologies={["React", "Node.js"]}
                  status="pending"
                  time="2 hours ago"
                />

                <ProjectRow
                  title="Task Management App"
                  student="Sarah Karim"
                  technologies={["Vue", "Express"]}
                  status="pending"
                  time="5 hours ago"
                />

                <ProjectRow
                  title="Portfolio Website"
                  student="Yasmine Ali"
                  technologies={["Next.js", "Tailwind"]}
                  status="approved"
                  time="Yesterday"
                />

                <ProjectRow
                  title="Hotel Booking System"
                  student="Mohamed Amine"
                  technologies={["React", "MongoDB"]}
                  status="rejected"
                  time="2 days ago"
                />

              </div>

            </div>


            {/* ACTIVITY */}

            <div className="panel">

              <div className="panel-header">

                <div>
                  <h2>Recent Activity</h2>

                  <p>
                    Latest review activity
                  </p>
                </div>

                <button className="icon-button light">
                  <MoreHorizontal size={18} />
                </button>

              </div>


              <div className="activity-list">

                <Activity
                  icon={<CheckCircle2 size={17} />}
                  title="Project approved"
                  description="Portfolio Website"
                  time="10 min ago"
                  type="success"
                />

                <Activity
                  icon={<ClipboardCheck size={17} />}
                  title="New project assigned"
                  description="E-Commerce Platform"
                  time="2 hours ago"
                  type="purple"
                />

                <Activity
                  icon={<MessageSquare size={17} />}
                  title="New comment"
                  description="Task Management App"
                  time="4 hours ago"
                  type="blue"
                />

                <Activity
                  icon={<XCircle size={17} />}
                  title="Project rejected"
                  description="Hotel Booking System"
                  time="Yesterday"
                  type="error"
                />

              </div>

            </div>

          </section>


          {/* =================================================
              EMPTY STATE
          ================================================= */}

          <section className="panel empty-state-panel">

            <div className="empty-state">

              <div className="empty-icon">
                <ClipboardCheck size={24} />
              </div>

              <h2>
                You're all caught up 🎉
              </h2>

              <p>
                There are no additional projects waiting for
                your review right now.
              </p>

              <button className="primary-button">
                Browse Projects
                <ArrowUpRight size={16} />
              </button>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}


/* ============================================================
   SIDEBAR ITEM
============================================================ */

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: string;
}

function SidebarItem({
  icon,
  label,
  active = false,
  badge,
}: SidebarItemProps) {
  return (
    <button
      className={`sidebar-item ${
        active ? "active" : ""
      }`}
    >

      <span className="sidebar-icon">
        {icon}
      </span>

      <span className="sidebar-label">
        {label}
      </span>

      {badge && (
        <span className="sidebar-badge">
          {badge}
        </span>
      )}

    </button>
  );
}


/* ============================================================
   STAT CARD
============================================================ */

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  trend: string;
  variant: "purple" | "green" | "red" | "blue";
}

function StatCard({
  icon,
  title,
  value,
  trend,
  variant,
}: StatCardProps) {
  return (
    <div className="stat-card">

      <div className={`stat-icon ${variant}`}>
        {icon}
      </div>

      <div className="stat-content">

        <span className="stat-title">
          {title}
        </span>

        <strong className="stat-value">
          {value}
        </strong>

        <span className={`stat-trend ${variant}`}>
          ↑ {trend}
        </span>

      </div>

    </div>
  );
}


/* ============================================================
   PROJECT ROW
============================================================ */

interface ProjectRowProps {
  title: string;
  student: string;
  technologies: string[];
  status: "pending" | "approved" | "rejected";
  time: string;
}

function ProjectRow({
  title,
  student,
  technologies,
  status,
  time,
}: ProjectRowProps) {
  return (
    <div className="project-row">

      <div className="project-thumbnail">
        <FolderKanban size={21} />
      </div>

      <div className="project-info">

        <strong>
          {title}
        </strong>

        <span>
          by {student}
        </span>

        <div className="technology-list">

          {technologies.map((technology) => (
            <span
              key={technology}
              className="technology-chip"
            >
              {technology}
            </span>
          ))}

        </div>

      </div>

      <div className="project-meta">

        <StatusBadge status={status} />

        <span className="project-time">
          {time}
        </span>

      </div>

      <button className="row-action">
        <ArrowUpRight size={17} />
      </button>

    </div>
  );
}


/* ============================================================
   STATUS BADGE
============================================================ */

function StatusBadge({
  status,
}: {
  status: "pending" | "approved" | "rejected";
}) {

  const labels = {
    pending: "Pending",
    approved: "Approved",
    rejected: "Rejected",
  };

  return (
    <span
      className={`status-badge ${status}`}
    >
      {labels[status]}
    </span>
  );
}


/* ============================================================
   ACTIVITY
============================================================ */

interface ActivityProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
  type: "success" | "purple" | "blue" | "error";
}

function Activity({
  icon,
  title,
  description,
  time,
  type,
}: ActivityProps) {
  return (
    <div className="activity-item">

      <div className={`activity-icon ${type}`}>
        {icon}
      </div>

      <div className="activity-content">

        <strong>
          {title}
        </strong>

        <span>
          {description}
        </span>

      </div>

      <time>
        {time}
      </time>

    </div>
  );
}