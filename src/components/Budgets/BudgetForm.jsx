import { useEffect, useState } from "react";
import { categories } from "../../data/categories";
import { useBudgets } from "../../hooks/useBudget";

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const currentYear = new Date().getFullYear();

const years = [
    currentYear,
    currentYear + 1,
];

const inputClasses =
    "w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition-all placeholder:text-zinc-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20";

const BudgetForm = ({
    initialData,
    onSubmit,
}) => {
    const [formData, setFormData] = useState(
        initialData || {
            categoryId: "",
            budgetAmount: "",
            month: "",
            year: currentYear,
        }
    );

    const { onClose, editingBudget, updateBudget, stopEditing } = useBudgets();

    const [errors, setErrors] = useState({});
    const [formError, setFormError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };
    const validateForm = () => {
        const newErrors = {};

        if (!formData.categoryId) {
            newErrors.categoryId = "Please select a category.";
        }

        if (!formData.month) {
            newErrors.month = "Please select a month.";
        }

        if (Number(formData.budgetAmount) <= 0) {
            newErrors.budgetAmount =
                "Budget amount must be greater than 0.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;


        if (editingBudget) {
            updateBudget(formData);
            stopEditing();
            onClose();
            return;
        }

        if (onSubmit) {
            const result = onSubmit(formData);
            if (!result.success) {
                setFormError(result.message);
                return;
            }

            setFormError("");
            onClose();
        }
    };

    useEffect(() => {
        if (editingBudget) {
            setFormData(editingBudget);
        }
    }, [editingBudget])

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-6"
        >
            {/* Category */}
            <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                    Category
                </label>

                <select
                    name="categoryId"
                    value={formData.categoryId}
                    onChange={handleChange}
                    className={inputClasses}
                >
                    <option value="">Select Category</option>

                    {categories.map((category) => (
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>

                {errors.categoryId && (
                    <p className="mt-2 text-sm text-red-400">
                        {errors.categoryId}
                    </p>
                )}
            </div>

            {/* Budget Amount */}
            <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                    Budget Amount
                </label>

                <input
                    type="number"
                    name="budgetAmount"
                    placeholder="Enter Budget Amount"
                    value={formData.budgetAmount}
                    onChange={handleChange}
                    className={inputClasses}
                />
                {errors.budgetAmount && (
                    <p className="mt-2 text-sm text-red-400">
                        {errors.budgetAmount}
                    </p>
                )}
            </div>

            {/* Month & Year */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-300">
                        Month
                    </label>

                    <select
                        name="month"
                        value={formData.month}
                        onChange={handleChange}
                        className={inputClasses}
                    >
                        <option value="">Select Month</option>

                        {months.map((month) => (
                            <option
                                key={month}
                                value={month}
                            >
                                {month}
                            </option>
                        ))}
                    </select>
                    {errors.month && (
                        <p className="mt-2 text-sm text-red-400">
                            {errors.month}
                        </p>
                    )}
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-300">
                        Year
                    </label>

                    <select
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        className={inputClasses}
                    >
                        {years.map((year) => (
                            <option
                                key={year}
                                value={year}
                            >
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Footer */}
            {
                formError && (
                    <p className="mt-2 text-sm text-red-400">
                        {formError}
                    </p>
                )
            }
            <br />
            <div className="flex justify-end gap-3 pt-4">

                <button
                    type="button"
                    onClick={onClose}
                    className="rounded-xl border border-zinc-700 px-5 py-2.5 text-zinc-300 transition-all hover:bg-zinc-800 hover:text-white"
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    className="rounded-xl bg-blue-600 px-5 py-2.5 font-medium text-white transition-all hover:bg-blue-700"
                >
                    Save Budget
                </button>
            </div>
        </form>
    );
};

export default BudgetForm;