import {
  Wallet,
  TrendingUp,
  PiggyBank,
  ChartPie,
} from "lucide-react";

import SummaryCard from "./SummaryCard";
import { getBudgetSummary } from "../../utils/getBudgetSummary";
import useTransactions from "../../hooks/useTransactions";
import { useBudgets } from "../../hooks/useBudget";

const SummaryCards = () => {
  const { transactions, categories } = useTransactions();
  const { budgets } = useBudgets();
  const summary = getBudgetSummary(budgets, transactions, categories);
  
  const cards = [
    {
      id: 1,
      title: "Total Budget",
      value: summary.totalBudget,
      icon: Wallet,
      color: "blue",
    },
    {
      id: 2,
      title: "Total Spent",
      value: summary.totalSpent,
      icon: TrendingUp,
      color: "green",
    },
    {
      id: 3,
      title: "Remaining Budget",
      value: summary.totalRemaining,
      icon: PiggyBank,
      color: "orange",
    },
    {
      id: 4,
      title: "Budget Usage",
      value: summary.budgetPercentage + "%",
      icon: ChartPie,
      color: "purple",
    },
  ];

  

  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <SummaryCard
          key={card.id}
          {...card}
        />
      ))}
    </section>
  );
};

export default SummaryCards;