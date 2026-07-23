import MonthFilter from "../UI/MonthFilter";
import YearFilter from "../UI/YearFilter";
import CategoryFilter from "../UI/CategoryFilter";

const ReportsFilters = ({
    categories,
    selectedCategory,
    setSelectedCategory,
    selectedMonth,
    setSelectedMonth,
    selectedYear,
    setSelectedYear,
}) => {
    return (
        <section className="rounded-2xl p-5">
 

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />

                <MonthFilter
                    selectedMonth={selectedMonth}
                    setSelectedMonth={setSelectedMonth}
                />

                <YearFilter
                    selectedYear={selectedYear}
                    setSelectedYear={setSelectedYear}
                />
            </div>
        </section>
    );
};

export default ReportsFilters;