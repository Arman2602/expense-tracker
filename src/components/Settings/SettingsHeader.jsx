import { Settings } from "lucide-react";

const SettingsHeader = () => {
    return (
        <div className="mb-6 sm:mb-8">
            <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-800">
                    <Settings className="h-6 w-6 text-indigo-400" />
                </div>

                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-white">
                        Settings
                    </h1>

                    <p className="mt-1 text-sm sm:text-base text-slate-400">
                        Manage your application preferences and data.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SettingsHeader;