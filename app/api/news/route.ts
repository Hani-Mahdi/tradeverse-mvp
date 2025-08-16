import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest){
    const apiKey = process.env.FINNHUB_API_KEY;
    const {searchParams} = new URL(request.url);

    const category = searchParams.get("category") || "general";

    if (!apiKey) return NextResponse.json({error: "Api key not found"}, {status:500});
    const res = await fetch(`https://finnhub.io/api/v1/news?category=${category}&token=${apiKey}`);

    if (!res.ok) return NextResponse.json({error: "Fetch Failed"}, {status: res.status});
    const news = await res.json();

    return NextResponse.json(news)

}