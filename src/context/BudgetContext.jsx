import { createContext, useReducer, useEffect, useState } from "react";
import { budgetReducer, initialBudgetState } from "../reducers/budgetReducer";
import { loadData, saveData } from "../utils/localStorage";
export const BudgetContext = createContext();

export function BudgetProvider({ children }) {
  const [isOpen, setIsopen] = useState(false);
  const [editingBudget, setEditingBudget] = useState(null);
  const initialState = {
    ...initialBudgetState,
    budgets: loadData("budgets")
  }
  const [state, dispatch] = useReducer(
    budgetReducer,
    initialState
  );

  useEffect(() => {
    saveData("budgets", state.budgets);
  }, [state.budgets]);

  const addBudgets = (budgetData) => {
    const existingBudget = state.budgets.find(
      (budget) =>
        budget.categoryId === budgetData.categoryId &&
        budget.month === budgetData.month &&
        budget.year === Number(budgetData.year)
    );

    if (existingBudget) {
      return {
        success: false,
        message:
          "A budget already exists for this category and month.",
      };
    }

    const budget = {
      id: crypto.randomUUID(),
      ...budgetData,
      budgetAmount: Number(budgetData.budgetAmount),
      year: Number(budgetData.year),
      createdAt: Date.now(),
    };

    dispatch({
      type: "ADD_BUDGET",
      payload: budget,
    });

    return {
      success: true,
    };
  };

  const openModal = () => {
    setIsopen(true);
  };

   const onClose = () => setIsopen(false);

   const startEditing = (budget) => {
    openModal();
    setEditingBudget(budget);
   }

   const stopEditing = () => setEditingBudget(null);

   const updateBudget = (updatedBudget) => {
    const newBudget = {
      ...updatedBudget,
      budgetAmount: Number(updatedBudget.budgetAmount)
    }
    dispatch({
      type: "UPDATE_BUDGET",
      payload: newBudget
    });
   }

   const deleteBudget = (id) => {
        dispatch({
            type: "DELETE_BUDGET",
            payload: id
          });
   }

  const value = {
    budgets: state.budgets,
    addBudgets,
    dispatch,
    openModal,
    onClose, 
    isOpen,
    startEditing,
    stopEditing,
    editingBudget,
    updateBudget,
    deleteBudget,
    dispatch
  };
  return (
    <BudgetContext.Provider value={value}>
      {children}
    </BudgetContext.Provider>
  );
}