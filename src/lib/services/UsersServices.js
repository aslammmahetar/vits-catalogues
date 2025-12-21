import { enUserReqType } from "../utils"
import axios from '@/lib/axios'

export const UserServices = async (reqType, params, reqBody, authData) => {
    const mainRoute = "/user/"
    const headerConfig = { headers: { Authorization: `Bearer ${authData}` } }
    const formDataHeaderConfig = { headers: { "Content-Type": "multipart/form-data", }, withCredentials: true, }
    if (reqType === enUserReqType.getUserStats) {
        const usersStats = await axios.post(`${mainRoute}getStats`, reqBody)
        return usersStats.data;
    }
}