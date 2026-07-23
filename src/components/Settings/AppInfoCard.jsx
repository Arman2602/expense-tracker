import { Info } from "lucide-react";

const AppInfoCard = () => {
    const appInfo = [
        { label: "Version", value: "v1.0.0" },
        { label: "Framework", value: "React + Vite" },
        { label: "Styling", value: "Tailwind CSS" },
        { label: "Storage", value: "LocalStorage" },
    ];

    return (
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 sm:p-6">
            {/* Header */}
            <div className="flex items-start gap-3 mb-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-700">
                    <Info className="w-5 h-5 text-sky-400" />
                </div>

                <div>
                    <h2 className="text-base sm:text-lg font-semibold text-white">
                        App Information
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                        Basic information about the application.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
                {appInfo.map((item) => (
                    <div
                        key={item.label}
                        className="flex flex-col gap-1 border-b border-slate-700 pb-3 last:border-b-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                    >
                        <span className="text-sm text-slate-400">
                            {item.label}
                        </span>

                        <span className="text-sm font-medium text-white break-words sm:text-right">
                            {item.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AppInfoCard;