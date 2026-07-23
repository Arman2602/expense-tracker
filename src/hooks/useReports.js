import { useMemo } from "react";
import { categoryMap } from "../data/categories";

const useReports = ({ transactions, selectedCategory, selectedMonth, selectedYear }) => {
    let filtered = [...transactions];
    return useMemo(() => {
        // Category Filter
        if (selectedCategory !== "all") {
            filtered = filtered.filter((transaction) => {
                return categoryMap[transaction.categoryId]?.name === selectedCategory;
            });
        }

        if (selectedMonth !== "all") {
            filtered = filtered.filter((transaction) => {
                const month = new Date(transaction.date).getMonth();
                return month === Number(selectedMonth);
            });
        }

        if (selectedYear !== "all") {
            filtered = filtered.filter((transaction) => {
                const year = new Date(transaction.date).getFullYear();
                return year === Number(selectedYear);
            });
        }


        return filtered;
    }, [
        transactions,
        selectedCategory,
        selectedMonth,
        selectedYear,
    ]);
}

export default useReports;