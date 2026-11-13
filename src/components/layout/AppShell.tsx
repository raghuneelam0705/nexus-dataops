
import type { ReactNode } from "react";
import AppSidebar from "./Appsidebar";
import AppHeader from "./AppHeader";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <AppSidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <AppHeader />

        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
