import { UserServices } from "@/lib/services/UsersServices";
import { enUserReqType } from "@/lib/utils";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUsersStatsStore = create(persist((set) => ({
    loading: false,
    error: null,
    stats: {},
    getUserStats: async (owner_id) => {
        console.log(owner_id)
        set({ loading: true, error: null });
        try {
            const res = await UserServices(enUserReqType.getUserStats, "", { owner_id })
            set({ stats: res.stats })
            return res
        } catch (error) {
            const err =
                error?.response?.data ||
                { status: "fail", message: "Something went wrong" };
            set({ error: err });
            return err;
        } finally {
            set({ loading: false });
        }
    }
}), {
    name: "user-stats"
}))