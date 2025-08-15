'use client'
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label} from 'recharts';
import { validGraphCurrencies } from './ForexExchange';


interface chartData{
    dataChart: any;
    cur: string;
}

const LineCharts = ({dataChart, cur}: chartData) => {
  const formatData = []
  let monthMargin;

  if (dataChart && cur){

    const dates = Object.keys(dataChart);

    if (dataChart && dates.length){
      monthMargin = (((dataChart[dates[dates.length - 1]][cur] - dataChart[dates[0]][cur])/dataChart[dates[0]][cur])*100).toFixed(2)
    } else {
      monthMargin = "err"
    }

    let i = 0;
    for (i=0; i<dates.length; i++){
      formatData.push(
        {
          x: dates[i],
          y: dataChart[dates[i]][cur]
        }
      )
    }

  }




  return (
    <>
    <div className="text-white text-md flex flex-col items-center justify-around h-full w-full">
      <div className='relative inset-0 z-10'>
        {
          cur == "USD" ?
          <h1 className='text-5xl text-white'>[ USD is the Base ]</h1>
          :
            validGraphCurrencies.includes(cur) ? 
            " "
            :
            <h1 className='text-5xl text-white'>[ No Data ]</h1> 
        }
      </div>
      <div className='flex flex-row items-center justify-center w-full'>
        <h1 className='text-4xl text-white'><span className='font-bold text-black rounded-md bg-white p-1 mx-2'>{cur}</span>Last 30 Days</h1>
        <div className='flex flex-row items-center justify-end mx-4'>
          {Number(monthMargin)>0 ? 
          <p className='text-2xl text-green-400 mr-1'>&#9650;</p> 
          : 
        <p className='text-2xl text-red-400 mr-1'>&#9660;</p>
        }
          <p>%{Math.abs(Number(monthMargin))}</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="50%">
        <LineChart height={220} data={formatData} margin={{left: 20, right:20}}
        style={
          {
          color:"white",
          fontSize: 12,
        }
        }>
        <XAxis stroke='#FFFFFF' dataKey="x" angle={-45} textAnchor="end" height={100} />
        <YAxis stroke='#FFFFFF' domain={[(dataMin) => (dataMin - dataMin*0.01), (dataMin) => (dataMin - dataMin*0.01)]} tickFormatter={(value)=>(value.toFixed(2))}>
          <Label angle={-90} position="insideLeft">
            {`${cur}/USD`}
          </Label>
        </YAxis>
        <Line dataKey="y" stroke='#FFFFFF' dot={false}/>
        </LineChart>
        </ResponsiveContainer>
    </div>
    </>
  )
}

export default LineCharts