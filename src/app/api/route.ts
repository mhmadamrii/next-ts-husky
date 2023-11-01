import { NextRequest, NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos?_limit=5"


export async function GET() {
    const res = await fetch(DATA_SOURCE_URL)
    const todos = await res.json()
    return NextResponse.json({ data: todos })
}

export async function POST(req: Request) {
    const body = req.json()

    return NextResponse.json({ data: body })
}
