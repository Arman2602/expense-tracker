import { Search as SearchIcon } from "lucide-react";

import useTransactions from "../hooks/useTransactions";
import useSearch from "../hooks/useSearch";
import useFilteredTransactions from "../hooks/useFilteredTransactions";
import usePagination from "../hooks/usePagination";

import { categoryMap } from "../data/categories";
import FilterTransactions from "../data/FilterTransactions";

import Filters from "../components/expense/Filters";
import ExpenseList from "../components/expense/ExpenseList";
import Pagination from "../components/expense/Pagination";

const Search = () => {
    const {
        transactions,
        categories,
    } = useTransactions();

    const { searchQuery } = useSearch();

    const {
        selectedCategory,
        setSelectedCategory,
        selectedType,
        setSelectedType,
        sortBy,
        setSortBy,
    } = FilterTransactions();

    const filteredTransactions = useFilteredTransactions({
        transactions,
        searchQuery,
        selectedCategory,
        selectedType,
        sortBy,
    });

    const {
        currentPage,
        setCurrentPage,
        totalPages,
        paginatedData,
    } = usePagination(filteredTransactions, 9);

    const hasSearch = searchQuery.trim() !== "";

    return (
        <div className="space-y-6">

            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-white">
                    Search
                </h1>

                <p className="mt-1 text-slate-400">
                    Search transactions by title, category, note, amount or date.
                </p>
            </div>

            {/* Search Chip */}
            {hasSearch && filteredTransactions.length > 0 && (
                <div className="inline-flex items-center rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-2">
                    <SearchIcon
                        size={16}
                        className="mr-2 text-green-400"
                    />

                    <span className="text-sm text-slate-300">
                        Searching for
                    </span>

                    <span className="ml-2 font-semibold text-white">
                        "{searchQuery}"
                    </span>
                </div>
            )}

          {hasSearch && 
            (<Filters
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />)
          }

            {/* Empty Search */}
            {!hasSearch && (
                <div className="rounded-xl border border-dashed border-slate-700 bg-slate-900 p-12 text-center">

                    <SearchIcon
                        size={56}
                        className="mx-auto text-slate-500"
                    />

                    <h2 className="mt-5 text-2xl font-semibold text-white">
                        Start Searching
                    </h2>

                    <p className="mt-3 text-slate-400">
                        Use the search bar in the navbar to find transactions instantly.
                    </p>

                </div>
            )}

            {/* No Results */}
            {hasSearch && filteredTransactions.length === 0 && (
                <div className="rounded-xl border border-dashed border-slate-700 bg-slate-900 p-12 text-center">

                    <SearchIcon
                        size={56}
                        className="mx-auto text-slate-500"
                    />

                    <h2 className="mt-5 text-2xl font-semibold text-white">
                        No Results Found
                    </h2>

                    <p className="mt-3 text-slate-400">
                        No transaction matched
                    </p>

                    <p className="mt-1 font-semibold text-white">
                        "{searchQuery}"
                    </p>

                    <p className="mt-4 text-sm text-slate-500">
                        Try another keyword or adjust your filters.
                    </p>

                </div>
            )}

            {/* Results */}
            {hasSearch && filteredTransactions.length > 0 && (
                <>
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-slate-400">
                            Showing{" "}
                            <span className="font-semibold text-white">
                                {filteredTransactions.length}
                            </span>{" "}
                            matching transaction
                            {filteredTransactions.length !== 1 && "s"}
                        </p>
                    </div>

                    <ExpenseList
                        transactions={paginatedData}
                        categoryMap={categoryMap}
                    />

                    {totalPages > 1 && (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default Search;