import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const today = new Date();
    const dateString = today.toISOString().slice(0, 10);

    const oneMonthAgo = new Date(today);
    oneMonthAgo.setMonth(today.getMonth() - 1);
    const monthAgo = oneMonthAgo.toISOString().slice(0, 10);

    const dateRange = `${monthAgo}..${dateString}`;

    const fromCurr = (searchParams.get('from') || 'USD').toUpperCase();
    const toCurr = (searchParams.get('to') || 'USD').toUpperCase();

    const validCurrencies = [
      'AUD','BGN','BRL','CAD','CHF','CNY','CZK','DKK','EUR','GBP',
      'HKD','HUF','IDR','ILS','INR','ISK','JPY','KRW','MXN','MYR',
      'NOK','NZD','PHP','PLN','RON','SEK','SGD','THB','TRY','ZAR','USD'
    ];

    const fromValid = validCurrencies.includes(fromCurr);
    const toValid = validCurrencies.includes(toCurr);

    if (!fromValid && !toValid) {
      return NextResponse.json({ from: {}, to: {} });
    }

    if (!fromValid) {
      const resTo = toValid
        ? await fetch(`https://api.frankfurter.dev/v1/${dateRange}?base=USD&symbols=${toCurr}`)
        : null;
      const dataTo = resTo ? await resTo.json() : {};
      return NextResponse.json({ from: {}, to: dataTo });
    }

    if (!toValid) {
      const resFrom = fromValid
        ? await fetch(`https://api.frankfurter.dev/v1/${dateRange}?base=USD&symbols=${fromCurr}`)
        : null;
      const dataFrom = resFrom ? await resFrom.json() : {};
      return NextResponse.json({ from: dataFrom, to: {} });
    }

    if (fromCurr === toCurr) {
      const res = await fetch(`https://api.frankfurter.dev/v1/${dateRange}?base=USD&symbols=${toCurr}`);
      const data = await res.json();
      return NextResponse.json({ from: data, to: data });
    }

    if (fromCurr === 'USD') {
      const resTo = await fetch(`https://api.frankfurter.dev/v1/${dateRange}?base=USD&symbols=${toCurr}`);
      const dataTo = await resTo.json();
      return NextResponse.json({ from: {}, to: dataTo });
    }

    if (toCurr === 'USD') {
      const resFrom = await fetch(`https://api.frankfurter.dev/v1/${dateRange}?base=USD&symbols=${fromCurr}`);
      const dataFrom = await resFrom.json();
      return NextResponse.json({ from: dataFrom, to: {} });
    }

    const [graphFromRes, graphToRes] = await Promise.all([
      fetch(`https://api.frankfurter.dev/v1/${dateRange}?base=USD&symbols=${fromCurr}`),
      fetch(`https://api.frankfurter.dev/v1/${dateRange}?base=USD&symbols=${toCurr}`)
    ]);

    const dataFrom = await graphFromRes.json();
    const dataTo = await graphToRes.json();

    return NextResponse.json({ from: dataFrom, to: dataTo });

  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
