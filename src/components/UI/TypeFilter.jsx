import { ArrowLeftRight } from "lucide-react";

const TypeFilter = ({
    selectedType,
    setSelectedType,
}) => {
    return (
        <div className="relative w-full">
            <ArrowLeftRight
                size={18}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <select
                className="
                    w-full appearance-none rounded-xl
                    border border-slate-700
                    bg-slate-900
                    py-3 pl-10 pr-4
                    text-sm text-white
                    outline-none
                    transition-colors
                    focus:border-green-500
                    sm:text-base
                "
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
            >
                <option value="all">All Types</option>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
            </select>
        </div>
    );
};

export default TypeFilter;