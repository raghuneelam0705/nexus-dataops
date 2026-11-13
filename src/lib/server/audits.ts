import type { AuditEvent } from "@/types";
import { auditEvents } from "@/lib/data/audit";

export async function getAudits(): Promise<AuditEvent[]> {
  // Simulate a slow backend response (5 seconds)
  await new Promise((resolve) => setTimeout(resolve, 8000));

  return auditEvents;
}