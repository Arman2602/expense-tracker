import { PieChart } from "lucide-react";
import ProgressBar from "../Budgets/ProgressBar";

const CategoryBreakdown = ({ categoryBreakdown }) => {
  if (categoryBreakdown.length === 0) {
    return (
      <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-8 text-center">
        <PieChart
          size={40}
          className="mx-auto mb-3 text-slate-600"
        />

        <h3 className="text-lg font-semibold text-white">
          No Expense Data
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          No expense transactions found for the selected filters.
        </p>
      </div>
    );
  }

  return (
    <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
          <PieChart size={20} />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">
            Spending by Category
          </h2>

          <p className="text-sm text-slate-400">
            See how your expenses are distributed across categories
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-6">
        {categoryBreakdown.map((item) => (
          <div key={item.category}>
            {/* Top Row */}
            <div className="mb-2 flex items-center justify-between">
              <div>
                <p className="font-medium text-white">
                  {item.category}
                </p>
              </div>

              <div className="text-right">
                <p className="font-semibold text-white">
                  ₹{item.amount.toLocaleString()}
                </p>

                <p className="text-xs text-slate-400">
                  {item.percentage.toFixed(1)}% of expenses
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <ProgressBar percentage={item.percentage} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryBreakdown;