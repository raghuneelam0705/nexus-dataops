import { NextResponse } from "next/server";
import { getAudits } from "@/lib/services/audit.service";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const page = Number(searchParams.get("page") ?? 1);
  const pageSize = Number(
    searchParams.get("pageSize") ?? 10
  );

  try {
    const result = getAudits(page, pageSize);

    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { message: "Invalid pagination parameters" },
      { status: 400 }
    );
  }
}