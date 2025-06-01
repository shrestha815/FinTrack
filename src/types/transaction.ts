export type EntryType = 'income' | 'expense';

export interface Transaction {
    id: string;
    type: EntryType;
    category: string;
    amount: number;
    note?: string;
    date: string;
}