import { X } from "lucide-react";
import useTransactions from "../../hooks/useTransactions";
import TransactionForm from "./TransactionForm";

const AddTransactionModal = () => {
    const {
        isOpen,
        closeTransactionModal,
    } = useTransactions();

    if (!isOpen) return null;

    return (
        <div
            className="
                fixed inset-0 z-50
                flex items-center justify-center
                bg-black/60
                p-3 sm:p-4
            "
        >
            <div
                className="
                    w-full max-w-md
                    max-h-[90vh]
                    overflow-y-auto
                    rounded-xl
                    border border-slate-800
                    bg-slate-900
                    p-4 sm:p-6
                    scrollbar-thin
                    scrollbar-track-transparent
                    scrollbar-thumb-slate-700
                "
            >
                <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-semibold text-white">
                            Add Transaction
                        </h2>

                        <p className="mt-1 text-sm text-slate-400">
                            Add a new income or expense
                        </p>
                    </div>

                    <button
                        onClick={closeTransactionModal}
                        className="
                            shrink-0 rounded-lg p-2
                            text-slate-400
                            transition-colors
                            hover:bg-slate-800
                            hover:text-white
                        "
                    >
                        <X size={20} />
                    </button>
                </div>

                <TransactionForm />
            </div>
        </div>
    );
};

export default AddTransactionModal;