import {
    LayoutDashboard,
    Wallet,
    PiggyBank,
    BarChart3,
    Settings,
} from "lucide-react";

export const SidebarLinks = [
    {
        title: "Dashboard",
        path: "/",
        icon: LayoutDashboard,
    },
    {
        title: "Expenses",
        path: "/expenses",
        icon: Wallet,
    },
    {
        title: "Budget",
        path: "/budgets",
        icon: PiggyBank,
    },
    {
        title: "Report",
        path: "/reports",
        icon: BarChart3,
    },
    {
        title: "Settings",
        path: "/settings",
        icon: Settings,
    }
];