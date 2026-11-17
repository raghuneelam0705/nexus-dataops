import { auditEvents } from "@/lib/data/audit";

export function getAudits(
  page: number,
  pageSize: number
) {
  if (
    !Number.isInteger(page) ||
    page < 1 ||
    !Number.isInteger(pageSize) ||
    pageSize < 1 ||
    pageSize > 100
  ) {
    throw new Error("Invalid pagination parameters");
  }

  const offset = (page - 1) * pageSize;

  const offsetEvents = auditEvents.slice(
    offset,
    offset + pageSize
  );

  const totalRecords = auditEvents.length;
  const totalPages = Math.ceil(totalRecords / pageSize);

  return {
    auditEvents: offsetEvents,
    page,
    pageSize,
    totalRecords,
    totalPages,
  };
}