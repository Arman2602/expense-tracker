export const initialBudgetState = {
  budgets: [],
};

export function budgetReducer(state, action) {
  switch (action.type) {
    case "ADD_BUDGET":
      return {
        ...state,
        budgets: [...state.budgets, action.payload],
      };

    case "UPDATE_BUDGET":
      return {
        ...state,
        budgets: state.budgets.map((budget) => budget.id === action.payload.id ? action.payload : budget)
      }

    case "DELETE_BUDGET":
      return {
        ...state,
        budgets: state.budgets.filter((budget) => budget.id != action.payload)
      };

    case "SET_BUDGETS":
      return {
        ...state,
        budgets: action.payload,
      };

    case "CLEAR_BUDGETS":
      return {
        ...state,
        budgets: [],
      };

    default:
      return state;
  }
}