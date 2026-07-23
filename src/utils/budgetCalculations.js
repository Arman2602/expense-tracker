export const calculateBudgetDetails = (
    budget,
    transactions,
    categories
) => {
    const category = getBudgetCategory(
        budget,
        categories
    );

    const spent = getBudgetSpent(
        budget,
        transactions
    );

    const remaining = getRemainingBudget(
        budget.budgetAmount,
        spent
    );

    const percentage = getBudgetPercentage(
        spent,
        budget.budgetAmount
    );

    return {
        category,
        spent,
        remaining,
        percentage,
    };
};

export const getBudgetCategory = (budget, categories) => {
    return categories.find(
        (category) => category.id === Number(budget.categoryId)
    );
};

export const getRemainingBudget = (
    budgetAmount,
    spent
) => {
    return budgetAmount - spent;
};

export const getBudgetPercentage = (
    spent,
    budgetAmount
) => {
    if (budgetAmount === 0) return 0;

    return Math.round(
        (spent / budgetAmount) * 100
    );
};

export const getBudgetSpent = (
    budget,
    transactions
) => {
    const filteredTransactions = transactions.filter(
        (transaction) => {

            const transactionDate = new Date(transaction.date);

            const transactionMonth =
                transactionDate.toLocaleString(
                    "default",
                    { month: "long" }
                );

            const transactionYear =
                transactionDate.getFullYear();

            return (
                transaction.categoryId === Number(budget.categoryId) &&
                transactionMonth === budget.month &&
                transactionYear === budget.year
            );
        }
    );
    return filteredTransactions.reduce(
        (total, transaction) => total + Number(transaction.amount),
        0
    );
};