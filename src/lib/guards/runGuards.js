import { NextResponse } from "next/server";
import { enAuthUserType } from "../utils";
import { authenticate } from "./authenticate";
import { authorizeTenantAdmin } from "./authorizeTenantAdmin";
import { validateTenant } from "./validateTenant";
import { log } from "./log";

export async function runGuards(req, route) {
    log("START", {
        pathname: req.nextUrl.pathname,
        routeType: route.type,
        slug: route.slug ?? "none",
    })

    // 1️⃣ Tenant Validation
    if (route.slug) {
        log("VALIDATING TENANT", route.slug)

        const tenant = await validateTenant(route.slug)

        if (!tenant.ok) {
            log("TENANT VALIDATION FAILED")
            return tenant.response
        }

        log("TENANT VALID", tenant.data)
        req.tenant = tenant.data
    } else {
        log("NO TENANT VALIDATION NEEDED")
    }

    // 2️⃣ Authentication
    if (
        route.type === enAuthUserType.GLOBAL_ADMIN ||
        route.type === enAuthUserType.TENANT_ADMIN
    ) {
        log("AUTHENTICATION REQUIRED")

        const auth = await authenticate(req, route)

        if (!auth.ok) {
            log("AUTH FAILED")
            return auth.response
        }

        log("AUTH SUCCESS", { userId: auth.user.id })
        req.user = auth.user
    } else {
        log("AUTH NOT REQUIRED")
    }

    // 3️⃣ Authorization
    if (route.type === enAuthUserType.TENANT_ADMIN) {
        log("TENANT AUTHORIZATION CHECK")

        const authz = authorizeTenantAdmin(req.user, req.tenant)

        if (!authz.ok) {
            log("AUTHORIZATION FAILED")
            return authz.response
        }

        log("AUTHORIZATION PASSED")
    }

    log("ACCESS GRANTED")
    return NextResponse.next()
}
