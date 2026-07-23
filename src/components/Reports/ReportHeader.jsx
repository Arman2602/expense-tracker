import { BarChart3 } from "lucide-react";

const ReportHeader = () => {
    return (
        <section className="mb-8">
            <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 text-green-400">
                    <BarChart3 size={28} />
                </div>

                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-white">
                        Reports
                    </h1>

                    <p className="mt-1 text-sm text-slate-400">
                        Analyze your income, expenses, and spending trends.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ReportHeader;