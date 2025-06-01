import { useAppSelector } from '@/hooks/useAppSelector';
import Card from '@/components/Card';

const TransactionList = () => {
  const transactions = useAppSelector(state => state.transactions.transactions);

  return (
    <Card title="All Transactions">
      <ul className="divide-y divide-gray-300 dark:divide-gray-700">
        {transactions.map(t => (
          <li key={t.id} className="py-2">
            <strong>{t.type.toUpperCase()}</strong> • ${t.amount} • {t.category}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default TransactionList;
