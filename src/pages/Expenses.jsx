import Header from "../components/expense/Header";
import Filters from "../components/expense/Filters";
import { categories, categoryMap } from "../data/categories";
import TransactionsStats from "../components/expense/TransactionsStats";
import { useEffect } from "react";
import useTransactions from "../hooks/useTransactions";
import ExpenseList from "../components/expense/ExpenseList";
import FilterTransactions from "../data/FilterTransactions";
import useFilteredTransactions from "../hooks/useFilteredTransactions";
import usePagination from "../hooks/usePagination";
import Pagination from "../components/expense/Pagination";
import { getExpenseStats } from "../utils/expenseCalculations";
const Expenses = () => {
    const { transactions } = useTransactions();
    const {
        totalExpenses,
        totalTransactions,
        topCategory,
    } = getExpenseStats(transactions, categories);
    const {
        selectedCategory,
        setSelectedCategory,
        selectedType,
        setSelectedType,
        sortBy,
        setSortBy
    } = FilterTransactions();
    

    const TotalTransactions = transactions.length;
    const filteredExpenses = useFilteredTransactions({
        transactions,
        selectedCategory,
        selectedType,
        sortBy,
    });

    const {
        currentPage,
        setCurrentPage,
        totalPages,
        paginatedData,
    } = usePagination(filteredExpenses, 9);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, selectedType, sortBy, setCurrentPage]);
    return (
        <div className="space-y-6">
            <Header />
            <Filters categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />
            <TransactionsStats totalExpenses={totalExpenses} TotalTransactions={TotalTransactions} TopCategory={topCategory} />
            <ExpenseList transactions={paginatedData} categoryMap={categoryMap} />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

export default Expenses;