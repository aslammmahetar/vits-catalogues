"use client";

import { useRouter } from "next/navigation";
import { Home, User, PlusCircle, Grid, ArrowRightCircle } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";

export default function BottomBar() {
  const router = useRouter();
  const user = useAuthStore((store) => store.user);
  const slug = user?.slug;

  // mobile bottom bar items
  const bottomItems = [
    { label: "Home", path: `/${slug}/admin`, icon: Home },
    { label: "Products", path: `/${slug}/admin/products`, icon: Grid },
    {
      label: "Add",
      path: `/${slug}/admin/addProducts`,
      icon: PlusCircle,
    },
    {
      label: "Orders",
      path: `/${slug}/admin/orders`,
      icon: ArrowRightCircle,
    },
    { label: "Profile", path: `/${slug}/admin/profile`, icon: User },
  ];
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40">
      <div className="bg-white border-t border-gray-200">
        <div className="flex items-center justify-around h-14">
          {bottomItems.map((it) => {
            const Icon = it.icon;
            return (
              <button
                key={it.label}
                onClick={() => router.push(it.path)}
                className="flex flex-col items-center justify-center text-xs text-gray-700"
              >
                <Icon className="w-5 h-5 text-[#008236]" />
                <span className="text-[10px]">{it.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
