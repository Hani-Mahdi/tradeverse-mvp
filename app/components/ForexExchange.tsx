'use client'

import React, {useState, useEffect} from 'react'
import LineCharts from './LineCharts'


const ForexExchange = () => {

    const [rates, setRates] = useState(null);
    const [objectKeys, setObjectKeys] = useState<string[]>(["Default"])
    const [from, setFrom] = useState('USD')
    const [to, setTo] = useState('USD')
    const [amount, setAmount] = useState(0.01)
    const [yeld, setYeld] = useState(0.01)
    const [toGraph, setToGraph] = useState({})
    const [fromGraph, setFromGraph] = useState({})

    useEffect(() => {
        async function fetchRates() {
            try {
            const res = await fetch("/api/rates");
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            
            const data = await res.json();
            setRates(data.rates);
            } catch (err) {
            console.error('Fetch error:', err);
            }
        }
        fetchRates();
    }, []);

    useEffect(()=>{
        async function fetchGraphs(){
            try {
                const graphRes = await fetch(`/api/charts/?to=${to}&from=${from}`);
                if (!graphRes.ok) throw new Error(`HTTP ERROR! status: ${graphRes.status}`);

                const graphData = await graphRes.json();
                
                console.log(graphData);
                setToGraph(graphData.to.rates)
                setFromGraph(graphData.from.rates)
            } catch (err) {
                console.error('Ferch error:', err);
            }
        }
        fetchGraphs();
    }, [from, to])

    useEffect(() => {
        rates ? setObjectKeys(Object.keys(rates)) : setObjectKeys([]);
        console.log(rates)

    }, [rates]);

    useEffect(()=>{
        if (rates){
            const exchange = Math.round(((rates[from]*amount)/rates[to])*100)/100;
            setYeld(exchange)
        }
    },[from, to, amount])

  return (
    <>
    <div className='w-screen px-10 mb-10 h-160 gradient-bg grid md:grid-cols-3 grid-cols-1 rounded-[75px]'>
        <div className='h-full py-10'>
        <img src="../forex.svg" className='w-20 mx-auto my-3 invert'/>
            <h1 className='text-center text-4xl font-bold text-white'>Exchange Rates</h1>
        <div className='text-2xl md:text-3xl text-white m-auto md:mt-20 md:ml-15'>
           <div className='w-1/2 rounded-full border-[#9A9A9A] border-4 p-3 flex flex-row items-center justify-start my-10'>
            <h1>To:</h1>
            <select value={to} onChange={(e)=>(setTo(e.target.value))} className='w-30 h-7 ml-10 border-2 border-[#9A9A9A] text-md'>
                {objectKeys.map((item: string) => (
                    <option key={item} 
                    className='text-black text-sm'>
                        {item}
                    </option>
                ))}
            </select>
            </div>
            <div className='flex flex-row justify-start w-3/5 rounded-full items-center border-[#9A9A9A] border-4 p-3'>
            <h1>From:</h1>
            <select value={from} onChange={(e)=>(setFrom(e.target.value))} className='w-30 h-7 ml-10 border-2 text-md border-[#9A9A9A]'>
                {objectKeys.map((item: string) => (
                    <option key={item} 
                    className='text-black text-sm'>
                        {item}
                    </option>
                ))}
            </select>
            </div>
            <div className='w-full flex flex-row items-center justify-start items-center my-10'>
                <h1>Amount: </h1>
                <input className='w-1/6 h-7 text- text-xl h-3/4 mx-5 py-4 text-center border-2 border-[#9A9A9A]' value={amount} onChange={(e)=>{setAmount(Number(e.target.value))}} type="number" placeholder="00.00" step={0.1} min={0}>
                </input>
            </div>
            <div className='w-full flex flex-row justify-start items-center'>
            <h1>Exchange Amount: </h1>
             <input className='w-1/6 h-7 text- text-xl h-3/4 mx-5 py-4 text-center border-2 border-[#9A9A9A]' value={yeld} onChange={(e)=>{setYeld(Number(e.target.value))}} type="number"  step={0.1} min={0}>
            </input>
            </div>
            </div>    
        </div>
        <div className='invisible md:visible'>
            {/* "TO" Currency Name */}
            <LineCharts dataChart={toGraph} cur={to}/>
        </div>
        <div className='invisible md:visible'>
            <LineCharts dataChart={fromGraph} cur={from}/>
            {/* Currency Graph */}
        </div>
        

    </div>
    </>
  )
}

export default ForexExchange

export const validGraphCurrencies = [
      'AUD','BGN','BRL','CAD','CHF','CNY','CZK','DKK','EUR','GBP',
      'HKD','HUF','IDR','ILS','INR','ISK','JPY','KRW','MXN','MYR',
      'NOK','NZD','PHP','PLN','RON','SEK','SGD','THB','TRY','ZAR','USD'
    ];