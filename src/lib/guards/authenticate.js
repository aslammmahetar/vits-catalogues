import { verifyJwtEdge } from "../auth";
import { log } from "./log";
import { redirectToLogin } from "./redirectToLogin";

export async function authenticate(req, route) {
    log("authenticate()")

    const cookieName = process.env.COOKIE_NAME
    const token = req.cookies.get(cookieName)?.value

    if (!token) {
        log("NO TOKEN FOUND")
        return {
            ok: false,
            response: redirectToLogin(req.nextUrl.origin, route),
        }
    }

    log("TOKEN FOUND")

    const payload = await verifyJwtEdge(token)

    if (!payload) {
        log("JWT INVALID")
        return {
            ok: false,
            response: redirectToLogin(req.nextUrl.origin, route),
        }
    }

    log("JWT VALID", { userId: payload.id })
    return { ok: true, user: payload }
}
