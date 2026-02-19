'use client';

import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Card from '@/components/Card';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { addTransaction } from '@/features/transactions/transactionSlice';

const IncomeForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
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
      }),
    );

    setAmount('');
    setCategory('');
    setNote('');
  };

  return (
    <Card title="Add Income" subtitle="Track salary, freelance, and more">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full rounded-lg border border-white/10 bg-slate-800 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
          required
        />
        <select
          title="income_category_selector"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-lg border border-white/10 bg-slate-800 px-3 py-2 text-slate-100 focus:border-cyan-400 focus:outline-none"
          required
        >
          <option value="">Select Category</option>
          <option value="Salary">Salary</option>
          <option value="Freelance">Freelance</option>
          <option value="Investments">Investments</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="text"
          placeholder="Note (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full rounded-lg border border-white/10 bg-slate-800 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
        />
        <button
          type="submit"
          className="w-full rounded-lg bg-emerald-500 px-4 py-2 font-medium text-slate-950 transition hover:bg-emerald-400"
        >
          Add Income
        </button>
      </form>
    </Card>
  );
};

export default IncomeForm;
