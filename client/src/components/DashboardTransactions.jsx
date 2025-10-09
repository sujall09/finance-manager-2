import { useState } from "react"

function DashboardTransactions() {
    const transactions = [
        {
            title: "Salary",
            type: "income",
            amount: 5000,
            date: "2024-01-15",
            description: "Monthly salary"
        },
        {
            title: "Rent",
            type: "expense",
            amount: 1200,
            date: "2024-01-15",
            description: "Monthly rent"
        },
        {
            title: "Groceries",
            type: "expense",
            amount: 120,
            date: "2024-01-14",
            description: "Weekly shopping"
        },
        {
            title: "Emergency Fund",
            type: "saving",
            amount: 500,
            date: "2024-01-13",
            description: "Monthly savings"
        },
        {
            title: "Freelance",
            type: "income",
            amount: 800,
            date: "2024-01-12",
            description: "Web development project"
        },
    ]

    const textColorMap = {
        income: "text-green-700",
        expense: "text-red-700",
        saving: "text-blue-700",
    };

    const bgColorMap = {
        income: "bg-green-100",
        expense: "bg-red-100",
        saving: "bg-blue-100",
    };

    return (
        <div className='w-full px-6 py-6 flex flex-col gap-6 rounded-xl border-0 shadow-sm bg-white'>
            <div className='flex flex-col gap-1.5'>
                <h4 className='leading-none text-gray-900'>Recent Transactions</h4>
                <p className='text-gray-600'>Your latest financial activity</p>
            </div>

            <div className='space-y-4'>
                {/* Transaction */}
                {
                    transactions.map(transaction => (
                        // Color based on transaction

                        <div className='flex items-center justify-between p-3 bg-gray-50 rounded-lg'>
                            <div className='flex-1'>
                                <div className='flex items-center gap-3 mb-1'>
                                    <span className='font-medium text-gray-900'>{transaction.title}</span>
                                    <span className={`inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap gap-1 overflow-hidden border-transparent ${bgColorMap[transaction.type || "bg-gray-100"]}  ${textColorMap[transaction.type || "text-gray-700"]}`}>
                                        {transaction.type}
                                    </span>
                                </div>
                                <div className='flex items-center gap-4 text-sm text-gray-600'>
                                    <span>{transaction.date}</span>
                                    <span>{transaction.description}</span>
                                </div>
                            </div>
                            <div className={`font-medium ${textColorMap[transaction.type || "text-gray-700"]}`}>${transaction.amount}</div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default DashboardTransactions
