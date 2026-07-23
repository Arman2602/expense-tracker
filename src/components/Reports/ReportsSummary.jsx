import SummaryCard from "../Budgets/SummaryCard";
import { Wallet, Receipt, PiggyBank, ArrowLeftRight } from "lucide-react";
const ReportSummary = ({ summary }) => {
    return (
         <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <SummaryCard
                title="Total Income"
                value={summary.totalIncome}
                icon={Wallet}
                color="green"
            />

            <SummaryCard
                title="Total Expense"
                value={summary.totalExpense}
                icon={Receipt}
                color="orange"
            />

            <SummaryCard
                title="Net Savings"
                value={summary.netSavings}
                icon={PiggyBank}
                color="blue"
            />

            <SummaryCard
                title="Transactions"
                value={summary.totalTransactions}
                icon={ArrowLeftRight}
                color="purple"
            />
        </section>
    )
}

export default ReportSummary;