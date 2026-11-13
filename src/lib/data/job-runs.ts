import type { JobRun } from "@/types";

export const jobRuns: JobRun[] = [
  {
    id: "RUN-3001",
    jobId: "JOB-2001",
    status: "success",
    startedAt: "2026-10-30T06:00:00Z",
    completedAt: "2026-10-30T06:07:00Z",
    recordsProcessed: 125000,
  },
  {
    id: "RUN-3002",
    jobId: "JOB-2001",
    status: "failed",
    startedAt: "2026-10-29T06:00:00Z",
    completedAt: "2026-10-29T06:02:30Z",
    recordsProcessed: 42000,
    errorMessage: "Source connection interrupted",
  },
  {
    id: "RUN-3003",
    jobId: "JOB-2002",
    status: "running",
    startedAt: "2026-10-30T08:15:00Z",
    completedAt: null,
    recordsProcessed: 85000,
  },
  {
    id: "RUN-3004",
    jobId: "JOB-2003",
    status: "failed",
    startedAt: "2026-10-29T22:00:00Z",
    completedAt: "2026-10-29T22:01:35Z",
    recordsProcessed: 0,
    errorMessage: "Source connection timed out",
  },
  {
    id: "RUN-3005",
    jobId: "JOB-2005",
    status: "success",
    startedAt: "2026-10-28T14:30:00Z",
    completedAt: "2026-10-28T14:33:00Z",
    recordsProcessed: 42000,
  },
];