import { toast } from "sonner";
export const exportData = (transactions, budgets) => {
    try {
        const data = {
            transactions,
            budgets
        }

        const jsonData = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonData], {
            type: "application/json"
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        const date = new Date().toISOString().split("T")[0];
        const fileName = `expense-tracker-backup-${date}.json`;
        link.download = fileName;
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
        toast.success("Data exported successfully.");
    } catch (e) {
        console.log(e);
        toast.error("Oops! An error occurred.");
    }
};

export const importData = async (file) => {
    try {
        if(!file)
            throw new Error("No file selected");            
        const text = await file.text();
        const data = JSON.parse(text);

        // Ensure parsed data is an object
        if (!data || typeof data !== "object") {
            throw new Error("Invalid backup file.");
        }

        const { transactions, budgets } = data;

        // At least one of them should exist
        if (
            transactions === undefined &&
            budgets === undefined
        ) {
            throw new Error("Backup file contains no data.");
        }

        // Validate transactions
        if (
            transactions !== undefined &&
            !Array.isArray(transactions)
        ) {
            throw new Error("Invalid transactions data.");
        }

        // Validate budgets
        if (
            budgets !== undefined &&
            !Array.isArray(budgets)
        ) {
            throw new Error("Invalid budgets data.");
        }

        if (
            transactions &&
            !transactions.every(isValidTransaction)
        ) {
            throw new Error("Invalid transaction data.");
        }

        if (
            budgets &&
            !budgets.every(isValidBudget)
        ) {
            throw new Error("Invalid budget data.");
        }

        return {
            transactions,
            budgets,
        };
    } catch (error) {
        throw new Error(error.message || "Failed to import backup.");
    }
};

const isValidTransaction = (transaction) => {
    return (
        typeof transaction.id === "number" &&
        typeof transaction.title === "string" &&
        typeof transaction.amount === "number" &&
        typeof transaction.categoryId === "number" &&
        typeof transaction.type === "string" &&
        typeof transaction.date === "string" &&
        typeof transaction.createdAt === "string" &&
        (transaction.note === undefined ||
            typeof transaction.note === "string")
    );
};

const isValidBudget = (budget) => {
    return (
        typeof budget.id === "string" &&
        typeof budget.categoryId === "string" &&
        typeof budget.budgetAmount === "number" &&
        typeof budget.month === "string" &&
        typeof budget.year === "number" &&
        typeof budget.createdAt === "number"
    );
};