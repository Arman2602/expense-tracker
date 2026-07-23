import { categoryMap } from "../data/categories";
import { MONTHS } from "../components/UI/MonthFilter";
const getReportSummary = (filteredTransactions) => {
    const summary = filteredTransactions.reduce((total, transaction) => {
        if (transaction.type === "income") {
            total.totalIncome = total.totalIncome + transaction.amount;
        }
        else {
            total.totalExpense = total.totalExpense + transaction.amount;
        }

        return total;
    }, {
        totalIncome: 0,
        totalExpense: 0,
    });

    const totalTransactions = filteredTransactions.length;
    const netSavings = summary.totalIncome - summary.totalExpense;

    return {
        ...summary,
        netSavings,
        totalTransactions
    }
}

export const getReportInsights = ({
    summary,
    categoryBreakdown,
    monthlySpending,
}) => {
    const topCategory = categoryBreakdown[0] || null;
    const topMonth = monthlySpending.reduce((maxMonth, month) => {
        if (maxMonth === null || maxMonth.amount < month.amount) {
            return month;
        }
        return maxMonth;
    }, null);
    let savingsStatus = {};

    if (summary.netSavings > 0) {
        savingsStatus.status = "positive";
        savingsStatus.message = `You saved ${summary.netSavings.toLocaleString()} during this period`;
    } else if (summary.netSavings < 0) {
        savingsStatus.status = "negative";
        savingsStatus.message = `Your expenses exceeded your income by ${summary.netSavings.toLocaleString()}`;
    } else {
        savingsStatus.status = "neutral";
        savingsStatus.message = "Your income and expenses are balanced for this period."
    }

    const hasData = summary.totalTransactions > 0;

    return {
        topCategory,
        topMonth,
        savingsStatus,
        hasData
    }
};

export const getMonthlySpending = (filteredTransactions) => {
    const expense = filteredTransactions.filter((transaction) => transaction.type === "expense");
    const filteredMonth = expense.reduce((obj, transaction) => {
        const date = new Date(transaction.date);
        const monthIndex = date.getMonth();
        const year = date.getFullYear();
        const key = `${year}-${monthIndex}`;
        if (obj[key]) {
            obj[key] += transaction.amount;
        }
        else {
            obj[key] = transaction.amount;
        }
        return obj;
    }, {})
    const monthBreakdown = Object.entries(filteredMonth).map(([key, val]) => {
        const [year, monthIndex] = key.split("-");
        const month = MONTHS[Number(monthIndex)];
        return {
            month,
            year: Number(year),
            amount: val,
            label: `${month.slice(0, 3)} ${year}`,
        }
    });
    monthBreakdown.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        }
        return (
            MONTHS.indexOf(a.month) - MONTHS.indexOf(b.month)
        );
    });
    return monthBreakdown;
};

export const getCategoryBreakdown = (filteredTransactions) => {
    const expense = filteredTransactions.filter((transaction) => transaction.type === "expense");
    const filteredCategory = expense.reduce((obj, transaction) => {
        const category = categoryMap[transaction.categoryId]?.name;
        if (obj[category]) {
            obj[category] += transaction.amount;
        }
        else {
            obj[category] = transaction.amount;
        }
        return obj;
    }, {});
    const CategoryBreakdown = Object.entries(filteredCategory).map(([key, value]) => {
        return {
            category: key,
            amount: value
        }
    });

    CategoryBreakdown.sort((a, b) => {
        return b.amount - a.amount;
    })

    const summary = getReportSummary(filteredTransactions);
    const totalamount = summary.totalExpense;
    const newArray = CategoryBreakdown.map((obj) => {
        const percentage = totalamount === 0 ? 0 : ((obj.amount / totalamount) * 100);
        return {
            ...obj,
            percentage: percentage
        }
    });
    return newArray;
}

export default getReportSummary;