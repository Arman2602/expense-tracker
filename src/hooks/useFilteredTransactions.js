import { useMemo } from "react";
import { categoryMap } from "../data/categories";

const useFilteredTransactions = ({
  transactions,
  searchQuery = "",
  selectedCategory = "all",
  selectedType = "all",
  sortBy = "latest",
}) => {
  return useMemo(() => {
    let filtered = [...transactions];

    // Search
    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();

      filtered = filtered.filter((transaction) => {
        const category =
          categoryMap[transaction.categoryId]?.name.toLowerCase() || "";

        return (
          (transaction.title || "").toLowerCase().includes(query) ||
          (transaction.note || "").toLowerCase().includes(query) ||
          transaction.type.toLowerCase().includes(query) ||
          category.includes(query) ||
          String(transaction.amount).includes(query) ||
          (transaction.date || "").toLowerCase().includes(query)
        );
      });
    }

    // Category Filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (transaction) =>
          categoryMap[transaction.categoryId]?.name === selectedCategory
      );
    }

    // Type Filter
    if (selectedType !== "all") {
      filtered = filtered.filter(
        (transaction) => transaction.type === selectedType
      );
    }

    // Sorting
    switch (sortBy) {
      case "latest":
        filtered.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        break;

      case "oldest":
        filtered.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
        break;

      case "highest":
        filtered.sort((a, b) => b.amount - a.amount);
        break;

      case "lowest":
        filtered.sort((a, b) => a.amount - b.amount);
        break;

      default:
        break;
    }

    return filtered;
  }, [
    transactions,
    searchQuery,
    selectedCategory,
    selectedType,
    sortBy,
  ]);
};

export default useFilteredTransactions;