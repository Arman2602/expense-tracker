export const loadTransactions = () => {
  try {
    const data = localStorage.getItem("transactions");

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const saveTransactions = (transactions) => {
  try {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );
  } catch (error) {
    console.log(error);
  }
};

export const clearTransactions = () => {
  localStorage.setItem("transactions", JSON.stringify([]));
  saveTransactions([]);
}


export const loadData = (key) => {
   try {
    const data = localStorage.getItem(key);

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const saveData = (key, data) => {
  try {
    localStorage.setItem(
      key,
      JSON.stringify(data)
    );
  } catch (error) {
    console.error(error);
  }
}

export const clearData = (key) => {
  localStorage.removeItem(key);
}