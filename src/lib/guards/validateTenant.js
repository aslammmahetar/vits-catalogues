export async function validateTenant(slug) {
    log("validateTenant()", slug)

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_DEVELOPMENT_SERVICE_URL}/auth/me?slug=${slug}`,
            { method: "GET", cache: "no-cache" }
        )

        log("TENANT API STATUS", res.status)

        if (!res.ok) {
            log("TENANT API FAILED")
            return {
                ok: false,
                response: NextResponse.redirect("/auth"),
            }
        }

        const data = await res.json()
        log("TENANT API RESPONSE", data.status)

        if (data.status !== "success" || !data.user) {
            log("TENANT INVALID PAYLOAD")
            return {
                ok: false,
                response: NextResponse.redirect("/403"),
            }
        }

        if (data.user.slug !== slug) {
            log("SLUG MISMATCH", { expected: slug, got: data.user.slug })
            return {
                ok: false,
                response: NextResponse.redirect("/403"),
            }
        }

        if (data.user.status !== 1) {
            log("TENANT SUSPENDED")
            return {
                ok: false,
                response: NextResponse.redirect("/suspended"),
            }
        }

        log("TENANT OK")
        return {
            ok: true,
            data: {
                owner_id: data.user.id,
                slug: data.user.slug,
            },
        }
    } catch (error) {
        log("TENANT EXCEPTION", error.message)
        return {
            ok: false,
            response: NextResponse.redirect("/500"),
        }
    }
}
