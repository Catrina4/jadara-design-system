import type { ReactNode } from "react";

import {
  Sidebar,
  type SidebarProps,
} from "../Navigation/Sidebar/Sidebar";

import {
  Topbar,
  type TopbarProps,
} from "../Navigation/Topbar/Topbar";

import "./AppShell.css";

export interface AppShellProps {
  sidebar: SidebarProps;
  topbar?: TopbarProps;
  children: ReactNode;
}

export function AppShell({
  sidebar,
  topbar,
  children,
}: AppShellProps) {
  return (
    <div className="jadara-app-shell">
      <Sidebar {...sidebar} />

      <div className="jadara-app-shell__main">
        {topbar && <Topbar {...topbar} />}

        <main className="jadara-app-shell__content">
          {children}
        </main>
      </div>
    </div>
  );
}