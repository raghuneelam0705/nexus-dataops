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

  const baseUrl = process.env.VERCEL
    ? `https://${process.env.NEXT_PUBLIC_APP_URL}`
    : "http://localhost:3001";
  

  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_APP_URL is not configured");
  }

  const response = await fetch(
    `${baseUrl}/api/audit?${params.toString()}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch audit records");
  }

  return response.json();
}
