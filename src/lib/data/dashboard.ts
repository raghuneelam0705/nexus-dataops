import type { DashboardSummary } from "@/types";
import { assets } from "./assets";
import { archiveJobs } from "./jobs";

export const dashboardSummary: DashboardSummary = {
  totalAssets: assets.length,

  totalStorageBytes: assets.reduce(
    (total, asset) => total + asset.sizeBytes,
    0
  ),

  totalJobs: archiveJobs.length,

  successfulJobs: archiveJobs.filter(
    (job) => job.status === "success"
  ).length,

  failedJobs: archiveJobs.filter(
    (job) => job.status === "failed"
  ).length,

  runningJobs: archiveJobs.filter(
    (job) => job.status === "running"
  ).length,

  queuedJobs: archiveJobs.filter(
    (job) => job.status === "queued"
  ).length,
};