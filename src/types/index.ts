export type AssetStatus = 
| "active"
| "archived"
| "processing"
| "failed";

export type DataClassification = 
  | "public"
  | "internal"
  | "confidential"
  | "restricted";

  // Supported data sources
export type DataSource =
  | "PostgreSQL"
  | "MySQL"
  | "Object Storage"
  | "Log Store";

  export interface DataAsset {
  id: string;
  name: string;
  source: DataSource;
  sizeBytes: number;
  classification: DataClassification;
  status: AssetStatus;
  owner: string;
  retentionPolicyId: string;
  updatedAt: string;
}


export type JobStatus =
  | "success"
  | "failed"
  | "running"
  | "queued";

export interface ArchiveJob {
  id: string;
  name: string;
  assetId: string;
  status: JobStatus;
  recordsProcessed: number;
  startedAt: string | null;
  durationSeconds: number | null;
  errorMessage?: string;
}


export interface JobRun {
  id: string;
  jobId: string;
  status: JobStatus;
  startedAt: string;
  completedAt: string | null;
  recordsProcessed: number;
  errorMessage?: string;
}

export type PolicyStatus =
  | "active"
  | "review-required"
  | "disabled";

export interface RetentionPolicy {
  id: string;
  name: string;
  retentionYears: number;
  status: PolicyStatus;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export type AuditOutcome =
  | "success"
  | "failure";

export type AuditResourceType =
  | "asset"
  | "job"
  | "policy";

export interface AuditEvent {
  id: string;
  actor: string;
  action: string;
  resourceType: AuditResourceType;
  resourceId: string;
  timestamp: string;
  outcome: AuditOutcome;
}

export interface DashboardSummary {
  totalAssets: number;
  totalStorageBytes: number;
  totalJobs: number;
  successfulJobs: number;
  failedJobs: number;
  runningJobs: number;
  queuedJobs: number;
}