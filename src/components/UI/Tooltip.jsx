const Tooltip = ({ text, children }) => {
    return (
        <div className="group relative inline-flex">
            {children}

            {/* Tooltip */}
            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-full
                    left-1/2
                    z-50
                    mb-3
                    -translate-x-1/2
                    whitespace-nowrap
                    rounded-lg
                    bg-slate-800
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    text-white
                    opacity-0
                    shadow-lg
                    transition-all
                    duration-200
                    group-hover:opacity-100
                    group-hover:-translate-y-1
                "
            >
                {text}

                {/* Arrow */}
                <div
                    className="
                        absolute
                        left-1/2
                        top-full
                        h-2
                        w-2
                        -translate-x-1/2
                        -translate-y-1/2
                        rotate-45
                        bg-slate-800
                    "
                />
            </div>
        </div>
    );
};

export default Tooltip;