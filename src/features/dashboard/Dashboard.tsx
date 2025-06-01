import React from 'react'
import Card from '@/components/Card'

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <Card title="Summary">
            <p>Total Income: $0</p>
            <p>Total Expenses: $0</p>
            <p>Net: $0</p>
        </Card>

        <Card title="Recent Income">
            <p>No income entries yet.</p>
        </Card>

        <Card title="Recent Expenses">
            <p>No expense entries yet.</p>
        </Card>

        <Card title="Savings Goals">
            <p>No goals created yet.</p>
        </Card>

        <Card title="Spending Overview">
            <p>Chart goes here.</p>
        </Card>
    </div>
  )
}

export default Dashboard