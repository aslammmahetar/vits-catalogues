// middleware.ts (root)
import { resolveRoute } from "@/lib/guards/resolveRoute";
import { runGuards } from "@/lib/guards/runGuards";
import { NextResponse } from "next/server"

export async function middleware(req) {
    const route = resolveRoute(req.nextUrl.pathname);

    // Public routes pass
    if (route.type === "PUBLIC" || route.type === "TENANT_PUBLIC") {
        return NextResponse.next();
    }

    return await runGuards(req, route);
}

export const config = {
    matcher: [
        "/admin/:path*",
        "/:slug/admin/:path*",
        "/:slug/catalogue/:path*",
    ],
};
