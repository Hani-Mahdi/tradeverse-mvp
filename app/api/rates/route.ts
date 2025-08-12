import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const apiKey = process.env.EXCHANGE_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'API key not found' }, { status: 500 });
  }

  const res = await fetch(`https://api.exchangerate-api.com/v4/latest/USD?apikey=${apiKey}`);
  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: res.status });
  }

  const data = await res.json();

  return NextResponse.json(data);
}
