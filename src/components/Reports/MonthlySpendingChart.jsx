import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

import {
    ChartNoAxesCombined,
    MoveHorizontal,
} from "lucide-react";

const MonthlySpendingChart = ({ monthlySpending }) => {
    const chartWidth = Math.max(monthlySpending.length * 110, 900);

    return (
        <section className="rounded-xl border border-slate-800 bg-slate-900 p-4 sm:p-6">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-white sm:text-xl">
                    Spending Trend
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                    Track how your monthly expenses change over time
                </p>
            </div>

            {monthlySpending.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-slate-400">
                        <ChartNoAxesCombined size={22} />
                    </div>

                    <h3 className="mt-4 font-medium text-white">
                        No spending data available
                    </h3>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
                        Add expense transactions or adjust your report filters
                        to view your monthly spending trend.
                    </p>
                </div>
            ) : (
                <>
                    {monthlySpending.length > 8 && (
                        <div className="mb-3 flex items-center gap-2 text-sm text-slate-400">
                            <MoveHorizontal size={16} />
                            <span>Scroll horizontally to view all months</span>
                        </div>
                    )}

                    <div className="overflow-x-auto">
                        <div
                            style={{ width: `${chartWidth}px` }}
                            className="h-80"
                        >
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                    data={monthlySpending}
                                    margin={{
                                        top: 10,
                                        right: 20,
                                        left: 10,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        stroke="#334155"
                                    />

                                    <XAxis
                                        dataKey="label"
                                        stroke="#94a3b8"
                                        interval={0}
                                    />

                                    <YAxis
                                        stroke="#94a3b8"
                                        tickFormatter={(value) =>
                                            `₹${value.toLocaleString()}`
                                        }
                                    />

                                    <Tooltip
                                        formatter={(value) => [
                                            `₹${Number(value).toLocaleString()}`,
                                            "Expenses",
                                        ]}
                                        labelFormatter={(label, payload) => {
                                            const data = payload?.[0]?.payload;

                                            return data
                                                ? `${data.month} ${data.year}`
                                                : label;
                                        }}
                                        contentStyle={{
                                            backgroundColor: "#0f172a",
                                            border: "1px solid #334155",
                                            borderRadius: "10px",
                                        }}
                                        labelStyle={{
                                            color: "#fff",
                                        }}
                                        itemStyle={{
                                            color: "#a78bfa",
                                        }}
                                    />

                                    <Line
                                        type="monotone"
                                        dataKey="amount"
                                        stroke="#8b5cf6"
                                        strokeWidth={3}
                                        dot={{ r: 4 }}
                                        activeDot={{ r: 6 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};

export default MonthlySpendingChart;