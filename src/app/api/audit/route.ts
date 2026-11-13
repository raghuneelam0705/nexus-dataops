
import { NextResponse } from "next/server";
import { auditEvents } from "@/lib/data/audit";

export async function GET
    (
        request: Request,
    ) {
    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get("page") ?? 1);
    const pageSize = Number(searchParams.get("pageSize") ?? 10);
    if (
        !Number.isInteger(page) ||
        page < 1 ||
        !Number.isInteger(pageSize) ||
        pageSize < 1 ||
        pageSize > 100
    ) {
        return NextResponse.json(
            { message: "Invalid pagination parameters" },
            { status: 400 }
        );
    }
    const offset = (page - 1) * pageSize;
    const offsetEvents = auditEvents.slice(offset, offset + pageSize);
    const totalRecords = auditEvents?.length ?? 0
    const totalPages = Math.ceil(totalRecords / pageSize);
    return NextResponse.json({ auditEvents: offsetEvents, page, pageSize, totalRecords, totalPages });
}