import AddTransactionButton from "../Transactions/AddTransactionButton";

const Header = () => {
    return (
        <div
            className="
                flex flex-col gap-4
                sm:flex-row
                sm:items-center
                sm:justify-between
            "
        >
            <div>
                <h1 className="text-2xl font-bold text-white sm:text-3xl">
                    Expenses
                </h1>

                <p className="mt-1 text-sm font-medium text-slate-400 sm:text-base">
                    Manage and track all your transactions.
                </p>
            </div>

            <div className="w-full sm:w-auto">
                <AddTransactionButton />
            </div>
        </div>
    );
};

export default Header;