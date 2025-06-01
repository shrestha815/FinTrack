import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type EntryType = "income" | "expense";

export interface Transaction {
    id: string;
    type: EntryType;
    category: string;
    amount: number;
    note?: string;
    date: string;
}

interface TransactionState {
    transactions: Transaction[];
}

const initialState: TransactionState = {
    transactions:[],
};

const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        addTransaction: (state,action: PayloadAction<Transaction>) => {
            state.transactions.push(action.payload);
        },
        deleteTransaction: (state, action: PayloadAction<string>) => {
            state.transactions = state.transactions.filter(t=> t.id !== action.payload);
        },
    },
});

export const { addTransaction, deleteTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;