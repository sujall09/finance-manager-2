import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

function DashboardCharts() {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <div className='w-full px-6 py-6 flex flex-col gap-6 rounded-xl border-0 shadow-sm bg-white'>
            <div className='flex flex-col gap-1.5'>
                <h4 className='leading-none text-gray-900'>Monthly Trends</h4>
                <p className='text-gray-600'>Income vs Expenses over the last 6 months</p>
            </div>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" />
                    {/* <YAxis yAxisId="right" orientation="right" /> */}
                    <Tooltip />
                    {/* <Legend /> */}
                    <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#059669" activeDot={{ r: 8 }} />
                    <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#dc2626" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default DashboardCharts
