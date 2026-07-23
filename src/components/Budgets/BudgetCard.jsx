import { SquarePen, Trash2 } from "lucide-react";
import ProgressBar from "./ProgressBar";
import { calculateBudgetDetails } from "../../utils/budgetCalculations";
import useTransactions from "../../hooks/useTransactions";
import { useBudgets } from "../../hooks/useBudget";

const BudgetCard = ({ budget}) => {
  const { budgetAmount, month, year} = budget;
  const { transactions, categories } = useTransactions();
  const details = calculateBudgetDetails(budget, transactions, categories);
    const {
    category,
    spent,
    remaining,
    percentage,
  } = details;

  const { startEditing, deleteBudget } = useBudgets();
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition-all hover:border-zinc-700">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">
            {category.name}
          </h3>

          <p className="mt-1 text-sm text-zinc-400">
            Monthly Budget 
            {
              " - "  + month + " " + year
            }
          </p>
        </div>

        <div className="rounded-lg bg-zinc-800 px-3 py-2 text-sm font-semibold text-green-400">
          {Math.min(percentage, 100)}%
        </div>
      </div>

      {/* Body */}
      <div className="mt-6 space-y-5">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {/* Budget */}
          <div className="rounded-xl bg-zinc-800 p-3">
            <p className="text-xs uppercase tracking-wide text-zinc-500">
              Budget
            </p>

            <p className="mt-2 text-lg font-bold text-white">
              ₹{budgetAmount.toLocaleString()}
            </p>
          </div>

          {/* Spent */}
          <div className="rounded-xl bg-zinc-800 p-3">
            <p className="text-xs uppercase tracking-wide text-zinc-500">
              Spent
            </p>

            <p className="mt-2 text-lg font-bold text-red-400">
              ₹{spent.toLocaleString()}
            </p>
          </div>

          {/* Remaining */}
          <div className="rounded-xl bg-zinc-800 p-3">
            <p className="text-xs uppercase tracking-wide text-zinc-500">
              Remaining
            </p>

            <p
              className={`mt-2 text-lg font-bold ${remaining >= 0
                ? "text-green-400"
                : "text-red-400"
                }`}
            >
              ₹{remaining.toLocaleString()}
            </p>
          </div>
        </div>

        <ProgressBar percentage={percentage} />
      </div>

      {/* Footer */}
      <div className="mt-6 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => startEditing(budget)}
          className="cursor-pointer rounded-lg p-2 text-zinc-400 transition-all hover:bg-zinc-500/10 hover:text-white"
        >
          <SquarePen size={18} />
        </button>

        <button
          type="button"
          className="cursor-pointer rounded-lg p-2 text-zinc-400 transition-all hover:bg-red-500/10 hover:text-red-400"
          onClick={() => deleteBudget(budget.id)}
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default BudgetCard;