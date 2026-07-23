import {
    Menu,
    Bell,
    Search,
    X,
} from "lucide-react";

import {
    useNavigate,
    useLocation,
} from "react-router-dom";

import { useState } from "react";

import useSearch from "../../hooks/useSearch";

function Navbar({ setIsSidebarOpen }) {
    const navigate = useNavigate();
    const location = useLocation();

    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const {
        searchQuery,
        setSearchQuery,
        clearSearch,
    } = useSearch();

    const handleSearch = (e) => {
        const value = e.target.value;

        setSearchQuery(value);

        if (location.pathname !== "/search") {
            navigate("/search");
        }
    };

    const handleClear = () => {
        clearSearch();

        if (location.pathname === "/search") {
            navigate("/expenses");
        }
    };

    const closeMobileSearch = () => {
        setIsSearchOpen(false);
    };

    return (
        <nav
            className="
                flex h-16 shrink-0 items-center
                border-b border-slate-800
                bg-slate-900
                px-3 text-white
                sm:px-4 md:px-6
            "
        >
            {isSearchOpen ? (
                <div className="flex w-full items-center gap-2 sm:hidden">
                    <div className="relative min-w-0 flex-1">
                        <Search
                            size={18}
                            className="
                                absolute left-3 top-1/2
                                -translate-y-1/2
                                text-slate-400
                            "
                        />

                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearch}
                            placeholder="Search transactions..."
                            autoFocus
                            className="
                                w-full rounded-xl
                                border border-slate-700
                                bg-slate-800
                                py-2 pl-10 pr-9
                                text-sm
                                outline-none
                                transition
                                focus:border-blue-500
                            "
                        />

                        {searchQuery && (
                            <button
                                onClick={handleClear}
                                className="
                                    absolute right-3 top-1/2
                                    -translate-y-1/2
                                "
                            >
                                <X
                                    size={16}
                                    className="text-slate-400"
                                />
                            </button>
                        )}
                    </div>

                    <button
                        onClick={closeMobileSearch}
                        className="
                            shrink-0 rounded-lg p-2
                            text-slate-400
                            hover:bg-slate-800
                            hover:text-white
                        "
                    >
                        <X size={22} />
                    </button>
                </div>
            ) : (
                <>
                    {/* Mobile / Tablet Menu */}
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="
                            shrink-0 rounded-lg p-2
                            transition-colors
                            hover:bg-slate-800
                            lg:hidden
                        "
                    >
                        <Menu size={22} />
                    </button>

                    <div className="ml-auto flex items-center gap-2 sm:gap-4">
                        {/* Desktop Search */}
                        <div className="relative hidden sm:block w-48 md:w-56 lg:w-72">
                            <Search
                                size={18}
                                className="
                                    absolute left-3 top-1/2
                                    -translate-y-1/2
                                    text-slate-400
                                "
                            />

                            <input
                                type="text"
                                value={searchQuery}
                                onChange={handleSearch}
                                placeholder="Search transactions..."
                                className="
                                    w-full rounded-xl
                                    border border-slate-700
                                    bg-slate-800
                                    py-2 pl-10 pr-9
                                    text-sm
                                    outline-none
                                    transition
                                    focus:border-blue-500
                                "
                            />

                            {searchQuery && (
                                <button
                                    onClick={handleClear}
                                    className="
                                        absolute right-3 top-1/2
                                        -translate-y-1/2
                                    "
                                >
                                    <X
                                        size={16}
                                        className="text-slate-400 hover:text-white"
                                    />
                                </button>
                            )}
                        </div>

                        {/* Mobile Search */}
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="
                                rounded-lg p-2
                                hover:bg-slate-800
                                sm:hidden
                            "
                        >
                            <Search size={20} />
                        </button>

                        <button
                            className="
                                rounded-lg p-2
                                hover:bg-slate-800
                            "
                        >
                            <Bell size={20} />
                        </button>

                        <div
                            className="
                                flex h-9 w-9 shrink-0
                                items-center justify-center
                                rounded-xl
                                bg-green-500
                                font-bold
                                sm:h-10 sm:w-10
                            "
                        >
                            A
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
}

export default Navbar;