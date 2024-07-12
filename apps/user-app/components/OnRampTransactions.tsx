import { Card } from "@repo/ui/card"

export const OnRampTransactions = ({
    transactions
}: {
    transactions: {
        time: Date,
        amount: number,
        status: string,
        provider: string
    }[]
}) => {
    if (!transactions.length) {
        return <Card title="Recent Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    }
    return <Card title="Recent Transactions">
        <div className="pt-2">
            {transactions.map(t => <div className="flex justify-between mb-2 px-2 bg-gray-200 rounded-md">
                <div>
                    <div className="text-sm">
                        Received INR
                    </div>
                    <div className="text-sm">
                        {t.provider}
                    </div>
                    <div className="text-slate-600 text-xs">
                        {t.time.toDateString()}
                    </div>
                </div>
                <div className="flex flex-col justify-center text-2xl">
                    + ₹ {t.amount / 100}
                </div>

            </div>)}
        </div>
    </Card>
}