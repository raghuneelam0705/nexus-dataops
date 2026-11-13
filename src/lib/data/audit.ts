import type { AuditEvent } from "@/types";

export const auditEvents: AuditEvent[] = [
  {
    id: "AUD-4001",
    actor: "admin@company.com",
    action: "Created archive job",
    resourceType: "job",
    resourceId: "JOB-2001",
    timestamp: "2026-10-30T09:15:00Z",
    outcome: "success",
  },
  {
    id: "AUD-4002",
    actor: "ops@company.com",
    action: "Started archive execution",
    resourceType: "job",
    resourceId: "JOB-2002",
    timestamp: "2026-10-30T08:15:00Z",
    outcome: "success",
  },
  {
    id: "AUD-4003",
    actor: "system",
    action: "Archive execution failed",
    resourceType: "job",
    resourceId: "JOB-2003",
    timestamp: "2026-10-29T22:01:35Z",
    outcome: "failure",
  },
  {
    id: "AUD-4004",
    actor: "governance@company.com",
    action: "Updated retention policy",
    resourceType: "policy",
    resourceId: "POL-003",
    timestamp: "2026-10-29T16:40:00Z",
    outcome: "success",
  },
  {
    id: "AUD-4005",
    actor: "admin@company.com",
    action: "Updated data classification",
    resourceType: "asset",
    resourceId: "AST-1005",
    timestamp: "2026-10-28T12:20:00Z",
    outcome: "success",
  },
];