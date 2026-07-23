import { TriangleAlert } from "lucide-react";
import useTransactions from "../../hooks/useTransactions";
import { useBudgets } from "../../hooks/useBudget";
import { toast } from "sonner";


const DangerZoneCard = () => {
    const { dispatch: transactionDispatch } = useTransactions();
    const { dispatch: budgetDispatch } = useBudgets();
    const handleClearTransactions = () => {
        const confirmed = window.confirm(
            "Are you sure you want to clear all transactions?"
        );

        if (!confirmed) return;

        transactionDispatch({
            type: "CLEAR_TRANSACTIONS",
        });

        toast.success("All transactions have been cleared.");
    };

    const handleClearBudgets = () => {
        const confirmed = window.confirm(
            "Are you sure you want to clear all budgets?"
        );

        if (!confirmed) return;

        budgetDispatch({
            type: "CLEAR_BUDGETS",
        });

        toast.success("All budgets have been cleared.");
    };

    const actions = [
        {
            title: "Clear Transactions",
            description: "Remove all recorded transactions permanently.",
            onClick: handleClearTransactions,
        },
        {
            title: "Clear Budgets",
            description: "Delete every budget you've created.",
            onClick: handleClearBudgets,
        },
    ];
    return (
        <div className="bg-slate-800 border border-red-500/20 rounded-xl p-5 sm:p-6">
            {/* Header */}
            <div className="flex items-start gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-red-500/10">
                    <TriangleAlert className="w-5 h-5 text-red-400" />
                </div>

                <div>
                    <h2 className="text-base sm:text-lg font-semibold text-white">
                        Danger Zone
                    </h2>

                    <p className="text-sm text-slate-400 mt-1">
                        These actions permanently remove your data.
                    </p>
                </div>
            </div>

            <div className="space-y-5">
                {actions.map((action, index) => (
                    <div key={action.title}>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div>
                                <h3 className="font-medium text-white">
                                    {action.title}
                                </h3>

                                <p className="text-sm text-slate-400 mt-1">
                                    {action.description}
                                </p>
                            </div>

                            <button className="w-full sm:w-auto rounded-lg bg-red-500/80 px-4 py-2 text-white transition-colors hover:bg-red-500"
                                onClick={action.onClick}
                            >
                                Clear
                            </button>
                        </div>

                        {index !== actions.length - 1 && (
                            <div className="mt-5 border-t border-slate-700" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DangerZoneCard;