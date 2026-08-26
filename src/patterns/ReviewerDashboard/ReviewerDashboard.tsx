import {
  Avatar,
  Badge,
  Button,
  Card,
} from "../../index";

import "./ReviewerDashboard.css";

const reviews = [
  {
    id: "001",
    project: "E-commerce Platform",
    learner: "Ahmed Benali",
    initials: "AB",
    skill: "React",
    status: "Pending",
    submitted: "2h ago",
    icon: "▣",
  },
  {
    id: "002",
    project: "Mobile Application",
    learner: "Sara Mansouri",
    initials: "SM",
    skill: "Flutter",
    status: "Approved",
    submitted: "5h ago",
    icon: "▯",
  },
  {
    id: "003",
    project: "Portfolio Website",
    learner: "Yasmine Ali",
    initials: "YA",
    skill: "UI/UX",
    status: "Rejected",
    submitted: "1d ago",
    icon: "◎",
  },
  {
    id: "004",
    project: "Management System",
    learner: "Karim Haddad",
    initials: "KH",
    skill: "Laravel",
    status: "Pending",
    submitted: "2d ago",
    icon: "▤",
  },
];

function getStatusVariant(status: string) {
  if (status === "Approved") {
    return "success";
  }

  if (status === "Rejected") {
    return "error";
  }

  return "warning";
}

