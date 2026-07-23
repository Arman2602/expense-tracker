import { getBudgetPercentage, getBudgetSpent } from "./budgetCalculations";

export const getBudgetSummary = (
    budgets,
    transactions,
    categories
) => {

    const totalBudget = budgets.reduce((total, budget) => total + Number(budget.budgetAmount), 0);

    const totalSpent = budgets.reduce((total, budget) => {
        return (
            total + getBudgetSpent(budget, transactions)
        )
    }, 0
    );

    const totalRemaining = totalBudget - totalSpent;
    const budgetPercentage = getBudgetPercentage(totalSpent, totalBudget);
    return {
        totalBudget,
        totalSpent,
        totalRemaining,
        budgetPercentage
    }
}