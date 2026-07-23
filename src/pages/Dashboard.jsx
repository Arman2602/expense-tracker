import {
    Wallet,
    TrendingDown,
    TrendingUp,
    PiggyBank,
} from "lucide-react";
import StatCard from "../components/UI/StatCard";
import AddTransactionButton from "../components/Transactions/AddTransactionButton";
import TransactionContext from "../context/TransactionContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TransactionList from "../components/Transactions/TransactionList";
const Dashboard = () => {
    const navigate = useNavigate();
    const { balance, totalIncome, totalExpense, transactions } = useContext(TransactionContext);
    const recentTransactions = [...transactions].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 6);
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white sm:text-3xl">
                        Dashboard
                    </h1>

                    <p className="mt-1 text-sm text-slate-400 sm:text-base">
                        Track your expenses and manage your finances
                    </p>
                </div>

                <AddTransactionButton />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <StatCard
                    title="Total Balance"
                    amount={balance}
                    description="Current available balance"
                    icon={<Wallet size={22} />}
                    color="bg-blue-500/15 text-blue-400"
                />

                <StatCard
                    title="Total Expenses"
                    amount={totalExpense}
                    description="Total money spent"
                    icon={<TrendingDown size={22} />}
                    color="bg-red-500/15 text-red-400"
                />

                <StatCard
                    title="Total Income"
                    amount={totalIncome}
                    description="Total money received"
                    icon={<TrendingUp size={22} />}
                    color="bg-green-500/15 text-green-400"
                />

                <StatCard
                    title="Net Savings"
                    amount={totalIncome - totalExpense}
                    description="Income after expenses"
                    icon={<PiggyBank size={22} />}
                    color="bg-purple-500/15 text-purple-400"
                />
            </div>
            {/* <button onClick={clearTransactions}>clear</button> */}
            <section className="rounded-xl border border-slate-800 bg-slate-900 p-4 sm:p-6">
                <div className="mb-6 flex items-center justify-between gap-4">
                    <div>
                        <h2 className="text-lg font-semibold text-white sm:text-xl">
                            Recent Transactions
                        </h2>

                        <p className="mt-1 text-sm text-slate-400">
                            Your latest financial activity
                        </p>
                    </div>

                    {transactions.length > 0 && (
                        <button
                            onClick={() => navigate("/expenses")}
                            className="
                    shrink-0 text-sm font-medium
                    text-green-400
                    transition-colors
                    hover:text-green-300
                "
                        >
                            View all
                        </button>
                    )}
                </div>

                <TransactionList list={recentTransactions} />
            </section>
        </div>
    );
}

export default Dashboard;