export function ReviewerDashboard() {
  return (
    <div className="reviewer-dashboard">

      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <aside className="reviewer-sidebar">

        {/* Brand */}

        <div className="reviewer-brand">

          <div className="reviewer-logo">
            <span>✦</span>
          </div>

          <div className="reviewer-brand-text">
            <strong>JADARA</strong>
            <span>REVIEWER PORTAL</span>
          </div>

        </div>


        {/* Navigation */}

        <nav className="reviewer-nav">

          <button className="reviewer-nav-item active">
            <span className="nav-icon">⌂</span>
            <span>Dashboard</span>
          </button>

          <button className="reviewer-nav-item">
            <span className="nav-icon">▣</span>
            <span>Pending Reviews</span>

            <span className="nav-count">
              12
            </span>
          </button>

          <button className="reviewer-nav-item">
            <span className="nav-icon">◇</span>
            <span>Reviewed Projects</span>
          </button>

          <button className="reviewer-nav-item">
            <span className="nav-icon">▥</span>
            <span>My Statistics</span>
          </button>

          <button className="reviewer-nav-item">
            <span className="nav-icon">▱</span>
            <span>Messages</span>

            <span className="nav-count">
              3
            </span>
          </button>

          <button className="reviewer-nav-item">
            <span className="nav-icon">□</span>
            <span>Calendar</span>
          </button>

          <button className="reviewer-nav-item">
            <span className="nav-icon">○</span>
            <span>Profile</span>
          </button>

        </nav>


        {/* Other */}

        <div className="reviewer-other">

          <span className="reviewer-other-label">
            OTHER
          </span>

          <button className="reviewer-nav-item">
            <span className="nav-icon">⚙</span>
            <span>Settings</span>
          </button>

          <button className="reviewer-nav-item">
            <span className="nav-icon">↪</span>
            <span>Log out</span>
          </button>

        </div>


        {/* Reviewer profile */}

        <div className="reviewer-sidebar-profile">

          <Avatar
            size="md"
          >
            CR
          </Avatar>

          <div className="sidebar-profile-info">
            <strong>Catrina Reviewer</strong>
            <span>Reviewer</span>
          </div>

          <button
            className="sidebar-profile-menu"
            aria-label="Open profile menu"
          >
           ⌄
          </button>

        </div>

      </aside>


      {/* =====================================================
          MAIN
      ====================================================== */}

      <main className="reviewer-main">

        {/* Top header */}

        <header className="reviewer-topbar">

          <div className="reviewer-welcome">

            <span className="reviewer-eyebrow">
              REVIEWER PORTAL
            </span>

            <h1>
              Welcome back, Catrina 👋
            </h1>

            <p>
              Review projects and help learners verify
              their skills.
            </p>

          </div>


          <div className="reviewer-top-actions">

            {/* Search */}

            <div className="reviewer-search">

              <span>⌕</span>

              <input
                type="text"
                placeholder="Search anything..."
              />

              <kbd>⌘ K</kbd>

            </div>


            {/* Notifications */}

            <button
              className="reviewer-notification"
              aria-label="Notifications"
            >
              ♧

              <span className="notification-count">
                3
              </span>
            </button>


            {/* Profile */}

            <button className="reviewer-header-profile">

              <Avatar
                size="md"
              >
                CR
              </Avatar>

              <span className="header-profile-info">
                <strong>Catrina Reviewer</strong>
                <small>Reviewer</small>
              </span>

              <span className="profile-chevron">
                ⌄
              </span>

            </button>

          </div>

        </header>


        {/* =====================================================
            STATISTICS
        ====================================================== */}

        <section className="reviewer-stats">

          <Card>

            <div className="reviewer-stat-card">

              <div className="stat-icon purple">
                ▣
              </div>

              <div className="stat-content">

                <span>
                  Pending Reviews
                </span>

                <strong>
                  12
                </strong>

                <small className="stat-positive">
                  +3 today
                </small>

              </div>

              <span className="stat-arrow">
                →
              </span>

            </div>

          </Card>


          <Card>

            <div className="reviewer-stat-card">

              <div className="stat-icon purple">
                ✓
              </div>

              <div className="stat-content">

                <span>
                  Reviewed Projects
                </span>

                <strong>
                  48
                </strong>

                <small className="stat-positive">
                  +8 this week
                </small>

              </div>

              <span className="stat-arrow">
                →
              </span>

            </div>

          </Card>


          <Card>

            <div className="reviewer-stat-card">

              <div className="stat-icon green">
                ✓
              </div>

              <div className="stat-content">

                <span>
                  Approved
                </span>

                <strong>
                  36
                </strong>

                <small className="stat-positive green-text">
                  75% approval rate
                </small>

              </div>

              <span className="stat-arrow">
                →
              </span>

            </div>

          </Card>


          <Card>

            <div className="reviewer-stat-card">

              <div className="stat-icon orange">
                ◷
              </div>

              <div className="stat-content">

                <span>
                  Avg. Review Time
                </span>

                <strong>
                  2.4 <em>days</em>
                </strong>

                <small className="stat-warning">
                  −0.6 vs last week
                </small>

              </div>

              <span className="stat-arrow">
                →
              </span>

            </div>

          </Card>

        </section>


        {/* =====================================================
            REVIEWS
        ====================================================== */}

        <section className="reviewer-reviews">

          <div className="section-heading">

            <div>

              <h2>
                Recent Reviews
              </h2>

              <p>
                Projects recently submitted for review.
              </p>

            </div>

            <Button variant="primary">
              View all reviews&nbsp; →
            </Button>

          </div>


          <Card>

            <div className="review-table">

              {/* Table header */}

              <div className="review-table-header">

                <span>PROJECT</span>
                <span>LEARNER</span>
                <span>SKILL</span>
                <span>STATUS</span>
                <span>SUBMITTED</span>
                <span>ACTION</span>

              </div>


              {/* Rows */}

              {reviews.map((review) => (

                <div
                  className="review-row"
                  key={review.id}
                >

                  {/* Project */}

                  <div className="review-project">

                    <div className="project-icon">
                      {review.icon}
                    </div>

                    <div>

                      <strong>
                        {review.project}
                      </strong>

                      <span>
                        Project #{review.id}
                      </span>

                    </div>

                  </div>


                  {/* Learner */}

                  <div className="review-learner">

                    <Avatar
                      size="sm"
                    >
                      {review.initials}
                    </Avatar>

                    <span>
                      {review.learner}
                    </span>

                  </div>


                  {/* Skill */}

                  <div className="skill-pill">
                    {review.skill}
                  </div>


                  {/* Status */}

                  <Badge
                    variant={getStatusVariant(
                      review.status
                    )}
                  >
                    {review.status}
                  </Badge>


                  {/* Submitted */}

                  <span className="submitted-time">
                    {review.submitted}
                  </span>


                  {/* Action */}

                  <Button
                    variant="secondary"
                  >
                    Review
                  </Button>

                </div>

              ))}

            </div>

          </Card>

        </section>

      </main>

    </div>
  );
}