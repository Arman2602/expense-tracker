import {
    Pencil,
    Trash2,
    FileText,
} from "lucide-react";
import Tooltip from "../UI/Tooltip";

import useTransactions from "../../hooks/useTransactions";

const ExpenseCards = ({ transaction, category, onViewNote }) => {
    const Icon = category?.icon;

    const {
        deleteTransaction,
        startEditing,
    } = useTransactions();

    const isExpense = transaction.type === "expense";

    return (
        <div
            className="
                rounded-xl
                border border-slate-800
                bg-slate-900
                p-5
                transition-all duration-200
                hover:-translate-y-0.5
                hover:border-slate-700
            "
        >
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 items-start gap-3">
                    <div
                        className="
                            flex h-11 w-11 shrink-0
                            items-center justify-center
                            rounded-xl
                            bg-slate-800
                            text-slate-300
                        "
                    >
                        {Icon && <Icon size={20} />}
                    </div>

                    <div className="min-w-0">
                        <h3 className="truncate text-base font-semibold text-white">
                            {transaction.title}
                        </h3>

                        <p className="mt-1 text-sm text-slate-400">
                            {category?.name}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                            {new Date(transaction.date).toLocaleDateString(
                                "en-IN",
                                {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                }
                            )}
                        </p>
                    </div>
                </div>

                <p
                    className={`shrink-0 text-xl font-bold ${isExpense
                        ? "text-red-400"
                        : "text-green-400"
                        }`}
                >
                    {isExpense ? "-" : "+"}₹
                    {Number(transaction.amount).toLocaleString()}
                </p>
            </div>

            {/* Footer */}
            <div className="mt-5 flex items-center justify-end gap-2 border-t border-slate-800 pt-4">

                {transaction.note && (
                    <Tooltip text="View Note">
                        <button
                            onClick={() => onViewNote(transaction.note)}
                            className="
                                rounded-lg
                                p-2
                                text-slate-400
                                transition-colors
                                hover:bg-blue-500/10
                                hover:text-blue-400
                                cursor-pointer
                                "
                        >
                            <FileText size={18} />
                        </button>
                    </Tooltip>
                )}

                <Tooltip text="Edit Transaction">
                    <button
                        onClick={() => startEditing(transaction)}
                        className="
                                    rounded-lg
                                    p-2
                                    text-slate-400
                                    transition-colors
                                    hover:bg-slate-800
                                    hover:text-white
                                cursor-pointer
                                "
                    >
                        <Pencil size={18} />
                    </button>
                </Tooltip>
                <Tooltip text="Delete Transaction">
                    <button
                        onClick={() => deleteTransaction(transaction.id)}
                        className="
                                rounded-lg
                                p-2
                                text-slate-400
                                transition-colors
                                hover:bg-red-500/10
                                hover:text-red-400
                                cursor-pointer
                            "
                    >
                        <Trash2 size={18} />
                    </button>
                </Tooltip>
            </div>
        </div>
    );
};

export default ExpenseCards;