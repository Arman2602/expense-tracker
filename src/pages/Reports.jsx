import { useState } from "react";

import ReportHeader from "../components/Reports/ReportHeader";
import ReportsFilters from "../components/Reports/ReportsFilters";
import ReportSummary from "../components/Reports/ReportsSummary";
import CategoryBreakdown from "../components/Reports/CategoryBreakdown";
import MonthlySpending from "../components/Reports/MonthlySpending";
import ReportInsights from "../components/Reports/ReportInsights";
import CategorySpendingChart from "../components/Reports/CategorySpendingChart";
import MonthlySpendingChart from "../components/Reports/MonthlySpendingChart";

import useTransactions from "../hooks/useTransactions";
import useReports from "../hooks/useReports";

import getReportSummary, {
    getReportInsights,
    getCategoryBreakdown,
    getMonthlySpending,
} from "../utils/reportCalculation";

const Reports = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedMonth, setSelectedMonth] = useState("all");
    const [selectedYear, setSelectedYear] = useState("all");

    const { categories, transactions } = useTransactions();

    const filteredTransactions = useReports({
        transactions,
        selectedCategory,
        selectedMonth,
        selectedYear,
    });

    const summary = getReportSummary(filteredTransactions);

    const categoryBreakdown =
        getCategoryBreakdown(filteredTransactions);

    const monthlySpending =
        getMonthlySpending(filteredTransactions);

    const insights = getReportInsights({
        summary,
        categoryBreakdown,
        monthlySpending,
    });

    return (
        <div className="min-w-0 w-full space-y-6 overflow-x-hidden">
            <ReportHeader />

            <ReportsFilters
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
            />

            <ReportSummary summary={summary} />

            <CategoryBreakdown
                categoryBreakdown={categoryBreakdown}
            />

            <MonthlySpending
                monthlySpending={monthlySpending}
            />

            <ReportInsights insights={insights} />

            <div className="grid grid-cols-1 gap-6">
                <CategorySpendingChart
                    categoryBreakdown={categoryBreakdown}
                />

                <MonthlySpendingChart
                    monthlySpending={monthlySpending}
                />
            </div>
        </div>
    );
};

export default Reports;