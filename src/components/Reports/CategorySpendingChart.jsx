import {
    PieChart,
    Pie,
    ResponsiveContainer,
    Cell,
    Tooltip,
} from "recharts";

import { ChartPie } from "lucide-react";

const CHART_COLORS = [
    "#8b5cf6",
    "#3b82f6",
    "#22c55e",
    "#f59e0b",
    "#ef4444",
    "#06b6d4",
];

const CategorySpendingChart = ({ categoryBreakdown }) => {
    return (
        <section className="min-w-0 overflow-hidden rounded-xl border border-slate-800 bg-slate-900 p-4 sm:p-6">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-white sm:text-xl">
                    Expense Distribution
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                    How your expenses are distributed across categories
                </p>
            </div>

            {categoryBreakdown.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-slate-400">
                        <ChartPie size={22} />
                    </div>

                    <h3 className="mt-4 font-medium text-white">
                        No expense data available
                    </h3>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
                        Add expense transactions or adjust your report filters to
                        view expense distribution.
                    </p>
                </div>
            ) : (
                <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
                    {/* Donut Chart */}
                    <div className="h-56 min-w-0 w-full sm:h-64 lg:h-72">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={categoryBreakdown}
                                    dataKey="amount"
                                    nameKey="category"
                                    innerRadius="52%"
                                    outerRadius="78%"
                                    paddingAngle={3}
                                >
                                    {categoryBreakdown.map((category, index) => (
                                        <Cell
                                            key={category.category}
                                            fill={
                                                CHART_COLORS[
                                                    index % CHART_COLORS.length
                                                ]
                                            }
                                        />
                                    ))}
                                </Pie>

                                <Tooltip
                                    formatter={(value) => [
                                        `₹${Number(value).toLocaleString()}`,
                                        "Expense",
                                    ]}
                                    contentStyle={{
                                        backgroundColor: "#0f172a",
                                        border: "1px solid #334155",
                                        borderRadius: "8px",
                                    }}
                                    labelStyle={{
                                        color: "#ffffff",
                                    }}
                                    itemStyle={{
                                        color: "#e2e8f0",
                                    }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Custom Legend */}
                    <div className="grid min-w-0 grid-cols-1 gap-2">
                        {categoryBreakdown.map((category, index) => (
                            <div
                                key={category.category}
                                className="flex min-w-0 items-center justify-between gap-4 rounded-lg bg-slate-800/40 px-3 py-2.5"
                            >
                                <div className="flex min-w-0 flex-1 items-center gap-3">
                                    <span
                                        className="h-3 w-3 shrink-0 rounded-full"
                                        style={{
                                            backgroundColor:
                                                CHART_COLORS[
                                                    index % CHART_COLORS.length
                                                ],
                                        }}
                                    />

                                    <span className="min-w-0 truncate text-sm text-slate-300">
                                        {category.category}
                                    </span>
                                </div>

                                <div className="shrink-0 text-right">
                                    <p className="whitespace-nowrap text-sm font-medium text-white">
                                        ₹{Number(
                                            category.amount
                                        ).toLocaleString()}
                                    </p>

                                    <p className="whitespace-nowrap text-xs text-slate-500">
                                        {Number(
                                            category.percentage
                                        ).toFixed(1)}
                                        %
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default CategorySpendingChart;