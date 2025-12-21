import axios from "@/lib/axios"
import { enAuthReqType } from "../utils";

export async function AuthServices(reqType, params, reqBody, authData) {
    const mainRoute = "/auth"
    try {
        const headerConfig = { headers: { Authorization: `Bearer ${authData}` } }
        if (reqType === enAuthReqType.signup) {
            const register = await axios.post(`${mainRoute}/signup`, reqBody)
            return register.data;
        } else if (reqType === enAuthReqType.signin) {
            const login = await axios.post(`${mainRoute}/signin`, reqBody)
            return login.data;
        } else if (reqType === enAuthReqType.signout) {
            const logout = await axios.post(`${mainRoute}/signout`)
            return logout.data;
        } else if (reqType === enAuthReqType.me) {
            const me = await axios.get(`${mainRoute}/me?${params}`)
            return me.data;
        }
    } catch (error) {
        console.log(error)
        return error?.response?.data || error;
    }
}