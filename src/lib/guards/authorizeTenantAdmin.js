import { NextResponse } from "next/server";
import { log } from "./log";

export function authorizeTenantAdmin(user, tenant) {
    log("authorizeTenantAdmin()", {
        userId: user?.id,
        ownerId: tenant?.owner_id,
    })

    if (user.id !== tenant.owner_id) {
        log("OWNER MISMATCH")
        return {
            ok: false,
            response: NextResponse.redirect("/403"),
        }
    }

    log("OWNER MATCH")
    return { ok: true }
}
