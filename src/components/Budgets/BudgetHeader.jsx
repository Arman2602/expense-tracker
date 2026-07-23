import { useBudgets } from "../../hooks/useBudget";
function BudgetHeader() {
  const {openModal} = useBudgets();
  return (
    <header className="flex flex-col gap-5 px-6 py-3 shadow-sm md:flex-row md:items-center md:justify-between">
      {/* Left Section */}
      <div>
        <h1 className="text-3xl text-white font-bold tracking-tight text-gray-900 md:text-3xl">
          Budget Management
        </h1>

        <p className="mt-2 max-w-2xl font-semibold text-sm leading-6 text-slate-400">
          Plan your monthly spending, monitor your expenses by category, and
          stay within your budget goals.
        </p>
      </div>

      {/* Right Section */}
      <button
        type="button"
        onClick={openModal}
        className="
          w-full
          rounded-lg
          bg-green-600
          px-5
          py-3
          text-sm
          font-semibold
          text-white
          transition-all
          duration-200
          hover:bg-green-700
          active:scale-95
          focus:outline-none
          focus:ring-2
          focus:ring-green-500
          focus:ring-offset-2
          md:w-auto
          cursor-pointer
        "
      >
        + Create Budget
      </button>
    </header>
  );
}

export default BudgetHeader;