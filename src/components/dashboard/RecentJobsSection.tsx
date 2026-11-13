import { getJobs } from "@/lib/server/jobs";

export default async function RecentJobsSection() {
  const jobs = await getJobs();

  return (
    <div>
      {jobs.map((job) => (
        <p key={job.id}>{job.name}</p>
      ))}
    </div>
  );
}