import CategoryFilter from "../UI/CategoryFilter";
import TypeFilter from "../UI/TypeFilter";
import SortFilter from "../UI/SortFilter";
const Filters = ({
    categories,
    selectedCategory,
    setSelectedCategory,
    selectedType,
    setSelectedType,
    sortBy,
    setSortBy,
}) => {
    return (
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4">
            <div className="col-span-2 lg:col-span-1">
                <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
            </div>

            <TypeFilter
                selectedType={selectedType}
                setSelectedType={setSelectedType}
            />

            <SortFilter
                sortBy={sortBy}
                setSortBy={setSortBy}
            />
        </div>
    );
};

export default Filters;