import { CatalogueServices } from "@/lib/services/CatalogueServices";
import { enCatalogueReqTyoe } from "@/lib/utils";
import { create } from "zustand";

export const useCatalogueStore = create((set, get) => ({
    loading: {
        getCatalogues: false,
        createCatalogue: false,
        editCatalogue: false,
        deleteCatalogue: false
    },
    deleteCatalogueId: null,
    error: null,
    catalogues: [],
    createCatalogue: async (data) => {
        set((state) => ({ loading: { ...state.loading, createCatalogue: true }, error: null }));
        try {
            const res = await CatalogueServices(enCatalogueReqTyoe.createCatalogue, "", data);
            if (res.status == "success") {
                const prevCats = get().catalogues
                set({ catlogues: [...prevCats, res.data] })
            }
            return res;
        } catch (error) {
            console.log(error)
            const err =
                error?.response?.data ||
                { status: "fail", message: "Something went wrong" };
            set((state) => ({ loading: { ...state.loading, createCatalogue: false }, error: err }));
            return err;
        } finally {
            set((state) => ({ loading: { ...state.loading, createCatalogue: false } }));
        }
    },
    getCatalogues: async (params) => {
        set((state) => ({ loading: { ...state.loading, getCatalogues: true }, error: null }));
        try {
            const res = await CatalogueServices(
                enCatalogueReqTyoe.getCatalogues,
                params
            );
            if (res.code === "ERR_NETWORK") {
                return { status: "fail", message: res.message || "Netwrok Error!" }
            }
            if (res.status === "success") {
                set({ catalogues: res?.data?.catalogues || [] });
            }
            return { catalogues: res?.data?.catalogues || [], status: res.status, message: res.message };
        } catch (error) {
            const err =
                error?.response?.data ||
                { status: "fail", message: "Something went wrong" };

            set({ error: err });
            return err;
        } finally {
            set((state) => ({ loading: { ...state.loading, getCatalogues: false } }));
        }
    },
    editCatalogue: async (body) => {
        set((state) => ({ loading: { ...state.loading, editCatalogue: true }, error: null }))
        try {
            const res = await CatalogueServices(enCatalogueReqTyoe.editCatalogue, "", body)
            if (res.status === "success") {
                set((state) => ({
                    catalogues: state.catalogues.map((cat) =>
                        cat.catalogue_id === res.catalogue_id ? res.catalogue : cat
                    )
                }))
            }
            return { status: res.status, message: res.message }
        } catch (error) {
            const err = error?.response?.data || { statue: "fail", message: "Something went wrong" }
            set({ error: err })
            return err
        } finally {
            set((state) => ({ loading: { ...state.loading, editCatalogue: false } }))
        }
    },
    deleteCatalogue: async (reqBody) => {
        try {
            set((state) => ({ loading: { ...state.loading, deleteCatalogue: true }, deleteCatalogueId: reqBody.catalogue_id }))
            const res = await CatalogueServices(enCatalogueReqTyoe.deleteCatalogue, "", reqBody)
            if (res.status === "success") {
                set((state) => state.catalogues.filter((cat) => cat.id !== res.catalogue_id))
            }
            return { status: res.status, message: res.message }
        } catch (error) {
            const err = error?.response?.data || { statue: "fail", message: "Something went wrong" }
            set({ error: err })
            return err
        } finally {
            set((state) => ({ loading: { ...state.loading, deleteCatalogue: false }, deleteCatalogueId: null }))
        }
    }
}));
