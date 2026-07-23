import { CalendarDays } from "lucide-react";

export const MONTHS = [
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

const MonthFilter = ({
    selectedMonth,
    setSelectedMonth,
}) => {
    return (
        <div className="relative w-full">
            <CalendarDays
                size={18}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
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
                <option value="all">All Months</option>

                {MONTHS.map((month, index) => (
                    <option
                        key={month}
                        value={index}
                    >
                        {month}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default MonthFilter;