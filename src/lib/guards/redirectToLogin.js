import { NextResponse } from "next/server";
import { enAuthUserType } from "../utils";

export function redirectToLogin(req, route) {
    const { origin, pathname, search } = req.nextUrl;
    const redirectPath = `${pathname}${search || ""}`

    if (route.type === enAuthUserType.GLOBAL_ADMIN) {
        return NextResponse.redirect(
            `${origin}/auth?redirect=${encodeURIComponent(redirectPath)}`
        )
    }

    if (route.type === enAuthUserType.TENANT_ADMIN && route.slug) {
        return NextResponse.redirect(
            `${origin}/auth?redirect=${encodeURIComponent(redirectPath)}`
        )
    }

    return NextResponse.redirect(
        `${origin}/auth?redirect=${encodeURIComponent(redirectPath)}`
    );
}