import { useQuery } from "@tanstack/react-query";
import { getJobs } from "@/lib/api/jobs";

export function useJobs() {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: getJobs,
  });
}