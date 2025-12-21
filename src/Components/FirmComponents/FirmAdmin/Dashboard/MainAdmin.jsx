"use client";

import React, { useEffect, useRef } from "react";
import Stats from "./Stats";
import QAB from "./QAB";
import { useUsersStatsStore } from "@/store/useUserStatsStore";
import { toast } from "react-hot-toast";
import { useAuthStore } from "@/store/useAuthStore";

const MainAdmin = ({ slug }) => {
  const user = useAuthStore((store) => store.user);
  const id = user?.id;
  const hasFetched = useRef(false);
  const getUserStats = useUsersStatsStore((store) => store.getUserStats);
  const getUserLatestStats = async () => {
    const toastId = toast.loading("Getting latest stats, please wait...");
    try {
      const res = await getUserStats(id);
      console.log(res);
      toast.dismiss(toastId);
      if (res.status === "fail" || res.status === "error") {
        toast.error(res.message);
      } else {
        toast.success(res.message);
      }
    } catch (err) {
      toast.dismiss(toastId);
      console.log(err);
      toast.error("Failed to fetch latest stats");
    }
  };

  useEffect(() => {
    if (!id || hasFetched.current) return;
    hasFetched.current = true;
    getUserLatestStats();
  }, [id]);
  return (
    <div className="min-h-screen">
      <div className="flex">
        <main className="flex-1 px-4 md:px-8 py-6">
          <Stats />
          <QAB slug={slug} />
          <div className="text-center text-xs text-gray-400 mt-6">
            Made with ❤️ for local businesses
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainAdmin;
