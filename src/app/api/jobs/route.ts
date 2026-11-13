
import { NextResponse } from "next/server";
import { archiveJobs } from "@/lib/data/jobs";

export async function GET() {
  return NextResponse.json(archiveJobs);
}