import type { ArchiveJob } from "@/types";
import { archiveJobs } from "@/lib/data/jobs";

export async function getJobs(): Promise<ArchiveJob[]> {
  // Simulate a slow backend response (5 seconds)
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return archiveJobs;
}