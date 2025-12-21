import { AuthServices } from "@/lib/services/AuthServices";
import { enAuthReqType } from "@/lib/utils";
import { create } from "zustand";
import { persist } from "zustand/middleware"
import { useUiStore } from "./useUiStore";

export const useAuthStore = create(persist((set) => ({
    user: null,
    token: null,
    loading: null,

    signin: async (reqbody) => {
        set({ loading: true })
        const signin = await AuthServices(enAuthReqType.signin, "", reqbody, "")
        set({ user: signin.user, loading: false })
        if (signin.code == "ERR_NETWORK") {
            return { status: "fail", message: signin.message, }
        }
        return { status: signin.status, message: signin.message, user: signin.user }
    },

    signup: async (reqbody) => {
        set({ loading: true })
        const singup = await AuthServices(enAuthReqType.signup, "", reqbody, "")
        set({ loading: false })
        if (singup.code == "ERR_NETWORK") {
            return { status: "fail", message: singup.message, }
        } else {
            return { status: singup.status, message: singup.message }
        }
    },

    signout: async () => {
        set({ loading: true })
        const signout = await AuthServices(enAuthReqType.signout, "", "", "")
        set({ user: null, token: null, loading: null, })
        set({ loading: false })
        return { status: signout.status, message: signout.message }
    },
    me: async (params) => {
        useUiStore.getState().showLoader()
        const me = await AuthServices(enAuthReqType.me, params, "", "")
        useUiStore.getState().hideLoader()
        console.log(me)
        if (me.code == "ERR_NETWORK") {
            return { status: "fail", message: me.message, }
        }
        return { status: me.status, message: me.message }
    }
}), {
    name: "auth-store"
}))