import { NextResponse } from "next/server";

export const dynamic = "force-static";
export async function GET() {
	return NextResponse.json({
		message: "Hello from Next.js 15 API. Trigger run when this is changed",
	});
}
