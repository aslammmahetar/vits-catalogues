import { enAuthUserType } from "../utils"

export function resolveRoute(pathname) {
    const segments = pathname.split('/').filter(Boolean)

    // /admin (global admin)
    if (segments.length = 1 && segments[0] === "admin") {
        return { type: enAuthUserType.GLOBAL_ADMIN }
    }

    // /[slug]/admin
    if (segments.length >= 2 && segments[1] === "admin") {
        return { type: enAuthUserType.TENANT_ADMIN, slug: segments[0] }
    }

    // /[slug]/catalogue
    if (segments.length >= 2 && segments[1] === "catalogue") {
        return { type: "TENANT_PUBLIC", slug: segments[0] };
    }

    return { type: "PUBLIC" };
}