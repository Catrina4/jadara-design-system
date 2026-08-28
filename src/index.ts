import "./foundations/globals.css";

/* =========================================================
   COMPONENTS
   ========================================================= */

export {
  Button,
  type ButtonProps,
  type ButtonVariant,
  type ButtonSize,
} from "./components/Button/Button";

export {
  Badge,
  type BadgeProps,
  type BadgeVariant,
} from "./components/Badge/Badge";

export {
  Card,
  type CardProps,
} from "./components/Card/Card";

export {
  Input,
  type InputProps,
} from "./components/Input/Input";

export {
  Textarea,
  type TextareaProps,
} from "./components/Textarea/Textarea";

export {
  Avatar,
  type AvatarProps,
} from "./components/Avatar/Avatar";

export {
  IconButton,
  type IconButtonProps,
} from "./components/IconButton/IconButton";

export {
  Divider,
} from "./components/Divider/Divider";

/* =========================================================
   NEW CORE COMPONENTS
   ========================================================= */

export {
  SearchField,
  type SearchFieldProps,
} from "./components/SearchField/SearchField";

export {
  Select,
  type SelectProps,
  type SelectOption,
} from "./components/Select/Select";

export {
  Modal,
  type ModalProps,
} from "./components/Modal/Modal";

/* =========================================================
   NAVIGATION
   ========================================================= */

export {
  AppShell,
  type AppShellProps,
} from "./patterns/AppShell/AppShell";

export {
  Sidebar,
  type SidebarProps,
  type SidebarItem,
  type SidebarSection,
  type SidebarUser,
} from "./patterns/Navigation/Sidebar/Sidebar";

export {
  Topbar,
  type TopbarProps,
} from "./patterns/Navigation/Topbar/Topbar";

/* =========================================================
   PAGE STRUCTURE
   ========================================================= */

export {
  PageContainer,
  type PageContainerProps,
} from "./patterns/PageStructure/PageContainer/PageContainer";

export {
  PageHeader,
  type PageHeaderProps,
} from "./patterns/PageStructure/PageHeader/PageHeader";

export {
  Section,
  type SectionProps,
} from "./patterns/PageStructure/Section/Section";

/* =========================================================
   DATA DISPLAY
   ========================================================= */

export {
  StatCard,
  type StatCardProps,
} from "./patterns/DataDisplay/StatCard/StatCard";

export {
  ProjectCard,
  type ProjectCardProps,
} from "./patterns/DataDisplay/ProjectCard/ProjectCard";

export {
  SkillCard,
  type SkillCardProps,
  type SkillLevel,
} from "./patterns/DataDisplay/SkillCard/SkillCard";

export {
  ProfileCard,
  type ProfileCardProps,
} from "./patterns/DataDisplay/ProfileCard/ProfileCard";

export {
  EvidenceCard,
  type EvidenceCardProps,
} from "./patterns/DataDisplay/EvidenceCard/EvidenceCard";

export {
  ActivityItem,
  type ActivityItemProps,
} from "./patterns/DataDisplay/ActivityItem/ActivityItem";

export {
  DataTable,
  type DataTableProps,
  type DataTableColumn,
} from "./patterns/DataTable/DataTable";

/* =========================================================
   STATUS
   ========================================================= */

export {
  StatusBadge,
  type StatusBadgeProps,
  type Status,
} from "./patterns/Status/StatusBadge/StatusBadge";

export {
  VerificationStatus,
  type VerificationStatusProps,
  type VerificationStep,
} from "./patterns/Status/VerificationStatus/VerificationStatus";

export {
  EmptyState,
  type EmptyStateProps,
} from "./patterns/Status/EmptyState/EmptyState";

export {
  Alert,
  type AlertProps,
  type AlertVariant,
} from "./patterns/Status/Alert/Alert";

/* =========================================================
   FORMS
   ========================================================= */

export {
  FormField,
  type FormFieldProps,
} from "./patterns/Forms/FormField/FormField";

export {
  TechnologyInput,
  type TechnologyInputProps,
} from "./patterns/Forms/TechnologyInput/TechnologyInput";

export {
  FileUpload,
  type FileUploadProps,
} from "./patterns/Forms/FileUpload/FileUpload";

/* =========================================================
   NOTIFICATIONS
   ========================================================= */

export {
  NotificationItem,
  type NotificationItemProps,
  type NotificationType,
} from "./patterns/Notifications/NotificationItem/NotificationItem";

/* =========================================================
   THEME
   ========================================================= */

export {
  ThemeProvider,
  useTheme,
  type Theme,
} from "./theme/ThemeProvider";

export {
  ThemeToggle,
} from "./theme/ThemeToggle";