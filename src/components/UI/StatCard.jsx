const StatCard = ({
    title,
    amount,
    description,
    icon,
    color,
}) => {
    return (
        <div
            className="
                min-w-0 rounded-xl
                border border-slate-800
                bg-slate-900
                p-4 sm:p-5
            "
        >
            <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                    <p className="text-sm text-slate-400">
                        {title}
                    </p>

                    <h2
                        className="
                            mt-2 break-words
                            text-2xl font-bold text-white
                            sm:text-3xl
                        "
                    >
                        ₹{Number(amount || 0).toLocaleString()}
                    </h2>
                </div>

                <div
                    className={`
                        flex h-11 w-11 shrink-0
                        items-center justify-center
                        rounded-xl
                        ${color}
                    `}
                >
                    {icon}
                </div>
            </div>

            <p className="mt-4 text-sm text-slate-500">
                {description}
            </p>
        </div>
    );
};

export default StatCard;