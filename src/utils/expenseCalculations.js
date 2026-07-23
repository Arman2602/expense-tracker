export const getExpenseStats = (transactions, categories) => {
    const expenseTransactions = transactions.filter(
        (transaction) => transaction.type === "expense"
    );

    const totalExpenses = expenseTransactions.reduce(
        (sum, transaction) => sum + Number(transaction.amount),
        0
    );

    const totalTransactions = transactions.length;

    const categoryTotals = expenseTransactions.reduce((acc, transaction) => {
        acc[transaction.categoryId] =
            (acc[transaction.categoryId] || 0) +
            Number(transaction.amount);

        return acc;
    }, {});

    const topCategoryId =
        Object.keys(categoryTotals).length > 0
            ? Object.keys(categoryTotals).reduce((a, b) =>
                  categoryTotals[a] > categoryTotals[b] ? a : b
              )
            : null;

    const topCategory =
        categories.find(
            (category) =>
                String(category.id) === String(topCategoryId)
        ) || null;

    return {
        totalExpenses,
        totalTransactions,
        topCategory,
    };
};