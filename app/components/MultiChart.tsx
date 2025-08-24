"use client"

import React, { useEffect, useState } from "react"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Label, Legend } from "recharts"
import { dateRange } from "./MarketPulse"

const MultiChart = () => {
  const watchList = ["IBM", "AAPL", "MSFT", "NVDA"]
  const apiKey = process.env.NEXT_PUBLIC_TWELVE_API_KEY
  const [marketData, setMarketData] = useState<any[]>([])

  useEffect(() => {
    if (!apiKey) {
      console.error("API Key Missing")
      return
    }

    const fetchData = async () => {
      const [from, to] = dateRange(3, true)

      const data = await Promise.all(
        watchList.map(async (item) => {
          try {
            const res = await fetch(
              `https://api.twelvedata.com/time_series?symbol=${item}&interval=1day&start_date=${from}&end_date=${to}&apikey=${apiKey}`
            )
            if (!res.ok) throw new Error("Fetch failed")
            const json = await res.json()
            return json.values
          } catch (err) {
            console.error(err)
            return []
          }
        })
      )

      setMarketData(data)
    }

    fetchData()
  }, [apiKey])

  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300"]

  const chartData = []
  if (marketData.length > 0) {
    const length = marketData[0].length
    for (let i = 0; i < length; i++) {
      const point: any = { date: marketData[0][i].datetime }
      for (let j = 0; j < marketData.length; j++) {
        point[watchList[j]] = marketData[j][i]?.close ?? null
      }
      chartData.push(point)
    }
  }

  return (
    <div style={{ width: "90%", height: 450 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <XAxis dataKey="date" angle={-45} textAnchor="end" height={100} />
          <YAxis>
            <Label value="USD" angle={-90} position="insideLeft" />
          </YAxis>
          {watchList.map((symbol, idx) => (
            <Line key={symbol} dot={false} dataKey={symbol} stroke={colors[idx]}>
            </Line>
          ))}
          <Legend verticalAlign="top"/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default MultiChart
