import { useState } from "react";
import BudgetHeader from "../components/Budgets/BudgetHeader";
import BudgetList from "../components/Budgets/BudgetList";
import SummaryCards from "../components/Budgets/SummaryCards";
import BudgetModal from "../components/Budgets/BudgetModal";
import BudgetForm from "../components/Budgets/BudgetForm";
import { useBudgets } from "../hooks/useBudget";
const Budget = () => {
    const { addBudgets } = useBudgets();
    const handleSaveBudget = (formData) => {
        return addBudgets(formData);
    }
    return (
        <div className="space-y-6">
            <BudgetHeader />
            <BudgetModal
                title={"Add Budget"}>
                <BudgetForm onSubmit={handleSaveBudget}/>
            </BudgetModal>

            <SummaryCards />
            <BudgetList/>
        </div>
    );
}

export default Budget;