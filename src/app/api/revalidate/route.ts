import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    const secret = process.env.SANITY_API_READ_TOKEN;

    // Optional token validation if SANITY_API_READ_TOKEN is set
    if (secret && authHeader !== `Bearer ${secret}`) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Revalidate all pages across the layout
    revalidatePath("/", "layout");

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      message: "Cache revalidated successfully",
    });
  } catch (err: any) {
    return NextResponse.json(
      { message: err?.message || "Revalidation failed" },
      { status: 500 }
    );
  }
}
