// export { auth as middleware } from "@/auth";
import { auth } from "@/auth";
import type { NextFetchEvent, NextRequest } from "next/server";

export function middleware(request: NextRequest, event: NextFetchEvent) {
  if (!request.headers.has("x-forwarded-proto")) {
    request.headers.set("x-forwarded-proto", "http");
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return auth(request as any, event as any);
}

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
