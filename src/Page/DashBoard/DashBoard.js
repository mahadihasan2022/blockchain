import React from 'react';
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, Tooltip, XAxis, YAxis } from "recharts";

const DashBoard = () => {

    const data = [
        {
          month: "Jun 21",
          investment: 11.5,
          amount: 2.5,
        },
        {
          month: "Feb 21",
          investment: 11,
          amount: 5,
        },
        {
          month: "March 21",
          investment: 22.5,
          amount: 7.5,
        },
        {
          month: "april 21",
          investment: 17,
          amount: 10,
        },
        {
          month: "may 21",
          investment: 13,
          amount: 12.5,
        },
        {
          month: "Jun 21",
          investment: 18,
          amount: 15,
        },
        {
          month: "Jul 21",
          investment: 2.5,
          amount: 17.5,
        },
        {
          month: "Aug 21",
          investment: 7.5,
          amount: 20,
        },
        {
          month: "Sep 21",
          investment: 15,
          amount: 22.5,
        },
        {
          month: "Oct 21",
          investment: 23,
          amount: 25,

        },
        {
          month: "Nov 21",
          investment: 23.5,
          amount: 27.5,

        },
        {
          month: "Dec 21",
          investment: 16,
          amount: 30,

        },
        {
          month: "Jan 21",
          investment: 15,
          amount: 32.5,

        },
      ];
      const plamOil = [
        { name: 'Indonesia', value: 7020 },
        { name: 'Malaysia', value: 1261 },
        { name: 'singapore', value: 591 },
        { name: 'Others', value: 146 },
      ];
      const soybeanOil = [
        { name: 'Argentina', value: 4147 },
        { name: 'Switzerland', value: 254 },
        { name: 'Paraguay', value: 382 },
        { name: 'Brazil', value: 564 },
        { name: 'Others', value: 366 },
      ];
      const COLORS = ['#0088FE', '#4338ca', '#FFBB28', '#FF8042', '#e11d48'];
     
      

    return (
     <div className='m-2'>
         <div className='bg-white'>
<BarChart width={1200} height={550} data={data}>
    <XAxis dataKey="month" stroke="black" />
    <YAxis dataKey="amount" stroke="black" />
    <Tooltip wrapperStyle={{ width: 150, backgroundColor: '#ccc' }} />
    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#94a3b8', border: '2px solid black', borderRadius: 3, lineHeight: '30px' }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="investment" fill="#064e3b" barSize={60} />
  </BarChart>

      </div>
      <div className='grid grid-cols-2 gap-4'>
        <div>
        <h1 className='text-center font-bold text-3xl'>Plam Oil</h1>

        <PieChart width={600} height={400}>
        <Tooltip wrapperStyle={{ width: 150, backgroundColor: '#ccc' }} />
    <Legend width={100} wrapperStyle={{ top: 10, right: 20, backgroundColor: '#14b8a6', border: '2px solid black', borderRadius: 3, lineHeight: '30px' }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Pie
            data={plamOil}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        </div>
        <div>
        <h1 className='text-center font-bold text-3xl'>SoyBean Oil</h1>

        <PieChart width={600} height={400}>
        <Tooltip wrapperStyle={{ width: 150, backgroundColor: '#ccc' }} />
    <Legend width={100} wrapperStyle={{ top: 10, right: 20, backgroundColor: '#94a3b8', border: '2px solid black', borderRadius: 3, lineHeight: '30px' }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Pie
            data={soybeanOil}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        </div>

      </div>
     </div>
    );
};

export default DashBoard;