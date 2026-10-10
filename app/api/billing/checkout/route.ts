import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ error: "Checkout is not configured yet. FORGE has not charged you." }, { status: 501, headers: { "Cache-Control": "no-store" } });
}
