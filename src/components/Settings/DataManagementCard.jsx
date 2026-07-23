import { Database, Download, Upload } from "lucide-react";
import { exportData, importData } from "../../utils/dataManagement";
import useTransactions from "../../hooks/useTransactions"
import { useBudgets } from "../../hooks/useBudget"
import { useRef } from "react";
import { toast } from "sonner";
const DataManagementCard = () => {
    const {
        transactions,
        dispatch: transactionDispatch,
    } = useTransactions();

    const {
        budgets,
        dispatch: budgetDispatch,
    } = useBudgets();

    const fileInputRef = useRef(null);

    const handleImportClick = () => {
        fileInputRef.current.click();
    };

    const handleSelectFile = async (e) => {
        const file = e.target.files[0];

        if (!file) return;

        try {
            const { transactions, budgets } = await importData(file);

            if (transactions) {
                transactionDispatch({
                    type: "SET_TRANSACTIONS",
                    payload: transactions,
                });
            }

            if (budgets) {
                budgetDispatch({
                    type: "SET_BUDGETS",
                    payload: budgets,
                });
            }

            toast.success("Data imported successfully.");
        } catch (error) {
            toast.error(error.message);
        } finally {
            // Allows selecting the same file again
            e.target.value = "";
        }
    };
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 sm:p-6">
            {/* Header */}
            <div className="flex items-start gap-3 mb-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-700">
                    <Database className="w-5 h-5 text-emerald-400" />
                </div>

                <div>
                    <h2 className="text-base sm:text-lg font-semibold text-white">
                        Data Management
                    </h2>

                    <p className="text-sm text-slate-400 mt-1">
                        Backup or restore your application data.
                    </p>
                </div>
            </div>

            <div className="space-y-5">
                {/* Export */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h3 className="text-white font-medium">
                            Export Data
                        </h3>

                        <p className="text-sm text-slate-400 mt-1">
                            Download your transactions and budgets as a backup.
                        </p>
                    </div>

                    <button
                        className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700"
                        onClick={() => exportData(transactions, budgets)}
                    >
                        <Download size={18} />
                        Export
                    </button>
                </div>

                <hr className="border-slate-700" />

                {/* Import */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h3 className="text-white font-medium">
                            Import Data
                        </h3>

                        <p className="text-sm text-slate-400 mt-1">
                            Restore your data from a previously exported backup.
                        </p>
                    </div>

                    <button
                        className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-slate-700 px-4 py-2 text-white transition-colors hover:bg-slate-600"
                        onClick={handleImportClick}
                    >
                        <Upload size={18} />
                        Import
                    </button>
                    <input ref={fileInputRef} type="file" hidden onChange={(e) => handleSelectFile(e)} />
                </div>
            </div>
        </div>
    );
};

export default DataManagementCard;