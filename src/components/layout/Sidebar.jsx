import { NavLink } from "react-router-dom";
import { SidebarLinks } from "../../data/SidebarLinks";
import {
    Sidebar as SidebarIcon,
    X,
} from "lucide-react";

function Sidebar({ isOpen, setIsOpen }) {
    return (
        <>
            {/* Mobile / Tablet Overlay */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="
                        fixed inset-0 z-40
                        bg-black/60
                        lg:hidden
                    "
                />
            )}

           <aside
    className={`
        fixed left-0 top-0 z-50
        h-screen w-64
        border-r border-slate-800
        bg-slate-900
        text-white
        shadow-2xl
        transition-transform duration-300

        lg:static
        lg:z-auto
        lg:shrink-0
        lg:translate-x-0
        lg:shadow-none

        ${
            isOpen
                ? "translate-x-0"
                : "-translate-x-full"
        }
    `}
>
                {/* Header */}
                <div
                    className="
                        flex h-16 items-center gap-3
                        border-b border-slate-800
                        px-6
                    "
                >
                    <SidebarIcon size={20} />

                    <h2 className="text-xl font-bold">
                        Expense Tracker
                    </h2>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="
                            ml-auto rounded-lg p-1
                            transition
                            hover:bg-slate-800
                            lg:hidden
                        "
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="mt-6 px-3">
                    {SidebarLinks.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `
                                flex items-center gap-4
                                rounded-xl
                                px-4 py-3
                                text-slate-300
                                transition-all duration-300

                                ${
                                    isActive
                                        ? "bg-green-500 text-white"
                                        : "hover:bg-slate-800 hover:text-white"
                                }
                                `
                            }
                        >
                            <item.icon size={20} />
                            <span>{item.title}</span>
                        </NavLink>
                    ))}
                </nav>
            </aside>
        </>
    );
}

export default Sidebar;