import React, { useState } from 'react'
import Card from '@/components/Card';
import {v4 as uuid} from 'uuid';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { addTransaction } from '@/features/transactions/transactionSlice';

const ExpenseForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const [amount, setAmount] = useState('');
    const [category, setCategory] =useState('');
    const [note, setNote] = useState('');

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        if (!amount || !category) return;

        dispatch(
            addTransaction({
                id: uuid(),
                type: 'expense',
                amount: parseFloat(amount),
                category,
                note,
                date: new Date().toISOString(),
            })
        );
        setAmount('');
        setCategory('');
        setNote('');
    };

    
  return (
    <Card title="Add Expense">
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            className="w-full p-2 border rounded bg-white text-gray-900"
            required
            />
            <select
            title='category_selector' 
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="w-full p-2 border rounded bg-white text-gray-900"
            required
            >
                <option value="">Select Category</option>
                <option value="Rent">Rent</option>
                <option value="Groceries">Groceries</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Other">Other</option>
            </select>
            <input 
            type ="text"
            placeholder="note (optional)"
            value = {note}
            onChange={e => setNote(e.target.value)}
            className= "w-full p-2 border rounded bg-white text-gray-900"
            />
            <button type= "submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Add Expense</button>
        </form>
    </Card>
  );
};

export default ExpenseForm