import { NextResponse } from "next/server";
import { unverifiedFreeStatus } from "../../../../lib/plans";

export const dynamic = "force-dynamic";

export async function GET() {
  // Replace this fallback with a verified billing-provider lookup once accounts exist.
  return NextResponse.json({ status: unverifiedFreeStatus() }, { headers: { "Cache-Control": "no-store" } });
}
