import { ArrowUpDown } from "lucide-react";

const SortFilter = ({
    sortBy,
    setSortBy,
}) => {
    return (
        <div className="relative w-full">
            <ArrowUpDown
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
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
            >
                <option value="latest">Latest First</option>
                <option value="oldest">Oldest First</option>
                <option value="highest">Highest Amount</option>
                <option value="lowest">Lowest Amount</option>
            </select>
        </div>
    );
};

export default SortFilter;