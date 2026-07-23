import { BarChart3 } from "lucide-react";

const MonthlySpending = ({ monthlySpending }) => {
  const maxAmount = Math.max(
    ...monthlySpending.map((item) => item.amount),
    0
  );

  return (
    <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-4 sm:p-6">
      {/* Header */}
      <div className="mb-8 flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
          <BarChart3 size={20} />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white sm:text-xl">
            Monthly Spending Trends
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Track how your expenses change over time
          </p>
        </div>
      </div>

      {monthlySpending.length === 0 ? (
        <div className="py-12 text-center">
          <BarChart3
            size={40}
            className="mx-auto mb-3 text-slate-600"
          />

          <h3 className="font-semibold text-white">
            No Spending Data
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            No monthly expenses found for the selected filters.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {monthlySpending.map((item) => {
            const barPercentage =
              maxAmount === 0
                ? 0
                : (item.amount / maxAmount) * 100;

            return (
              <div
                key={`${item.year}-${item.month}`}
                className="space-y-2"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-medium text-slate-300 sm:text-base">
                    {item.month} {item.year}
                  </p>

                  <p className="shrink-0 text-sm font-semibold text-white sm:text-base">
                    ₹{item.amount.toLocaleString()}
                  </p>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-blue-500 transition-all duration-500"
                    style={{
                      width: `${Math.min(barPercentage, 100)}%`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default MonthlySpending;