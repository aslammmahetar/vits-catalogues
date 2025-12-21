import { enProductsReqType } from "../utils"
import axios from "@/lib/axios"
export const ProductsServices = async (reqType, params, reqBody, authData) => {
    const mainRoute = "/products/"
    const headerConfig = { headers: { Authorization: `Bearer ${authData}` } }
    const formDataHeaderConfig = { headers: { "Content-Type": "multipart/form-data", }, withCredentials: true, }
    if (reqType === enProductsReqType.addProduct) {
        const postProduct = await axios.post(`${mainRoute}postProduct`, reqBody, formDataHeaderConfig);
        return postProduct.data;
    }
}