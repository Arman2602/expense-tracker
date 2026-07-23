import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";

import { transactionReducer } from "../reducers/transactionReducer";

import {
  loadTransactions,
  saveTransactions,
} from "../utils/localStorage";
import categories from "../data/categories";

const TransactionContext = createContext();



const initialState = {
  transactions: loadTransactions(),
  categories: categories,
};

export const TransactionProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openTransactionModal = () => setIsOpen(true);
  const closeTransactionModal = () => setIsOpen(false);

  const [editingTransaction, setEditingTransaction] = useState(null);
  const [state, dispatch] = useReducer(
    transactionReducer,
    initialState
  );

  const startEditing = (transaction) => {
    openTransactionModal();
    setEditingTransaction(transaction);
  }
  const stopEditing = () => {
    setEditingTransaction(null);
  }

  // Save to localStorage whenever transactions change
  useEffect(() => {
    saveTransactions(state.transactions);
  }, [state.transactions]);

  // Add Transaction
  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  //  Update Trasnaction
  const updateTransaction = (updatedTransaction) => {
    dispatch({
      type: "UPDATE_TRANSACTION",
      payload: updatedTransaction
    });
  };

  // Delete Transaction
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  // Total Income
  const totalIncome = useMemo(() => {
    return state.transactions
      .filter((transaction) => transaction.type === "income")
      .reduce(
        (total, transaction) =>
          total + transaction.amount,
        0
      );
  }, [state.transactions]);

  // Total Expense
  const totalExpense = useMemo(() => {
    return state.transactions
      .filter((transaction) => transaction.type === "expense")
      .reduce(
        (total, transaction) => {
          return total + transaction.amount

        },
        0
      );
  }, [state.transactions]);
  // Balance
  const balance = totalIncome - totalExpense; 
  const value = {
    transactions: state.transactions,
    categories: state.categories,
    addTransaction,
    deleteTransaction,
    totalIncome,
    totalExpense,
    balance,
    startEditing,
    stopEditing,
    editingTransaction,
    updateTransaction,
    openTransactionModal,
    closeTransactionModal,
    isOpen, 
    dispatch
  };

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContext;