import { X } from "lucide-react";
import { useBudgets } from "../../hooks/useBudget";
const BudgetModal = ({
  title,
  children,
}) => {
  const { isOpen, onClose } = useBudgets();
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/60
        backdrop-blur-sm
        p-4
      "
    >
      <div
        className="
          w-full
          max-w-lg
          rounded-2xl
          border
          border-zinc-800
          bg-zinc-900
          shadow-2xl
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 p-5">
          <h2 className="text-xl font-semibold text-white">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="
              rounded-lg
              p-2
              text-zinc-400
              transition
              hover:bg-zinc-800
              hover:text-white
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BudgetModal;