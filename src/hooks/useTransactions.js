import { useContext } from "react";

import TransactionContext from "../context/TransactionContext";

const useTransactions = () => {
  return useContext(TransactionContext);
};

export default useTransactions;