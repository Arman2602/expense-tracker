export const transactionReducer = (state, action) => {
  switch (action.type) {

    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [
          ...state.transactions,
          action.payload
        ],
      };

    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    case "UPDATE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.map(transaction => transaction.id === action.payload.id ? action.payload : transaction),
      };

    case "SET_TRANSACTIONS":
      return {
        ...state,
        transactions: action.payload,
      };

    case "CLEAR_TRANSACTIONS":
      return {
        ...state,
        transactions: [],
      };
    default:
      return state;
  }
};