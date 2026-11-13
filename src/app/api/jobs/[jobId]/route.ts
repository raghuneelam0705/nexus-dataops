
import { NextResponse } from "next/server";
import { archiveJobs } from "@/lib/data/jobs";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ jobId: string }> }
) {
      const { jobId } = await params;
  const selectedJobDetails = archiveJobs.find(job=> job?.id === jobId) || null;
    if (!selectedJobDetails) {
    return NextResponse.json(
      { message: "Job not found" },
      { status: 404 }
    );
  }
  return NextResponse.json(selectedJobDetails);
}