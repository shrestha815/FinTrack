'use client';

import React from 'react'
import { useAppSelector } from '@/hooks/useAppSelector';
import { Transaction } from '@/types/transaction';
import Card from '@/components/Card'
import IncomeForm from '../income/IncomeForm'
import ExpenseForm from '../income/ExpenseForm';

const Dashboard = () => {
    const transactions = useAppSelector(state => state.transactions.transactions);
    console.log('Redux Transactions:', transactions);

    const income  = transactions.filter(tx => tx.type === 'income');
    const expense = transactions.filter(tx => tx.type === 'expense');

    //totals
    const totalIncome = income.reduce((acc,tx) => acc + tx.amount,0);
    const totalExpenses = expense.reduce((acc,tx) => acc + tx.amount,0);
    const net = totalIncome - totalExpenses;

    const formatCurrency = (amount: number) => 
        new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(amount);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <Card title="Summary">
            <p>Total Income: {formatCurrency(totalIncome)}</p>
            <p>Total Expenses: {formatCurrency(totalExpenses)}</p>
            <p>Net: {formatCurrency(net)}</p>
        </Card>

        <Card title="Recent Income">
            {income.length === 0 ? (
                <p>No Income Entires yet</p>
            ):(
                <ul className="space-y-2">
                    {income.slice(-3).reverse().map((tx: Transaction) =>(
                        <li key= {tx.id} className="flex justify-between text-green-700">
                            <span>{tx.category}</span>
                            <span>{formatCurrency(tx.amount)}</span>
                        </li>
                    ))}
                </ul>
            )}
        </Card>

        <Card title="Recent Expenses">
            {income.length === 0 ? (
                <p>No Income Entires yet</p>
            ):(
                <ul className="space-y-2">
                    {expense.slice(-3).reverse().map((tx: Transaction) =>(
                        <li key= {tx.id} className="flex justify-between text-red-700">
                            <span>{tx.category}</span>
                            <span>{formatCurrency(tx.amount)}</span>
                        </li>
                    ))}
                </ul>
            )}
        </Card>

        <Card title="Savings Goals">
            <p>No goals created yet.</p>
        </Card>

        <Card title="Spending Overview">
            <p>Chart goes here.</p>
        </Card>

        <IncomeForm/>
        <ExpenseForm/>
    </div>
  )
}

export default Dashboard