import { Calendar } from "lucide-react";

const YEARS = ["2026", "2025", "2024"];

const YearFilter = ({
    selectedYear,
    setSelectedYear,
}) => {
    return (
        <div className="relative w-full">
            <Calendar
                size={18}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
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
            >
                <option value="all">All Years</option>

                {YEARS.map((year) => (
                    <option
                        key={year}
                        value={year}
                    >
                        {year}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default YearFilter;