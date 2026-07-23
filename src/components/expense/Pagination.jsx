import { ChevronLeft, ChevronRight } from "lucide-react";

const getPageNumbers = (currentPage, totalPages) => {
    if (totalPages <= 5) {
        return Array.from(
            { length: totalPages },
            (_, index) => index + 1
        );
    }

    if (currentPage <= 3) {
        return [1, 2, 3, 4, "...", totalPages];
    }

    if (currentPage >= totalPages - 2) {
        return [
            1,
            "...",
            totalPages - 3,
            totalPages - 2,
            totalPages - 1,
            totalPages,
        ];
    }

    return [
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
    ];
};

const Pagination = ({
    currentPage,
    totalPages,
    setCurrentPage,
}) => {
    if (totalPages <= 1) return null;

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const pages = getPageNumbers(
        currentPage,
        totalPages
    );

    return (
        <div className="flex items-center justify-between border-t border-slate-800 pt-4">
            <button
                type="button"
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="
                    flex items-center gap-2
                    rounded-lg border border-slate-700
                    px-3 py-2
                    text-sm text-slate-300
                    transition
                    hover:bg-slate-800
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                "
            >
                <ChevronLeft size={17} />
                <span className="hidden sm:inline">
                    Previous
                </span>
            </button>
            <div className="flex items-center gap-1 sm:gap-2">
                {pages.map((page, index) => {
                    if (page === "...") {
                        return (
                            <span
                                key={`ellipsis-${index}`}
                                className="px-1 text-slate-500"
                            >
                                ...
                            </span>
                        );
                    }

                    return (
                        <button
                            key={page}
                            type="button"
                            onClick={() => setCurrentPage(page)}
                            className={`
                    flex h-9 w-9 items-center justify-center
                    rounded-lg text-sm font-medium
                    transition-colors
                    ${currentPage === page
                                    ? "bg-green-500 text-white"
                                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                                }
                `}
                        >
                            {page}
                        </button>
                    );
                })}
            </div>
            <button
                type="button"
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="
                    flex items-center gap-2
                    rounded-lg border border-slate-700
                    px-3 py-2
                    text-sm text-slate-300
                    transition
                    hover:bg-slate-800
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                "
            >
                <span className="hidden sm:inline">
                    Next
                </span>
                <ChevronRight size={17} />
            </button>
        </div>
    );
};

export default Pagination;