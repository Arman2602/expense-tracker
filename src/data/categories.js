import {
    UtensilsCrossed,
    Plane,
    ShoppingBag,
    Receipt,
    BriefcaseBusiness,
    Wallet,
    icons
} from "lucide-react"

export const categories = [

    {
        id: 1,
        icon: UtensilsCrossed,
        name: "Food",
        type: "expense",
    },
    {
        id: 2,
        icon: Plane,
        name: "Travel",
        type: "expense",
    },
    {
        id: 3,
        icon: ShoppingBag,
        name: "Shopping",
        type: "expense",
    },
    {
        id: 4,
        icon: Receipt,
        name: "Bills",
        type: "expense"
    },
    {
        id: 5,
        icon: Wallet,
        name: "Salary",
        type: "income"
    },
    {
        id: 6,
        icon: BriefcaseBusiness,
        name: "Freelance",
        type: "income"
    }
];

export const categoryMap = Object.fromEntries(
    categories.map(category => [category.id, category])
);

export default categories;