import { useState } from "react";
const FilterTransactions = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedType, setSelectedType] = useState("all");
    const [sortBy, setSortBy] = useState("latest");
    return {
        selectedCategory,
        setSelectedCategory,
        selectedType,
        setSelectedType,
        sortBy,
        setSortBy
    }
}

export default FilterTransactions;