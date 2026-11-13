import { getDashboardSummary } from "@/lib/data";

export default async function DashboardSummary() {
    const summary = await getDashboardSummary();

    const metrics = [
        {
            label: "Total Assets",
            value: summary.totalAssets,
        },
        {
            label: "Total Storage",
            value: `${(
                summary.totalStorageBytes / 1024 ** 3
            ).toFixed(2)} GB`,
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
                <div
                    key={metric.label}
                    className="rounded-xl border border-gray-200 bg-white p-5"
                >
                    <p className="text-sm text-gray-500">
                        {metric.label}
                    </p>
                    <p className="mt-3 text-2xl font-semibold">
                        {metric.value}
                    </p>
                </div>
            ))}
        </div>
    );
}