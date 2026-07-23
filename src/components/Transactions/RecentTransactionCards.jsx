const RecentTransactionCards = ({
    transaction,
    category,
}) => {
    const Icon = category?.icon;

    const isExpense = transaction.type === "expense";

    const formattedDate = new Date(
        transaction.date
    ).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    return (
        <div
            className="
                flex min-w-0 items-center
                justify-between gap-3
                rounded-xl
                border border-slate-800
                bg-slate-900
                p-3 sm:p-4
                transition-colors
                hover:bg-slate-800/70
            "
        >
            <div className="flex min-w-0 items-center gap-3">
                <div
                    className={`
                        flex h-11 w-11 shrink-0
                        items-center justify-center
                        rounded-xl
                        ${isExpense
                            ? "bg-red-500/15 text-red-400"
                            : "bg-green-500/15 text-green-400"
                        }
                    `}
                >
                    {Icon && <Icon size={20} />}
                </div>

                <div className="min-w-0">
                    <h3 className="truncate font-medium text-white">
                        {transaction.title}
                    </h3>

                    <div className="mt-1 flex items-center gap-2 text-sm text-slate-400">
                        <span className="truncate">
                            {category?.name || "Unknown"}
                        </span>

                        <span>•</span>

                        <span className="whitespace-nowrap">
                            {formattedDate}
                        </span>
                    </div>
                </div>
            </div>

            <div className="shrink-0 text-right">
                <p
                    className={`
                        whitespace-nowrap font-semibold
                        ${isExpense
                            ? "text-red-400"
                            : "text-green-400"
                        }
                    `}
                >
                    {isExpense ? "-" : "+"}₹
                    {Number(transaction.amount).toLocaleString()}
                </p>

                <p className="mt-1 text-xs capitalize text-slate-500">
                    {transaction.type}
                </p>
            </div>
        </div>
    );
};

export default RecentTransactionCards;