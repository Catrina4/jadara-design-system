import {
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  ActivityItem,
  Alert,
  AppShell,
  Avatar,
  Badge,
  Button,
  Card,
  DataTable,
  Divider,
  EmptyState,
  EvidenceCard,
  FileUpload,
  FormField,
  IconButton,
  Input,
  PageContainer,
  PageHeader,
  ProfileCard,
  ProjectCard,
  SearchField,
  Section,
  Select,
  SkillCard,
  StatCard,
  StatusBadge,
  Textarea,
  TechnologyInput,
  VerificationStatus,
} from "../../index";

import {
  BarChart3,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  Download,
  ExternalLink,
  FileText,
  FolderCheck,
  GitBranch,
  LayoutDashboard,
  Mail,
  MessageSquare,
  MoreHorizontal,
  Paperclip,
  Plus,
  Search,
  Send,
  Settings,
  ShieldCheck,
  Star,
  Trash2,
  User,
  Users,
  X,
} from "lucide-react";

import "./ReviewerScreens.css";

/* =========================================================
   TYPES
========================================================= */

export type ReviewerScreen =
  | "dashboard"
  | "pending"
  | "review-detail"
  | "reviewed"
  | "statistics"
  | "messages"
  | "calendar"
  | "profile"
  | "settings";

export interface ReviewerScreensProps {
  initialScreen?: ReviewerScreen;
}

/* =========================================================
   MOCK DATA
========================================================= */

const pendingReviews = [
  {
    id: "REV-001",
    project: "E-commerce Platform",
    learner: "Ahmed Benali",
    initials: "AB",
    skill: "React",
    submitted: "2 hours ago",
    priority: "High",
    description:
      "Full-stack e-commerce application with authentication, product management, cart and checkout.",
  },
  {
    id: "REV-002",
    project: "Mobile Fitness Application",
    learner: "Sara Mansouri",
    initials: "SM",
    skill: "Flutter",
    submitted: "5 hours ago",
    priority: "Normal",
    description:
      "Mobile fitness application with workout tracking, progress reporting and user profiles.",
  },
  {
    id: "REV-003",
    project: "Analytics Dashboard",
    learner: "Yasmine Ali",
    initials: "YA",
    skill: "Data Analysis",
    submitted: "Yesterday",
    priority: "Normal",
    description:
      "Interactive analytics dashboard showing business KPIs, trends and customer segmentation.",
  },
  {
    id: "REV-004",
    project: "Management System",
    learner: "Karim Haddad",
    initials: "KH",
    skill: "Laravel",
    submitted: "Yesterday",
    priority: "High",
    description:
      "Administrative management system with role-based access and reporting functionality.",
  },
];

const reviewedProjects = [
  {
    id: "REV-098",
    project: "Portfolio Website",
    learner: "Nadia Rahmani",
    skill: "UI/UX",
    date: "Sep 3, 2026",
    status: "approved" as const,
  },
  {
    id: "REV-097",
    project: "Booking Platform",
    learner: "Omar Bensaid",
    skill: "React",
    date: "Sep 2, 2026",
    status: "approved" as const,
  },
  {
    id: "REV-096",
    project: "Social Network API",
    learner: "Lina Saidi",
    skill: "Node.js",
    date: "Sep 1, 2026",
    status: "rejected" as const,
  },
  {
    id: "REV-095",
    project: "Inventory System",
    learner: "Mehdi Kaci",
    skill: "Laravel",
    date: "Aug 31, 2026",
    status: "completed" as const,
  },
];

const conversations = [
  {
    id: "1",
    name: "Ahmed Benali",
    initials: "AB",
    preview: "Thank you for the feedback...",
    time: "10:42",
    unread: true,
  },
  {
    id: "2",
    name: "Sara Mansouri",
    initials: "SM",
    preview: "I have uploaded the updated evidence.",
    time: "09:15",
    unread: true,
  },
  {
    id: "3",
    name: "JADARA Support",
    initials: "JS",
    preview: "Your reviewer account has been verified.",
    time: "Yesterday",
    unread: false,
  },
];

const calendarEvents = [
  {
    day: 8,
    title: "Review deadline",
    description: "E-commerce Platform",
    type: "Deadline",
  },
  {
    day: 12,
    title: "Reviewer sync",
    description: "Monthly reviewer meeting",
    type: "Meeting",
  },
  {
    day: 16,
    title: "Review deadline",
    description: "Analytics Dashboard",
    type: "Deadline",
  },
];

/* =========================================================
   NAVIGATION
========================================================= */

const navigation = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <LayoutDashboard size={18} />,
  },
  {
    id: "pending",
    label: "Pending Reviews",
    icon: <ClipboardCheck size={18} />,
    badge: 12,
  },
  {
    id: "reviewed",
    label: "Reviewed Projects",
    icon: <FolderCheck size={18} />,
  },
  {
    id: "statistics",
    label: "My Statistics",
    icon: <BarChart3 size={18} />,
  },
  {
    id: "messages",
    label: "Messages",
    icon: <MessageSquare size={18} />,
    badge: 3,
  },
  {
    id: "calendar",
    label: "Calendar",
    icon: <CalendarDays size={18} />,
  },
];

