import {NextResponse, NextRequest} from "next/server"
import type { StockData } from "@/app/types/StockData"

export async function GET(request: NextRequest){
    const { searchParams } = new URL(request.url)
    const apiKey = process.env.FINNHUB_API_KEY
    const tickers = searchParams.getAll("ticker")
    const data: StockData[] = await Promise.all(
        tickers.map(async (item) => {
        try {
            const res = await fetch(`https://finnhub.io/api/v1/quote?symbol=${item}&token=${apiKey}`)
            if (!res.ok) {
                return { name: `error: ${res.status}`, c: 0, d: 0, dp: 0, h:0, l:0, o:0, pc:0, t:0 }
            }
            const dataUnit = await res.json()
            dataUnit.name = item
            return dataUnit
        } catch (err) {
            return { name: `error: fetch failed`, c: 0, d: 0, dp: 0, h:0, l:0, o:0, pc:0, t:0 }
        }
    })
)


    return NextResponse.json(data)

}