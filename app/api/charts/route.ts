import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const today = new Date();
    const dateString = today.toISOString().slice(0, 10);

    const oneMonthAgo = new Date(today);
    oneMonthAgo.setMonth(today.getMonth() - 1);
    const monthAgo = oneMonthAgo.toISOString().slice(0, 10);

    const dateRange = monthAgo + ".." + dateString;

    const from = searchParams.get('from');
    const to = searchParams.get('to');

    const fromCurr = from || 'USD';
    const toCurr = to || 'USD';

    if (!fromCurr || !toCurr) {
      return NextResponse.json({ error: 'Invalid currencies' }, { status: 400 });
    }

    if (fromCurr === toCurr) {
      const res = await fetch(`https://api.frankfurter.dev/v1/${dateRange}?base=USD&symbols=${toCurr}`);
      if (!res.ok) throw new Error(`Failed to fetch data: ${res.status}`);
      const data = await res.json();
      return NextResponse.json(data);
    } else {
      const [graphFromRes, graphToRes] = await Promise.all([
        fetch(`https://api.frankfurter.dev/v1/${dateRange}?base=USD&symbols=${fromCurr}`),
        fetch(`https://api.frankfurter.dev/v1/${dateRange}?base=USD&symbols=${toCurr}`)
      ]);

      if (!graphFromRes.ok) throw new Error(`Failed to fetch from-currency data: ${graphFromRes.status}`);
      if (!graphToRes.ok) throw new Error(`Failed to fetch to-currency data: ${graphToRes.status}`);

      const dataFrom = await graphFromRes.json();
      const dataTo = await graphToRes.json();

      return NextResponse.json({ from: dataFrom, to: dataTo });
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
