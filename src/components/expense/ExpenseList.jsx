import { useState } from "react";
import ExpenseCards from "./ExpenseCards";
import NoteModal from "../UI/NoteModal";

const ExpenseList = ({
    transactions,
    categoryMap,
}) => {
    const [selectedNote, setSelectedNote] = useState(null);

    if (!transactions.length) {
        return (
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-10 text-center text-slate-400">
                No transactions found
            </div>
        );
    }

    return (
        <>
            <div
                className="
                    grid grid-cols-1 gap-4
                    md:grid-cols-2
                    xl:grid-cols-3
                "
            >
                {transactions.map((transaction) => (
                    <ExpenseCards
                        key={transaction.id}
                        transaction={transaction}
                        category={categoryMap[transaction.categoryId]}
                        onViewNote={(note) => setSelectedNote(note)}
                    />
                ))}
            </div>

            <NoteModal
                isOpen={selectedNote !== null}
                note={selectedNote}
                onClose={() => setSelectedNote(null)}
            />
        </>
    );
};

export default ExpenseList;