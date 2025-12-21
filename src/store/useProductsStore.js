import { ProductsServices } from "@/lib/services/ProductsServices";
import { enProductsReqType } from "@/lib/utils";
import { create } from "zustand";

export const useProductsStore = create(
    (set) => ({
        loading: null,
        addProducts: async (reqBody) => {
            set({ loading: true })
            console.log(reqBody)
            const addProduct = await ProductsServices(enProductsReqType.addProduct, "", reqBody)
            set({ loading: false })
            return addProduct
        }
    })
)