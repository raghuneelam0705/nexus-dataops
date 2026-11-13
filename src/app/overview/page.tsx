import React, { useMemo } from 'react';
import { getDashboardSummary } from "@/lib/data";
// import { getJobs } from "@/lib/server/jobs";
import { Suspense } from "react";
import RecentJobsSection from "@/components/dashboard/RecentJobsSection";
import RecentAuditSection from "@/components/dashboard/RecentAuditSection";
import GetSummaryDashboard from "@/components/dashboard/getDashboardSummary"



export default async function OverviewPage() {
    const summary = await getDashboardSummary()
    // const jobs = await getJobs()

    // const totalJobs = jobs?.length;

    // const successfulJobs = jobs.filter(
    //     (job) => job.status === "success"
    // ).length;

    // const failedJobs = jobs.filter(
    //     (job) => job.status === "failed"
    // ).length;

    // const runningJobs = jobs.filter(
    //     (job) => job.status === "running"
    // ).length;

    // const queuedJobs = jobs.filter(
    //     (job) => job.status === "queued"
    // ).length;


    return (
        <main className="space-y-6">
            <div>
                <h1 className="text-2xl font-semibold">Overview</h1>
                <p className="mt-1 text-sm text-gray-500">
                    Monitor your enterprise data operations.
                </p>
            </div>
            <Suspense fallback={<p>Loading summary dashboard...</p>}>
                <GetSummaryDashboard />
            </Suspense>
            <div>
                <h3 className="font-semibold py-3">Job Details</h3>
                <Suspense fallback={<p>Loading recent Jobs...</p>}>
                    <RecentJobsSection />
                </Suspense>
            </div>
            <div>
                <h3 className="font-semibold py-3">Audit Events</h3>
                <Suspense fallback={<p>Loading recent audits...</p>}>
                    <RecentAuditSection />
                </Suspense>
            </div>
        </main>
    );
}