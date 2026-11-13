
"use client";

import { Search, Bell, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

const pageNames: Record<string, string> = {
  "/overview": "Overview",
  "/assets": "Data Assets",
  "/jobs": "Archive Jobs",
  "/governance": "Governance",
  "/audit": "Audit Activity",
};

export default function AppHeader() {
  const pathname = usePathname();

  const currentPage =
    pageNames[pathname] ??
    (pathname.startsWith("/jobs/") ? "Job Details" : "Data Management");

  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div>
        <p className="text-xs text-slate-400">
          Nexus DataOps / Workspace
        </p>
        <h2 className="text-sm font-semibold text-slate-800">
          {currentPage}
        </h2>
      </div>

      <div className="flex items-center gap-5">
        <div className="relative hidden md:block">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            placeholder="Search pages, assets and jobs"
            className="h-9 w-64 rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm outline-none focus:border-blue-400 focus:bg-white"
          />
        </div>

        <button
          type="button"
          aria-label="Notifications"
          className="relative text-slate-500 hover:text-slate-800"
        >
          <Bell size={19} />
          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-blue-600" />
        </button>

        <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700">
            AD
          </div>

          <div className="hidden sm:block">
            <p className="text-xs font-semibold text-slate-800">
              Admin User
            </p>
            <p className="text-[10px] text-slate-500">
              Administrator
            </p>
          </div>

          <ChevronDown size={15} className="text-slate-400" />
        </div>
      </div>
    </header>
  );
}
