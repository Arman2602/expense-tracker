import { Wallet } from "lucide-react";

const EmptyState = ({ onAddBudget }) => {
    return (
        <div className="bg-slate-900 border border-slate-700 rounded-xl p-10 flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-700 mb-5">
                <Wallet className="w-8 h-8 text-indigo-400" />
            </div>

            <h2 className="text-xl font-semibold text-white">
                No Budgets Yet
            </h2>

            <p className="mt-2 max-w-md text-slate-400">
                Start tracking your monthly spending by creating your first
                budget. Set spending limits and monitor your progress with ease.
            </p>
        </div>
    );
};

export default EmptyState;