export const enUserTypes = {
    retail: 1,
    wholesaler: 2,
}

export const enAuthReqType = {
    signin: 1,
    signup: 2,
    forgeotPassword: 3,
    resetPassword: 4,
    signout: 5,
    me: 6,
}

export const enProductsReqType = {
    addProduct: 1,
    editProduct: 2,
    deleteProducts: 3,
    getProducts: 4,
    getSingleProduct: 5,
}

export const enCatalogueReqTyoe = {
    createCatalogue: 1,
    editCatalogue: 2,
    deleteCatalogue: 3,
    getCatalogues: 4
}

export const enUserReqType = {
    getUserDetails: 1,
    editUserDetails: 2,
    getUserStats: 3
}

export const enAuthUserType = {
    SUPER_ADMIN: "SUPER_ADMIN",
    GLOBAL_ADMIN: "GLOBAL_ADMIN",
    TENANT_ADMIN: "TENANT_ADMIN",
    TENANT_PUBLIC: "TENANT_PUBLIC",
    PUBLIC: "PUBLIC"
}

export function getGeoLocation() {
    return new Promise((res, rej) => {
        if (!navigator.geolocation) {
            return rej("Geolocation not supported by this browser!");
        }
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords
            res({ lat: latitude, lng: longitude })
        },
            (err) => rej(err))
    })
}