'use client';

import React from 'react';
import Card from '@/components/Card';
import ExpenseForm from '../income/ExpenseForm';
import IncomeForm from '../income/IncomeForm';
import TransactionList from '../transactions/TransactionList';
import { useAppSelector } from '@/hooks/useAppSelector';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

const Dashboard = () => {
  const transactions = useAppSelector((state) => state.transactions.transactions);

  const income = transactions.filter((tx) => tx.type === 'income');
  const expense = transactions.filter((tx) => tx.type === 'expense');

  const totalIncome = income.reduce((acc, tx) => acc + tx.amount, 0);
  const totalExpenses = expense.reduce((acc, tx) => acc + tx.amount, 0);
  const net = totalIncome - totalExpenses;

  const expenseByCategory = expense.reduce<Record<string, number>>((acc, tx) => {
    acc[tx.category] = (acc[tx.category] ?? 0) + tx.amount;
    return acc;
  }, {});

  const topExpenseCategories = Object.entries(expenseByCategory)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 4);

  const summaryCards = [
    {
      title: 'Total Income',
      amount: totalIncome,
      accent: 'from-emerald-500/20 to-emerald-400/5 border-emerald-400/30',
    },
    {
      title: 'Total Expenses',
      amount: totalExpenses,
      accent: 'from-rose-500/20 to-rose-400/5 border-rose-400/30',
    },
    {
      title: 'Net Balance',
      amount: net,
      accent: net >= 0 ? 'from-cyan-500/20 to-cyan-400/5 border-cyan-400/30' : 'from-orange-500/20 to-orange-400/5 border-orange-400/30',
    },
  ];

  return (
    <div className="mx-auto grid w-full max-w-7xl gap-6 py-6">
      <section className="grid gap-4 md:grid-cols-3">
        {summaryCards.map((card) => (
          <Card key={card.title} className={`bg-gradient-to-br ${card.accent}`}>
            <p className="text-sm text-slate-300">{card.title}</p>
            <p className="mt-2 text-3xl font-semibold text-white">{currencyFormatter.format(card.amount)}</p>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          <TransactionList />
        </div>

        <div className="space-y-6">
          <Card title="Spending Breakdown" subtitle="Top categories this period">
            {topExpenseCategories.length === 0 ? (
              <p className="text-sm text-slate-400">Add expenses to populate your category insights.</p>
            ) : (
              <ul className="space-y-3">
                {topExpenseCategories.map(([category, amount]) => (
                  <li key={category} className="flex items-center justify-between rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2">
                    <span className="text-sm text-slate-200">{category}</span>
                    <span className="text-sm font-semibold text-rose-300">{currencyFormatter.format(amount)}</span>
                  </li>
                ))}
              </ul>
            )}
          </Card>

          <Card title="Cashflow Notes" subtitle="Quick guidance">
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Keep expenses below 70% of income for healthy monthly margin.</li>
              <li>• Review the top spending category each week and trim recurring costs.</li>
              <li>• Add notes to transactions to improve future budgeting decisions.</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <IncomeForm />
        <ExpenseForm />
      </section>
    </div>
  );
};

export default Dashboard;
