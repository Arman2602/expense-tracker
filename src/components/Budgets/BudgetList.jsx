import { useBudgets } from "../../hooks/useBudget";
import BudgetCard from "../Budgets/BudgetCard"
import EmptyState from "../Budgets/EmptyState"
const BudgetList = () => {
  const { budgets } = useBudgets();

  return (
    <section className="space-y-5">
      {/* Always visible */}
      <div className="px-6 py-3">
        <h2 className="text-3xl font-bold text-white tracking-tight text-gray-900 md:text-3xl">
          Monthly Budgets
        </h2>

        <p className="mt-2 max-w-2xl font-semibold text-sm leading-6 text-slate-400">
          Monitor your spending across all budget categories.
        </p>
      </div>

      {/* Conditional Content */}
      {budgets.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-4">
          {budgets.map((budget) => (
            <BudgetCard
              key={budget.id}
              budget={budget}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default BudgetList;