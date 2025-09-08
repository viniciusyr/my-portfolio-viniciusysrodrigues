import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const country = req.headers.get("x-vercel-ip-country") || "UNKNOWN";

  const res = NextResponse.next();
  res.cookies.set("user-country", country, { path: "/" });
  return res;
}