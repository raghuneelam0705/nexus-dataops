import type { ArchiveJob } from "@/types";

export async function getJobs(): Promise<ArchiveJob[]> {
  const response = await fetch("/api/jobs");

  if (!response.ok) {
    throw new Error("Failed to fetch archive jobs");
  }

return (await response.json()) as ArchiveJob[];
}