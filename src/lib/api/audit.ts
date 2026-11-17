import type { AuditEvent } from "@/types";

export interface AuditResponse {
  auditEvents: AuditEvent[];
  page: number;
  pageSize: number;
  totalRecords: number;
  totalPages: number;
}

export async function getAudits(
  page: number,
  pageSize: number
): Promise<AuditResponse> {
  const params = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
  });

  const response = await fetch(
    `/api/audit?${params.toString()}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch audit records");
  }

  return response.json();
}