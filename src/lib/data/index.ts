import type { DataAsset, ArchiveJob, JobRun, DashboardSummary } from "@/types";
import { dashboardSummary } from "./dashboard";
import type {  } from "@/types";
import { assets } from "./assets";
import { archiveJobs } from "./jobs";
import { jobRuns } from "./job-runs";

// Get all assets
export function getAssets(): DataAsset[] {
  return assets;
}

// Get a specific asset
export function getAssetById(id: string): DataAsset | undefined {
  return assets.find((asset) => asset.id === id);
}

// Get all archive jobs
export function getArchiveJobs(): ArchiveJob[] {
  return archiveJobs;
}

// Get a specific job
export function getArchiveJobById(id: string): ArchiveJob | undefined {
  return archiveJobs.find((job) => job.id === id);
}

// Get execution history for a job
export function getJobRuns(jobId: string): JobRun[] {
  return jobRuns.filter((run) => run.jobId === jobId);
}

export function getDashboardSummary(): DashboardSummary {
  return dashboardSummary;
}