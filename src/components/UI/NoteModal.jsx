
import { X, FileText } from "lucide-react";

const NoteModal = ({ isOpen, note, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            onClick={onClose}
        >
            <div
                className="w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-900 shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-800 p-5">
                    <div className="flex items-center gap-3">
                        <div className="rounded-lg bg-slate-800 p-2 text-slate-300">
                            <FileText size={20} />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-white">
                                Transaction Note
                            </h2>

                            <p className="text-sm text-slate-400">
                                Complete transaction description
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <div className="max-h-80 overflow-y-auto p-6">
                    <p className="whitespace-pre-wrap break-words leading-7 text-slate-300">
                        {note}
                    </p>
                </div>

                {/* Footer */}
                <div className="flex justify-end border-t border-slate-800 p-5">
                    <button
                        onClick={onClose}
                        className="rounded-lg bg-green-500 px-5 py-2 font-medium text-white transition hover:bg-green-600"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NoteModal;