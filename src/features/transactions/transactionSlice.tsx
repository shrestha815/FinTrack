import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Transaction } from "@/types/transaction";

interface TransactionState {
    transactions: Transaction[];
}

const initialState: TransactionState = {
    transactions:[],
};

const transactionSlice = createSlice({
    name: 'transactions',
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
