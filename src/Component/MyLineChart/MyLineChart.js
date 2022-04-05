import React from 'react';
import { Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const myLineChart = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='flex p-6'>
            <div className='flex-1 '>
                <h1 className='text-xl font-bold my-6 text-left pl-40 text-blue-500'>
                    MONTH WISE SELL
                </h1>
                <LineChart width={500} height={500} data={data}>
                    <Line dataKey={'sell'}></Line>
                    <XAxis dataKey={'month'}></XAxis>
                    <Tooltip></Tooltip>
                    <YAxis></YAxis>
                </LineChart>
            </div>
            <div className='flex-1'>
                <h1 className='text-xl font-bold my-6 text-left pl-40 text-blue-500'>
                    INVESTMENT VS REVENUE
                </h1>
                <PieChart width={500} height={500}>
                    <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                    <Tooltip></Tooltip>
                </PieChart>
            </div>
        </div>
    );
};

export default myLineChart;