const accountNavigation = [
  {
    id: "profile",
    label: "Profile",
    icon: <User size={18} />,
  },
  {
    id: "settings",
    label: "Settings",
    icon: <Settings size={18} />,
  },
];

/* =========================================================
   SHELL
========================================================= */

function ReviewerShell({
  active,
  onNavigate,
  children,
}: {
  active: ReviewerScreen;
  onNavigate: (screen: ReviewerScreen) => void;
  children: ReactNode;
}) {
  const [, setSearch] = useState("");

  const sidebarSections = [
    {
      label: "WORKSPACE",
      items: navigation.map((item) => ({
        ...item,
        id: item.id,
      })),
    },
    {
      label: "ACCOUNT",
      items: accountNavigation,
    },
  ];

  return (
    <AppShell
      sidebar={{
        brand: "JADARA",
        caption: "Reviewer Portal",
        sections: sidebarSections,
        activeItem: active,
        onItemChange: (id) => {
          onNavigate(id as ReviewerScreen);
        },
        user: {
          name: "Catrina Reviewer",
          role: "Expert Reviewer",
          avatar: "CR",
        },
      }}
      topbar={{
        onSearch: setSearch,
        user: {
          name: "Catrina Reviewer",
          role: "Expert Reviewer",
          avatar: "CR",
        },
        onNotificationClick: () => {
          console.log("Notifications clicked");
        },
      }}
    >
      {children}
    </AppShell>
  );
}

/* =========================================================
   DASHBOARD
========================================================= */

