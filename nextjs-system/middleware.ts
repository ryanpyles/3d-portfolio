import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const isFormaetrix =
    host.includes("formaetrix") ||
    request.nextUrl.searchParams.get("domain") === "formaetrix";

  if (isFormaetrix) {
    const url = request.nextUrl.clone();
    if (!url.pathname.startsWith("/formaetrix")) {
      url.pathname = "/formaetrix" + url.pathname;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.png|.*\\.ico).*)"],
};
