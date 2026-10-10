import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ error: "Billing management is not configured yet." }, { status: 501, headers: { "Cache-Control": "no-store" } });
}
