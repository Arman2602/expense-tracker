import { ReceiptText } from "lucide-react";

import { categoryMap } from "../../data/categories";
import RecentTransactionCards from "./RecentTransactionCards";

const TransactionList = ({ list }) => {
    if (list.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center">
                <div
                    className="
                        flex h-12 w-12 items-center justify-center
                        rounded-full bg-slate-800 text-slate-400
                    "
                >
                    <ReceiptText size={22} />
                </div>

                <h3 className="mt-4 font-medium text-white">
                    No transactions yet
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
                    Add your first transaction to start tracking your
                    financial activity.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-3">
            {list.map((transaction) => (
                <RecentTransactionCards
                    key={transaction.id}
                    transaction={transaction}
                    category={categoryMap[transaction.categoryId]}
                />
            ))}
        </div>
    );
};

export default TransactionList;