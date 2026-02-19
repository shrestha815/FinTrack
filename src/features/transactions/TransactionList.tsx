import Card from '@/components/Card';
import { useAppSelector } from '@/hooks/useAppSelector';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

const TransactionList = () => {
  const transactions = useAppSelector((state) => state.transactions.transactions);

  return (
    <Card title="All Transactions" subtitle="Latest activity across income and expenses">
      {transactions.length === 0 ? (
        <p className="text-sm text-slate-400">No transactions yet. Add income or expenses to get started.</p>
      ) : (
        <ul className="space-y-2">
          {[...transactions].reverse().slice(0, 8).map((transaction) => (
            <li
              key={transaction.id}
              className="flex items-center justify-between rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2"
            >
              <div>
                <p className="text-sm font-medium text-slate-100">{transaction.category}</p>
                <p className="text-xs text-slate-400">{new Date(transaction.date).toLocaleDateString()}</p>
              </div>
              <span
                className={`text-sm font-semibold ${
                  transaction.type === 'income' ? 'text-emerald-300' : 'text-rose-300'
                }`}
              >
                {transaction.type === 'income' ? '+' : '-'}
                {currencyFormatter.format(transaction.amount)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default TransactionList;