function DashboardScreen({
  onNavigate,
}: {
  onNavigate: (screen: ReviewerScreen) => void;
}) {
  return (
    <PageContainer size="full">
      <PageHeader
        eyebrow="REVIEWER PORTAL"
        title="Welcome back, Catrina 👋"
        description="Review projects and help learners verify their skills."
        actions={
          <Button
            leftIcon={<ClipboardCheck size={16} />}
            onClick={() => onNavigate("pending")}
          >
            Start reviewing
          </Button>
        }
      />

      <div className="reviewer-screen__stats">
        <StatCard
          title="Pending Reviews"
          value="12"
          description="Projects waiting for review"
          trend="+3 this week"
          tone="purple"
          icon={<ClipboardCheck size={20} />}
        />

        <StatCard
          title="Reviews Completed"
          value="148"
          description="Total completed reviews"
          trend="+18 this month"
          tone="green"
          icon={<CheckCircle2 size={20} />}
        />

        <StatCard
          title="Approval Rate"
          value="87%"
          description="Across your reviews"
          trend="+4.2% this month"
          tone="blue"
          icon={<ShieldCheck size={20} />}
        />

        <StatCard
          title="Average Review Time"
          value="18m"
          description="Average completion time"
          trend="-3m this month"
          tone="orange"
          icon={<Clock3 size={20} />}
        />
      </div>

      <div className="reviewer-screen__grid reviewer-screen__grid--two">
        <Section
          title="Reviews waiting for you"
          description="Prioritized submissions that need your attention."
          action={
            <Button
              variant="ghost"
              size="small"
              rightIcon={<ChevronRight size={15} />}
              onClick={() => onNavigate("pending")}
            >
              View all
            </Button>
          }
        >
          <div className="reviewer-review-list">
            {pendingReviews.slice(0, 3).map((review) => (
              <Card key={review.id} padding="sm">
                <div className="reviewer-list-row">
                  <Avatar
                    size="md"
                    fallback={review.initials}
                  />

                  <div className="reviewer-list-row__content">
                    <strong>{review.project}</strong>
                    <span>
                      {review.learner} · {review.skill}
                    </span>
                  </div>

                  <StatusBadge status="pending" />

                  <Button
                    size="small"
                    variant="outline"
                    onClick={() => onNavigate("review-detail")}
                  >
                    Review
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          title="Recent activity"
          description="Your latest reviewer activity."
        >
          <Card padding="sm">
            <ActivityItem
              title="Approved"
              description="Nadia's Portfolio Website"
              time="1 hour ago"
              icon={<Check size={16} />}
            />

            <Divider />

            <ActivityItem
              title="Requested changes"
              description="Omar's Booking Platform"
              time="3 hours ago"
              icon={<MessageSquare size={16} />}
            />

            <Divider />

            <ActivityItem
              title="Completed review"
              description="Mehdi's Inventory System"
              time="Yesterday"
              icon={<CheckCircle2 size={16} />}
            />
          </Card>
        </Section>
      </div>

      <Section
        title="Reviewer overview"
        description="A quick look at your current workload."
      >
        <div className="reviewer-screen__grid reviewer-screen__grid--three">
          <ProjectCard
            title="E-commerce Platform"
            author="Ahmed Benali"
            description="Full-stack application requiring React verification."
            technologies={["React", "Node.js", "PostgreSQL"]}
            status={<StatusBadge status="pending" />}
            date="Submitted 2h ago"
          />

          <ProjectCard
            title="Analytics Dashboard"
            author="Yasmine Ali"
            description="Business intelligence dashboard and data visualization."
            technologies={["Python", "Pandas", "Power BI"]}
            status={<StatusBadge status="pending" />}
            date="Submitted yesterday"
          />

          <ProjectCard
            title="Mobile Fitness App"
            author="Sara Mansouri"
            description="Mobile application for workout tracking."
            technologies={["Flutter", "Dart", "Firebase"]}
            status={<StatusBadge status="in-review" />}
            date="Submitted 5h ago"
          />
        </div>
      </Section>
    </PageContainer>
  );
}

/* =========================================================
   PENDING REVIEWS
========================================================= */

function PendingReviewsScreen({
  onNavigate,
}: {
  onNavigate: (screen: ReviewerScreen) => void;
}) {
  const [search, setSearch] = useState("");
  const [priority, setPriority] = useState("all");

  const filtered = useMemo(() => {
    return pendingReviews.filter((review) => {
      const text =
        `${review.project} ${review.learner} ${review.skill}`.toLowerCase();

      const searchMatch =
        text.includes(search.toLowerCase());

      const priorityMatch =
        priority === "all" ||
        review.priority.toLowerCase() === priority;

      return searchMatch && priorityMatch;
    });
  }, [search, priority]);

  return (
    <PageContainer size="full">
      <PageHeader
        eyebrow="REVIEW QUEUE"
        title="Pending Reviews"
        description="Review learner submissions and verify their demonstrated skills."
        actions={
          <Badge variant="warning">
            {filtered.length} pending
          </Badge>
        }
      />

      <Card padding="sm">
        <div className="reviewer-toolbar">
          <SearchField
            value={search}
            onChange={setSearch}
            placeholder="Search projects, learners or skills..."
          />

          <Select
            value={priority}
            onChange={setPriority}
            ariaLabel="Priority filter"
            options={[
              { value: "all", label: "All priorities" },
              { value: "high", label: "High priority" },
              { value: "normal", label: "Normal priority" },
            ]}
          />

          <Button
            variant="outline"
            leftIcon={<MoreHorizontal size={16} />}
          >
            More filters
          </Button>
        </div>
      </Card>

      <Section
        title={`${filtered.length} submissions`}
        description="Sorted by priority and submission date."
      >
        <div className="reviewer-screen__stack">
          {filtered.map((review) => (
            <Card key={review.id} padding="md">
              <div className="reviewer-pending-row">
                <Avatar
                  size="lg"
                  fallback={review.initials}
                />

                <div className="reviewer-pending-row__content">
                  <div className="reviewer-pending-row__heading">
                    <div>
                      <span className="reviewer-overline">
                        {review.id}
                      </span>

                      <h3>{review.project}</h3>
                    </div>

                    <Badge
                      variant={
                        review.priority === "High"
                          ? "error"
                          : "neutral"
                      }
                    >
                      {review.priority}
                    </Badge>
                  </div>

                  <p>{review.description}</p>

                  <div className="reviewer-meta">
                    <span>
                      <User size={14} />
                      {review.learner}
                    </span>

                    <span>
                      <ShieldCheck size={14} />
                      {review.skill}
                    </span>

                    <span>
                      <Clock3 size={14} />
                      {review.submitted}
                    </span>
                  </div>
                </div>

                <Button
                  rightIcon={<ChevronRight size={16} />}
                  onClick={() => onNavigate("review-detail")}
                >
                  Review
                </Button>
              </div>
            </Card>
          ))}

          {filtered.length === 0 && (
            <EmptyState
              title="No pending reviews found"
              description="Try changing your search or filters."
              icon={<Search size={24} />}
            />
          )}
        </div>
      </Section>
    </PageContainer>
  );
}

/* =========================================================
   REVIEW DETAIL
========================================================= */

function ReviewDetailScreen({
  onNavigate,
}: {
  onNavigate: (screen: ReviewerScreen) => void;
}) {
  const [decision, setDecision] = useState<
    "approved" | "changes" | "rejected" | null
  >(null);

  const [technologies, setTechnologies] = useState([
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
  ]);

  const [files, setFiles] = useState<File[]>([]);

  return (
    <PageContainer size="full">
      <div className="reviewer-back">
        <Button
          variant="ghost"
          leftIcon={<ChevronLeft size={16} />}
          onClick={() => onNavigate("pending")}
        >
          Back to pending reviews
        </Button>
      </div>

      <PageHeader
        eyebrow="REV-001"
        title="E-commerce Platform"
        description="Submitted by Ahmed Benali · 2 hours ago"
        actions={
          <div className="reviewer-inline-actions">
            <Button
              variant="outline"
              leftIcon={<ExternalLink size={16} />}
            >
              Open project
            </Button>

            <Button
              variant="outline"
              leftIcon={<GitBranch size={16} />}
            >
              Repository
            </Button>
          </div>
        }
      />

      <Alert
        variant="info"
        title="Review guidance"
      >
        Verify that the submitted evidence demonstrates the claimed
        React skills. You can request changes if the evidence is
        incomplete.
      </Alert>

      <div className="reviewer-screen__grid reviewer-screen__grid--two">
        <div className="reviewer-screen__stack">
          <Section
            title="Verification progress"
            description="Current state of this submission."
          >
            <Card>
              <VerificationStatus current="in-review" />
            </Card>
          </Section>

          <Section
            title="Project overview"
            description="Information provided by the learner."
          >
            <Card>
              <h3 className="reviewer-card-title">
                E-commerce Platform
              </h3>

              <p className="reviewer-card-text">
                A complete e-commerce platform allowing users to browse
                products, manage a shopping cart, authenticate and
                complete checkout.
              </p>

              <Divider />

              <div className="reviewer-detail-grid">
                <div>
                  <span>Category</span>
                  <strong>Web Development</strong>
                </div>

                <div>
                  <span>Submitted</span>
                  <strong>Sep 5, 2026</strong>
                </div>

                <div>
                  <span>Repository</span>
                  <strong>github.com/ahmed/ecommerce</strong>
                </div>

                <div>
                  <span>Deployment</span>
                  <strong>ecommerce-demo.app</strong>
                </div>
              </div>
            </Card>
          </Section>

          <Section
            title="Skills being verified"
            description="Skills the learner selected for this project."
          >
            <div className="reviewer-screen__grid reviewer-screen__grid--two">
              <SkillCard
                name="React"
                level="Advanced"
                description="Component architecture, hooks and state management."
                progress={86}
                icon={<ShieldCheck size={20} />}
              />

              <SkillCard
                name="TypeScript"
                level="Advanced"
                description="Typed application architecture and reusable interfaces."
                progress={82}
                icon={<ShieldCheck size={20} />}
              />

              <SkillCard
                name="API Integration"
                level="Intermediate"
                description="REST API consumption and error handling."
                progress={68}
                icon={<ExternalLink size={20} />}
              />

              <SkillCard
                name="Database"
                level="Intermediate"
                description="PostgreSQL schema design and queries."
                progress={71}
                icon={<FolderCheck size={20} />}
              />
            </div>
          </Section>

          <Section
            title="Technologies"
            description="Technology stack declared by the learner."
          >
            <TechnologyInput
              value={technologies}
              onChange={setTechnologies}
            />
          </Section>

          <Section
            title="Evidence"
            description="Documents and artifacts submitted for verification."
          >
            <div className="reviewer-screen__stack">
              <EvidenceCard
                title="Project Documentation.pdf"
                type="PDF document"
                date="Uploaded 2h ago"
                icon={<FileText size={22} />}
                action={
                  <IconButton
                    label="Download evidence"
                    icon={<Download size={16} />}
                  />
                }
              />

              <EvidenceCard
                title="Architecture Screenshot.png"
                type="Image"
                date="Uploaded 2h ago"
                icon={<FileText size={22} />}
                action={
                  <IconButton
                    label="Open evidence"
                    icon={<ExternalLink size={16} />}
                  />
                }
              />

              <EvidenceCard
                title="Demo Video"
                type="External link"
                date="Added 2h ago"
                icon={<ExternalLink size={22} />}
                action={
                  <IconButton
                    label="Open demo"
                    icon={<ExternalLink size={16} />}
                  />
                }
              />
            </div>

            <div className="reviewer-upload-area">
              <FileUpload
                multiple
                files={files}
                onChange={setFiles}
                onRemove={(file) =>
                  setFiles(
                    files.filter(
                      (item) => item !== file,
                    ),
                  )
                }
                label="Add reviewer evidence"
                description="Attach supporting files to your review."
              />
            </div>
          </Section>
        </div>

        <div className="reviewer-screen__stack">
          <Section
            title="Learner"
            description="Profile of the person being reviewed."
          >
            <ProfileCard
              name="Ahmed Benali"
              role="Frontend Developer"
              location="Algiers, Algeria"
              description="Developer focused on modern web applications and product engineering."
              meta={
                <div className="reviewer-profile-meta">
                  <Badge variant="purple">React</Badge>
                  <Badge variant="info">TypeScript</Badge>
                  <Badge variant="neutral">Node.js</Badge>
                </div>
              }
            />
          </Section>

          <Section
            title="Reviewer decision"
            description="Choose the outcome of your review."
          >
            <Card>
              <div className="reviewer-decision-list">
                <button
                  type="button"
                  className={`reviewer-decision ${
                    decision === "approved"
                      ? "reviewer-decision--selected reviewer-decision--approved"
                      : ""
                  }`}
                  onClick={() => setDecision("approved")}
                >
                  <CheckCircle2 size={21} />

                  <div>
                    <strong>Approve</strong>
                    <span>
                      Evidence sufficiently demonstrates the claimed
                      skills.
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  className={`reviewer-decision ${
                    decision === "changes"
                      ? "reviewer-decision--selected"
                      : ""
                  }`}
                  onClick={() => setDecision("changes")}
                >
                  <MessageSquare size={21} />

                  <div>
                    <strong>Request changes</strong>
                    <span>
                      Ask the learner to improve or add evidence.
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  className={`reviewer-decision ${
                    decision === "rejected"
                      ? "reviewer-decision--selected reviewer-decision--rejected"
                      : ""
                  }`}
                  onClick={() => setDecision("rejected")}
                >
                  <X size={21} />

                  <div>
                    <strong>Reject</strong>
                    <span>
                      Evidence does not sufficiently demonstrate the
                      claimed skills.
                    </span>
                  </div>
                </button>
              </div>

              <Divider />

              <Textarea
                label="Reviewer notes"
                placeholder="Write your reasoning and feedback..."
                rows={6}
                hint="Your notes will be visible to the learner."
              />

              <div className="reviewer-form-actions">
                <Button variant="outline">
                  Save draft
                </Button>

                <Button
                  disabled={!decision}
                  leftIcon={<Send size={16} />}
                >
                  Submit decision
                </Button>
              </div>
            </Card>
          </Section>

          <Section
            title="Review activity"
            description="History related to this submission."
          >
            <Card padding="sm">
              <ActivityItem
                title="Submission received"
                description="Ahmed submitted the project."
                time="2 hours ago"
                icon={<ClipboardCheck size={16} />}
              />

              <Divider />

              <ActivityItem
                title="Review started"
                description="You opened the submission."
                time="14 minutes ago"
                icon={<Search size={16} />}
              />
            </Card>
          </Section>
        </div>
      </div>
    </PageContainer>
  );
}

/* =========================================================
   REVIEWED PROJECTS
========================================================= */

function ReviewedProjectsScreen() {
  const columns = [
    {
      key: "project",
      header: "Project",
      render: (item: typeof reviewedProjects[number]) => (
        <div>
          <strong>{item.project}</strong>
          <small>{item.id}</small>
        </div>
      ),
    },
    {
      key: "learner",
      header: "Learner",
      render: (item: typeof reviewedProjects[number]) => (
        <span>{item.learner}</span>
      ),
    },
    {
      key: "skill",
      header: "Skill",
      render: (item: typeof reviewedProjects[number]) => (
        <Badge variant="neutral">
          {item.skill}
        </Badge>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (item: typeof reviewedProjects[number]) => (
        <StatusBadge status={item.status} />
      ),
    },
    {
      key: "date",
      header: "Reviewed",
      render: (item: typeof reviewedProjects[number]) => (
        <span>{item.date}</span>
      ),
    },
    {
      key: "action",
      header: "",
      render: () => (
        <IconButton
          label="View project"
          icon={<ExternalLink size={16} />}
        />
      ),
    },
  ];

  return (
    <PageContainer size="full">
      <PageHeader
        eyebrow="REVIEW HISTORY"
        title="Reviewed Projects"
        description="Projects you have already reviewed."
        actions={
          <Button
            variant="outline"
            leftIcon={<Download size={16} />}
          >
            Export history
          </Button>
        }
      />

      <div className="reviewer-screen__stats reviewer-screen__stats--three">
        <StatCard
          title="Reviewed this month"
          value="42"
          trend="+12%"
          tone="green"
          icon={<CheckCircle2 size={20} />}
        />

        <StatCard
          title="Approved"
          value="36"
          description="86% of reviewed projects"
          tone="blue"
          icon={<ShieldCheck size={20} />}
        />

        <StatCard
          title="Rejected"
          value="6"
          description="14% of reviewed projects"
          tone="red"
          icon={<X size={20} />}
        />
      </div>

      <Section
        title="Review history"
        description="Your completed review decisions."
      >
        <DataTable
          columns={columns}
          data={reviewedProjects}
          getRowKey={(item) => item.id}
          onRowClick={(item) =>
            console.log("Open reviewed project", item.id)
          }
        />
      </Section>
    </PageContainer>
  );
}

/* =========================================================
   STATISTICS
========================================================= */

function StatisticsScreen() {
  return (
    <PageContainer size="full">
      <PageHeader
        eyebrow="PERFORMANCE"
        title="My Statistics"
        description="Track your review activity and performance."
      />

      <div className="reviewer-screen__stats">
        <StatCard
          title="Total Reviews"
          value="148"
          trend="+18 this month"
          tone="purple"
          icon={<ClipboardCheck size={20} />}
        />

        <StatCard
          title="Approval Rate"
          value="87%"
          trend="+4.2%"
          tone="green"
          icon={<CheckCircle2 size={20} />}
        />

        <StatCard
          title="Average Review Time"
          value="18m"
          trend="-3m"
          tone="orange"
          icon={<Clock3 size={20} />}
        />

        <StatCard
          title="Learners Helped"
          value="126"
          trend="+14 this month"
          tone="blue"
          icon={<Users size={20} />}
        />
      </div>

      <div className="reviewer-screen__grid reviewer-screen__grid--two">
        <Section
          title="Review activity"
          description="Reviews completed over the last six months."
        >
          <Card>
            <div className="reviewer-bar-chart">
              {[42, 58, 51, 73, 66, 82].map(
                (value, index) => (
                  <div
                    key={index}
                    className="reviewer-bar-chart__item"
                  >
                    <div
                      className="reviewer-bar-chart__bar"
                      style={{
                        height: `${value}%`,
                      }}
                    />

                    <span>
                      {
                        [
                          "Apr",
                          "May",
                          "Jun",
                          "Jul",
                          "Aug",
                          "Sep",
                        ][index]
                      }
                    </span>
                  </div>
                ),
              )}
            </div>
          </Card>
        </Section>

        <Section
          title="Skills reviewed"
          description="Distribution of your review expertise."
        >
          <Card padding="sm">
            <SkillCard
              name="React"
              level="Expert"
              progress={94}
              description="52 reviews"
            />

            <Divider />

            <SkillCard
              name="JavaScript"
              level="Expert"
              progress={91}
              description="38 reviews"
            />

            <Divider />

            <SkillCard
              name="UI/UX"
              level="Advanced"
              progress={78}
              description="27 reviews"
            />

            <Divider />

            <SkillCard
              name="Backend"
              level="Advanced"
              progress={74}
              description="31 reviews"
            />
          </Card>
        </Section>
      </div>

      <Section
        title="Recent achievements"
        description="Milestones from your reviewer activity."
      >
        <div className="reviewer-screen__grid reviewer-screen__grid--three">
          <Card>
            <div className="reviewer-achievement">
              <div className="reviewer-achievement__icon">
                <Star size={20} />
              </div>

              <strong>100 Reviews</strong>

              <span>
                Completed your first 100 project reviews.
              </span>
            </div>
          </Card>

          <Card>
            <div className="reviewer-achievement">
              <div className="reviewer-achievement__icon">
                <Clock3 size={20} />
              </div>

              <strong>Fast Reviewer</strong>

              <span>
                Maintained an average review time under 20 minutes.
              </span>
            </div>
          </Card>

          <Card>
            <div className="reviewer-achievement">
              <div className="reviewer-achievement__icon">
                <ShieldCheck size={20} />
              </div>

              <strong>Trusted Expert</strong>

              <span>
                Maintained excellent review quality.
              </span>
            </div>
          </Card>
        </div>
      </Section>
    </PageContainer>
  );
}

/* =========================================================
   MESSAGES
========================================================= */

function MessagesScreen() {
  const [selectedConversation, setSelectedConversation] =
    useState("1");

  const conversation =
    conversations.find(
      (item) => item.id === selectedConversation,
    ) ?? conversations[0];

  return (
    <PageContainer size="full">
      <PageHeader
        eyebrow="COMMUNICATION"
        title="Messages"
        description="Communicate with learners and the JADARA team."
        actions={
          <Button
            leftIcon={<Plus size={16} />}
          >
            New message
          </Button>
        }
      />

      <Card padding="sm">
        <div className="reviewer-messages">
          <aside className="reviewer-messages__inbox">
            <SearchField
              value=""
              onChange={() => {}}
              placeholder="Search messages..."
            />

            <div className="reviewer-conversations">
              {conversations.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={`reviewer-conversation ${
                    item.id === selectedConversation
                      ? "reviewer-conversation--active"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedConversation(item.id)
                  }
                >
                  <Avatar
                    size="md"
                    fallback={item.initials}
                  />

                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.preview}</span>
                  </div>

                  <small>{item.time}</small>

                  {item.unread && (
                    <i />
                  )}
                </button>
              ))}
            </div>
          </aside>

          <section className="reviewer-messages__conversation">
            <div className="reviewer-message-header">
              <Avatar
                size="md"
                fallback={conversation.initials}
              />

              <div>
                <strong>{conversation.name}</strong>
                <span>Online</span>
              </div>

              <div className="reviewer-message-header__actions">
                <IconButton
                  label="Call"
                  icon={<Mail size={16} />}
                />

                <IconButton
                  label="More options"
                  icon={<MoreHorizontal size={16} />}
                />
              </div>
            </div>

            <div className="reviewer-message-thread">
              <div className="reviewer-message reviewer-message--received">
                <p>
                  Hi Catrina, I wanted to ask about the feedback on
                  my project.
                </p>
                <small>10:21</small>
              </div>

              <div className="reviewer-message reviewer-message--sent">
                <p>
                  Of course. I have reviewed the submission and left
                  a few notes about the API evidence.
                </p>
                <small>10:34</small>
              </div>

              <div className="reviewer-message reviewer-message--received">
                <p>
                  Thank you! I will upload the additional evidence
                  shortly.
                </p>
                <small>10:42</small>
              </div>
            </div>

            <div className="reviewer-message-composer">
              <IconButton
                label="Attach file"
                icon={<Paperclip size={17} />}
              />

              <Input
                aria-label="Message"
                placeholder="Write a message..."
              />

              <Button
                leftIcon={<Send size={16} />}
              >
                Send
              </Button>
            </div>
          </section>
        </div>
      </Card>
    </PageContainer>
  );
}

/* =========================================================
   CALENDAR
========================================================= */

function CalendarScreen() {
  const [month, setMonth] = useState("September 2026");

  return (
    <PageContainer size="full">
      <PageHeader
        eyebrow="SCHEDULE"
        title="Calendar"
        description="Keep track of review deadlines and reviewer events."
        actions={
          <Button
            leftIcon={<Plus size={16} />}
          >
            Add event
          </Button>
        }
      />

      <div className="reviewer-screen__grid reviewer-screen__grid--two">
        <Card>
          <div className="reviewer-calendar-header">
            <Button
              variant="ghost"
              onClick={() => setMonth("August 2026")}
            >
              <ChevronLeft size={18} />
            </Button>

            <strong>{month}</strong>

            <Button
              variant="ghost"
              onClick={() => setMonth("October 2026")}
            >
              <ChevronRight size={18} />
            </Button>
          </div>

          <div className="reviewer-calendar-weekdays">
            {[
              "Mon",
              "Tue",
              "Wed",
              "Thu",
              "Fri",
              "Sat",
              "Sun",
            ].map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>

          <div className="reviewer-calendar-grid">
            {Array.from({ length: 30 }, (_, index) => {
              const day = index + 1;

              const hasEvent =
                calendarEvents.some(
                  (event) => event.day === day,
                );

              return (
                <button
                  type="button"
                  key={day}
                  className={
                    hasEvent
                      ? "reviewer-calendar-day reviewer-calendar-day--event"
                      : "reviewer-calendar-day"
                  }
                >
                  <span>{day}</span>

                  {hasEvent && (
                    <i />
                  )}
                </button>
              );
            })}
          </div>
        </Card>

        <Section
          title="Upcoming"
          description="Important dates for your reviewer workload."
        >
          <div className="reviewer-screen__stack">
            {calendarEvents.map((event) => (
              <Card key={`${event.day}-${event.title}`}>
                <div className="reviewer-event">
                  <div className="reviewer-event__date">
                    <strong>{event.day}</strong>
                    <span>SEP</span>
                  </div>

                  <div>
                    <Badge
                      variant={
                        event.type === "Deadline"
                          ? "warning"
                          : "info"
                      }
                    >
                      {event.type}
                    </Badge>

                    <h3>{event.title}</h3>

                    <p>{event.description}</p>
                  </div>

                  <IconButton
                    label="Event options"
                    icon={<MoreHorizontal size={16} />}
                  />
                </div>
              </Card>
            ))}
          </div>
        </Section>
      </div>
    </PageContainer>
  );
}

/* =========================================================
   PROFILE
========================================================= */

function ProfileScreen() {
  const [technologies, setTechnologies] = useState([
    "React",
    "TypeScript",
    "Node.js",
    "UI/UX",
  ]);

  return (
    <PageContainer size="lg">
      <PageHeader
        eyebrow="ACCOUNT"
        title="Reviewer Profile"
        description="Manage your public reviewer profile and expertise."
        actions={
          <Button
            leftIcon={<Check size={16} />}
          >
            Save changes
          </Button>
        }
      />

      <div className="reviewer-screen__grid reviewer-screen__grid--two">
        <div className="reviewer-screen__stack">
          <Section
            title="Profile information"
            description="Information visible to learners."
          >
            <Card>
              <div className="reviewer-profile-editor">
                <Avatar
                  size="lg"
                  fallback="CR"
                />

                <Button
                  variant="outline"
                  size="small"
                >
                  Change avatar
                </Button>
              </div>

              <div className="reviewer-form-grid">
                <FormField
                  label="First name"
                  required
                  defaultValue="Catrina"
                />

                <FormField
                  label="Last name"
                  required
                  defaultValue="Reviewer"
                />

                <FormField
                  label="Email"
                  type="email"
                  defaultValue="catrina@example.com"
                  disabled
                />

                <FormField
                  label="Location"
                  defaultValue="Algiers, Algeria"
                />
              </div>

              <Textarea
                label="Bio"
                defaultValue="Expert reviewer focused on frontend engineering, product quality and learner development."
                rows={5}
              />
            </Card>
          </Section>

          <Section
            title="Expertise"
            description="Skills you are qualified to review."
          >
            <Card>
              <TechnologyInput
                value={technologies}
                onChange={setTechnologies}
              />
            </Card>
          </Section>
        </div>

        <div className="reviewer-screen__stack">
          <ProfileCard
            name="Catrina Reviewer"
            role="Expert Reviewer"
            location="Algiers, Algeria"
            description="Frontend engineering reviewer helping learners demonstrate practical technical skills."
            meta={
              <div className="reviewer-profile-meta">
                <Badge variant="purple">
                  148 Reviews
                </Badge>

                <Badge variant="success">
                  87% Approval
                </Badge>
              </div>
            }
          />

          <Section
            title="Reviewer credentials"
            description="Your verified expertise."
          >
            <Card padding="sm">
              <SkillCard
                name="React"
                level="Expert"
                progress={94}
              />

              <Divider />

              <SkillCard
                name="TypeScript"
                level="Expert"
                progress={91}
              />

              <Divider />

              <SkillCard
                name="UI/UX"
                level="Advanced"
                progress={82}
              />
            </Card>
          </Section>

          <Alert
            variant="success"
            title="Profile verified"
          >
            Your reviewer credentials have been verified by JADARA.
          </Alert>
        </div>
      </div>
    </PageContainer>
  );
}

/* =========================================================
   SETTINGS
========================================================= */

function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [weeklySummary, setWeeklySummary] = useState(true);

  return (
    <PageContainer size="lg">
      <PageHeader
        eyebrow="ACCOUNT"
        title="Settings"
        description="Manage your reviewer account preferences."
      />

      <div className="reviewer-settings">
        <Section
          title="Account"
          description="Basic account configuration."
        >
          <Card>
            <div className="reviewer-settings-row">
              <div>
                <strong>Email address</strong>
                <span>
                  catrina@example.com
                </span>
              </div>

              <Button variant="outline">
                Change
              </Button>
            </div>

            <Divider />

            <div className="reviewer-settings-row">
              <div>
                <strong>Password</strong>
                <span>
                  Last changed 32 days ago
                </span>
              </div>

              <Button variant="outline">
                Update
              </Button>
            </div>
          </Card>
        </Section>

        <Section
          title="Notifications"
          description="Choose what you want to hear about."
        >
          <Card>
            <div className="reviewer-settings-row">
              <div>
                <strong>Review notifications</strong>
                <span>
                  Notify me when new projects are assigned.
                </span>
              </div>

              <button
                type="button"
                className={`reviewer-toggle ${
                  notifications
                    ? "reviewer-toggle--active"
                    : ""
                }`}
                onClick={() =>
                  setNotifications(!notifications)
                }
                aria-label="Toggle review notifications"
              >
                <span />
              </button>
            </div>

            <Divider />

            <div className="reviewer-settings-row">
              <div>
                <strong>Weekly summary</strong>
                <span>
                  Receive a weekly summary of your reviewer activity.
                </span>
              </div>

              <button
                type="button"
                className={`reviewer-toggle ${
                  weeklySummary
                    ? "reviewer-toggle--active"
                    : ""
                }`}
                onClick={() =>
                  setWeeklySummary(!weeklySummary)
                }
                aria-label="Toggle weekly summary"
              >
                <span />
              </button>
            </div>
          </Card>
        </Section>

        <Section
          title="Review preferences"
          description="Default preferences for your review workspace."
        >
          <Card>
            <div className="reviewer-form-grid">
              <FormField label="Default review time">
                <Select
                  value="30"
                  onChange={() => {}}
                  options={[
                    {
                      value: "15",
                      label: "15 minutes",
                    },
                    {
                      value: "30",
                      label: "30 minutes",
                    },
                    {
                      value: "45",
                      label: "45 minutes",
                    },
                  ]}
                  ariaLabel="Default review time"
                />
              </FormField>

              <FormField label="Default expertise">
                <Select
                  value="frontend"
                  onChange={() => {}}
                  options={[
                    {
                      value: "frontend",
                      label: "Frontend Development",
                    },
                    {
                      value: "backend",
                      label: "Backend Development",
                    },
                    {
                      value: "design",
                      label: "UI/UX Design",
                    },
                  ]}
                  ariaLabel="Default expertise"
                />
              </FormField>
            </div>
          </Card>
        </Section>

        <Section
          title="Danger zone"
          description="Actions that affect your reviewer account."
        >
          <Card>
            <div className="reviewer-danger">
              <div>
                <strong>Deactivate reviewer account</strong>
                <span>
                  Temporarily stop receiving review assignments.
                </span>
              </div>

              <Button
                variant="danger"
                leftIcon={<Trash2 size={16} />}
              >
                Deactivate
              </Button>
            </div>
          </Card>
        </Section>
      </div>
    </PageContainer>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export function ReviewerScreens({
  initialScreen = "dashboard",
}: ReviewerScreensProps) {
  const [screen, setScreen] =
    useState<ReviewerScreen>(initialScreen);

  const content = (() => {
    switch (screen) {
      case "dashboard":
        return (
          <DashboardScreen
            onNavigate={setScreen}
          />
        );

      case "pending":
        return (
          <PendingReviewsScreen
            onNavigate={setScreen}
          />
        );

      case "review-detail":
        return (
          <ReviewDetailScreen
            onNavigate={setScreen}
          />
        );

      case "reviewed":
        return <ReviewedProjectsScreen />;

      case "statistics":
        return <StatisticsScreen />;

      case "messages":
        return <MessagesScreen />;

      case "calendar":
        return <CalendarScreen />;

      case "profile":
        return <ProfileScreen />;

      case "settings":
        return <SettingsScreen />;

      default:
        return null;
    }
  })();

  return (
    <ReviewerShell
      active={screen}
      onNavigate={setScreen}
    >
      {content}
    </ReviewerShell>
  );
}

export default ReviewerScreens;