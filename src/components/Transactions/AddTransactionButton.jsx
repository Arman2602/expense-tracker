import AddTransactionModal from "./AddTransactionModal";
import useTransactions from "../../hooks/useTransactions";

const AddTransactionButton = () => {
  const { openTransactionModal } = useTransactions();

  return (
    <>
      <button
        onClick={openTransactionModal}
        className="
                    w-full rounded-xl
                    bg-green-500
                    px-5 py-3
                    font-bold text-white
                    transition-colors
                    hover:bg-green-600
                    sm:w-auto
                "
      >
        + Add Transaction
      </button>

      <AddTransactionModal />
    </>
  );
};

export default AddTransactionButton;