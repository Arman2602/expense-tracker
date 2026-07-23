import {
    ReceiptText,
    ListChecks,
    Trophy,
} from "lucide-react";

const TransactionsStats = ({
    totalExpenses,
    TotalTransactions,
    TopCategory,
}) => {
    const stats = [
        {
            title: "Total Expenses",
            value: `₹${totalExpenses?.toLocaleString() || 0}`,
            description: "Total money spent",
            icon: ReceiptText,
            iconClass: "bg-red-500/15 text-red-400",
            valueClass: "text-red-400",
        },
        {
            title: "Transactions",
            value: TotalTransactions || 0,
            description: "Recorded transactions",
            icon: ListChecks,
            iconClass: "bg-blue-500/15 text-blue-400",
            valueClass: "text-blue-400",
        },
        {
            title: "Top Category",
            value: TopCategory?.name || "N/A",
            description: "Highest spending category",
            icon: Trophy,
            iconClass: "bg-purple-500/15 text-purple-400",
            valueClass: "text-purple-400",
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                    <div
                        key={stat.title}
                        className="
                            rounded-xl
                            border border-slate-800
                            bg-slate-900
                            p-6
                            transition-all
                            hover:border-slate-700
                        "
                    >
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm text-slate-400">
                                    {stat.title}
                                </p>

                                <h2
                                    className={`mt-3 text-3xl font-bold ${stat.valueClass}`}
                                >
                                    {stat.value}
                                </h2>
                            </div>

                            <div
                                className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.iconClass}`}
                            >
                                <Icon size={22} />
                            </div>
                        </div>

                        <p className="mt-6 text-sm text-slate-500">
                            {stat.description}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default TransactionsStats;