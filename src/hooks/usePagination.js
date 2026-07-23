import { useState } from "react";

const usePagination = (data, itemsPerPage = 9) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(
        data.length / itemsPerPage
    );

    const startIndex =
        (currentPage - 1) * itemsPerPage;

    const paginatedData = data.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    return {
        currentPage,
        setCurrentPage,
        totalPages,
        paginatedData,
    };
};

export default usePagination;