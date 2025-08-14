'use client'
import React from 'react';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis } from 'recharts';


interface chartData{
    dataChart: any;
}

const LineChart = ({dataChart}: chartData) => {
  return (
    <>
    <div className="text-white flex items-center justify-center h-full w-full">
      <ResponsiveContainer width="100%" height="50%">
        <AreaChart height={200} data={[{CAD: 10}]}>
        <XAxis dataKey="date" />
        <YAxis />
        <Area dataKey="CAD"/>
        </AreaChart>
        </ResponsiveContainer>
    </div>
    </>
  )
}

export default LineChart