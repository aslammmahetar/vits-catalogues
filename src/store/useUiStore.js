import { create } from "zustand";

export const useUiStore = create((set, get) => ({
    globalLoading: false,
    loadingText: "Loading, Please wait...",
    showLoader: (text) => set({ globalLoading: true, loadingText: text && get().loadingText }),
    hideLoader: () => set({ globalLoading: false }),
}));
