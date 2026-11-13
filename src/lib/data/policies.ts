import type { RetentionPolicy } from "@/types";

export const retentionPolicies: RetentionPolicy[] = [
  {
    id: "POL-001",
    name: "Standard Data Retention",
    retentionYears: 3,
    status: "active",
    description: "Standard retention policy for general business data.",
    createdAt: "2026-01-10T09:00:00Z",
    updatedAt: "2026-09-15T10:30:00Z",
  },
  {
    id: "POL-002",
    name: "Application Logs Retention",
    retentionYears: 1,
    status: "active",
    description: "Retention policy for application and system logs.",
    createdAt: "2026-02-05T11:00:00Z",
    updatedAt: "2026-08-20T08:45:00Z",
  },
  {
    id: "POL-003",
    name: "Employee Records Retention",
    retentionYears: 7,
    status: "review-required",
    description: "Extended retention policy for employee-related records.",
    createdAt: "2026-03-12T14:00:00Z",
    updatedAt: "2026-10-01T12:00:00Z",
  },
  {
    id: "POL-004",
    name: "Temporary Data Retention",
    retentionYears: 1,
    status: "disabled",
    description: "Short-term retention policy for temporary datasets.",
    createdAt: "2026-04-18T07:30:00Z",
    updatedAt: "2026-07-25T16:20:00Z",
  },
];