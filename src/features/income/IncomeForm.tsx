'use client';
import React, { useState } from 'react'
import Card from '@/components/Card';
import {v4 as uuid} from 'uuid';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { addTransaction } from '@/features/transactions/transactionSlice';

const IncomeForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [note, setNote] = useState('');

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        if (!amount || !category) return;

        dispatch(
            addTransaction({
                id: uuid(),
                type: 'income',
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
    <Card title="Add Income">
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            className="w-full p-2 border rounded"
            required
            />
            <input 
            type ="text"
            placeholder="note (optional)"
            value = {note}
            onChange={e => setNote(e.target.value)}
            className= "w-full p-2 border rounded"
            />
            <button type= "submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Add Income</button>
        </form>
    </Card>
  );
};

export default IncomeForm