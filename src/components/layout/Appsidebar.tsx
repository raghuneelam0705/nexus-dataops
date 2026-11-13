
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Database,
  Archive,
  ShieldCheck,
  ClipboardList,
  Activity,
  ChevronLeft,
} from "lucide-react";

const navigation = [
  {
    label: "Overview",
    href: "/overview",
    icon: LayoutDashboard,
  },
  {
    label: "Data Management",
    items: [
      { label: "Data Assets", href: "/assets", icon: Database },
      { label: "Archive Jobs", href: "/jobs", icon: Archive },
    ],
  },
  {
    label: "Governance",
    items: [
      { label: "Policies", href: "/governance", icon: ShieldCheck },
      { label: "Audit Activity", href: "/audit", icon: ClipboardList },
    ],
  },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-slate-200 bg-white">
      <div className="flex h-16 items-center gap-3 border-b border-slate-200 px-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
          <Activity size={21} />
        </div>

        <div>
          <h1 className="text-base font-bold text-slate-900">
            Nexus DataOps
          </h1>
          <p className="text-[10px] tracking-wide text-slate-500">
            ENTERPRISE PLATFORM
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-6 overflow-y-auto px-3 py-6">
        {navigation.map((group) => (
          <div key={group.label}>
            {group.items && (
              <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                {group.label}
              </p>
            )}

            <div className="space-y-1">
              {(group.items ?? [group]).map((item) => {
                const Icon = item.icon;
                const active = pathname === item.href ||
                  (item.href !== "/overview" &&
                    pathname.startsWith(item.href + "/"));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                      active
                        ? "bg-blue-50 font-semibold text-blue-700"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <Icon size={18} strokeWidth={1.8} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="border-t border-slate-200 p-4">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <ChevronLeft size={15} />
          Enterprise Data Platform
        </div>
      </div>
    </aside>
  );
}
