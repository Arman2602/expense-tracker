import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  FileText,
  IndianRupee,
  ArrowLeftRight,
  Tags,
  StickyNote,
  CalendarDays,
} from "lucide-react";

import useTransactions from "../../hooks/useTransactions";

const initialFormData = {
  id: "",
  title: "",
  amount: "",
  categoryId: "",
  type: "expense",
  note: "",
  date: "",
  createdAt: "",
};

const TransactionForm = () => {
  const {
    addTransaction,
    editingTransaction,
    updateTransaction,
    categories,
    closeTransactionModal,
    stopEditing,
  } = useTransactions();

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingTransaction) {
      setFormData(editingTransaction);
    }
  }, [editingTransaction]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.amount) {
      newErrors.amount = "Amount is required";
    } else if (Number(formData.amount) <= 0) {
      newErrors.amount = "Amount must be greater than 0";
    }

    if (!formData.categoryId) {
      newErrors.categoryId = "Please select a category";
    }

    if (!formData.date) {
      newErrors.date = "Date is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "type" && {
        categoryId: "",
      }),
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
      ...(name === "type" && {
        categoryId: "",
      }),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const transactionData = {
      ...formData,
      amount: Number(formData.amount),
      categoryId: Number(formData.categoryId),
    };
    const isEditing = Boolean(editingTransaction);
    if (isEditing) {
      updateTransaction(transactionData);
      stopEditing();
    }
    else {
      addTransaction({
        ...transactionData,
        id: Date.now(),
        createdAt: new Date().toISOString(),
      });
    }

    setFormData(initialFormData);
    setErrors({});

    closeTransactionModal();

    if (isEditing) {
      toast.success("Transaction updated successfully");
    } else {
      toast.success("Transaction added successfully");
    }
  };

  const filteredCategories = categories.filter(
    (category) => category.type === formData.type
  );

  const getFieldClasses = (fieldName) => `
    w-full rounded-xl border
    bg-slate-800
    py-3 pl-11 pr-4
    text-white
    outline-none
    transition-colors
    placeholder:text-slate-500
    ${errors[fieldName]
      ? "border-red-500 focus:border-red-500"
      : "border-slate-700 focus:border-green-500"
    }
  `;

  const iconClasses = `
    absolute left-3 top-1/2
    -translate-y-1/2
    text-slate-400
  `;

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Title */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Title
          </label>

          <div className="relative">
            <FileText size={18} className={iconClasses} />

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter title"
              className={getFieldClasses("title")}
            />
          </div>

          {errors.title && (
            <p className="mt-1 text-sm text-red-400">
              {errors.title}
            </p>
          )}
        </div>

        {/* Amount */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Amount
          </label>

          <div className="relative">
            <IndianRupee size={18} className={iconClasses} />

            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter amount"
              min="0"
              className={getFieldClasses("amount")}
            />
          </div>

          {errors.amount && (
            <p className="mt-1 text-sm text-red-400">
              {errors.amount}
            </p>
          )}
        </div>

        {/* Type */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Type
          </label>

          <div className="relative">
            <ArrowLeftRight size={18} className={iconClasses} />

            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className={getFieldClasses("type")}
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Category
          </label>

          <div className="relative">
            <Tags size={18} className={iconClasses} />

            <select
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              className={getFieldClasses("categoryId")}
            >
              <option value="">Select category</option>

              {filteredCategories.map((category) => (
                <option
                  key={category.id}
                  value={category.id}
                >
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {errors.categoryId && (
            <p className="mt-1 text-sm text-red-400">
              {errors.categoryId}
            </p>
          )}
        </div>

        {/* Note */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Note
            <span className="ml-1 text-slate-500">
              (Optional)
            </span>
          </label>

          <div className="relative">
            <StickyNote size={18} className={iconClasses} />

            <input
              type="text"
              name="note"
              value={formData.note}
              onChange={handleChange}
              placeholder="Add a note"
              className={getFieldClasses("note")}
            />
          </div>
        </div>

        {/* Date */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Date
          </label>

          <div className="relative">
            <CalendarDays size={18} className={iconClasses} />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={getFieldClasses("date")}
            />
          </div>

          {errors.date && (
            <p className="mt-1 text-sm text-red-400">
              {errors.date}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="
          mt-6 w-full cursor-pointer
          rounded-xl bg-green-500
          py-3 font-semibold text-white
          transition-colors
          hover:bg-green-600
        "
      >
        {editingTransaction
          ? "Save Changes"
          : "Add Transaction"}
      </button>
    </form>
  );
};

export default TransactionForm;