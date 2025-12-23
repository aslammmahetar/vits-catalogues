import { enCatalogueReqTyoe } from "../utils"
import axios from "@/lib/axios"

export const CatalogueServices = async (reqType, params, reqBody, authData) => {
    const mainRoute = "/catalogue/"
    const headerConfig = { headers: { Authorization: `Bearer ${authData}` } }
    try {
        const formDataHeaderConfig = { headers: { "Content-Type": "multipart/form-data", }, withCredentials: true, }
        if (reqType === enCatalogueReqTyoe.createCatalogue) {
            const createCatalogue = await axios.post(`${mainRoute}createCatalogue`, reqBody, formDataHeaderConfig)
            return createCatalogue.data;
        }
        else if (reqType === enCatalogueReqTyoe.getCatalogues) {
            const getCatalogues = await axios.get(`${mainRoute}getCatalogues?${params}`)
            return getCatalogues.data;
        }
        else if (reqType === enCatalogueReqTyoe.editCatalogue) {
            const editCatalogue = await axios.post(`${mainRoute}editCatalogue`, reqBody, formDataHeaderConfig)
            return editCatalogue.data;
        } else if (reqType === enCatalogueReqTyoe.deleteCatalogue) {
            const deleteCatalogue = await axios.post(`${mainRoute}deleteCatalogue`, reqBody)
            return deleteCatalogue.data;
        }
    } catch (error) {
        console.log(error)
        return error?.response?.data || error;
    }
}