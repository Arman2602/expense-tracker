import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden bg-slate-950">
            <Sidebar
                isOpen={isSidebarOpen}
                setIsOpen={setIsSidebarOpen}
            />

            <div className="flex min-w-0 flex-1 flex-col">
                <Navbar
                    setIsSidebarOpen={setIsSidebarOpen}
                />

                <main className="
                    min-w-0 flex-1 overflow-y-auto overflow-x-hidden
                    bg-slate-950
                    p-3 sm:p-4 md:p-6
                    scrollbar-thin
                    scrollbar-track-transparent
                    scrollbar-thumb-zinc-700
                ">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;