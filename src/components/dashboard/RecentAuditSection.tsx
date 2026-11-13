
import { getAudits } from "@/lib/api/audit";
import formatTimestamp from "@/lib/utils/formatTimestamps";

const statusStyles: Record<string, string> = {
    success: "bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-400",
    failure: "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-400",
};

export default async function RecentAuditSection() {
    try {
        const audits = await getAudits(1, 5);
        const auditEvents = audits.auditEvents ?? [];

        return (
            <div className="w-full overflow-x-auto rounded-lg shadow border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200 text-sm text-left text-gray-500">
                    <caption className="sr-only">
                        Recent Audit Events
                    </caption>

                    <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
                        <tr>
                            <th className="px-6 py-3 font-semibold" scope="col">Actor</th>
                            <th className="px-6 py-3 font-semibold" scope="col">Action</th>
                            <th className="px-6 py-3 font-semibold" scope="col">Resource</th>
                            <th className="px-6 py-3 font-semibold" scope="col">Timestamp</th>
                            <th className="px-6 py-3 font-semibold" scope="col">Outcome</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 bg-white">
                        {auditEvents.length > 0 ? (
                            auditEvents.map((item) => (
                                <tr key={item.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {item.actor}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {item.action}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {item.resourceType} | {item.resourceId}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {formatTimestamp(item.timestamp)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`inline-flex items-center py-1 px-2.5 rounded-full text-xs font-medium ${
                                                statusStyles[item.outcome] ??
                                                "bg-gray-100 text-gray-800"
                                            }`}
                                        >
                                            {item.outcome}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={5}
                                    className="px-6 py-8 text-center text-gray-500"
                                >
                                    No audit events found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    } catch (error) {
        console.error("Failed to load recent audit events:", error);

        return (
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                Unable to load audit events. Please try again later.
            </div>
        );
    }
}
