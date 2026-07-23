import { Tags } from "lucide-react";

const CategoryFilter = ({
    categories,
    selectedCategory,
    setSelectedCategory,
}) => {
    return (
        <div className="relative w-full">
            <Tags
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
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="all">All Categories</option>

                {categories.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                        {cat.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategoryFilter;