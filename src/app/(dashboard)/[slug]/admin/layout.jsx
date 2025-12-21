"use client";
import GlobalLoader from "@/Components/Common/GlobalLoader";
import CmnHeader from "@/Components/FirmComponents/FirmAdmin/Dashboard/CmnHeader";
import CmnSideBar from "@/Components/FirmComponents/FirmAdmin/Dashboard/CmnSideBar";
import BottomBar from "@/Components/Home/BottomBar";
import { cmnAdminBg, menuIconSize } from "@/common/commoncss";
import { useAuthStore } from "@/store/useAuthStore";
import { useUiStore } from "@/store/useUiStore";
import {
  LayoutDashboard,
  PlusCircle,
  Boxes,
  GalleryHorizontal,
  ShoppingCart,
  Bell,
  Settings,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { toast } from "react-hot-toast";

const Rootlayout = ({ children }) => {
  const user = useAuthStore((store) => store.user);
  const slug = user?.slug;
  const id = user?.id;
  const globalLoading = useUiStore((store) => store.globalLoading);
  const loadingText = useUiStore((store) => store.loadingText);
  const me = useAuthStore((store) => store.me);
  const hasFetched = useRef(false);
  const router = useRouter();
  // const getUser = async () => {
  //   const query = `owner_id=${id}&slug=${slug}`;
  //   console.log(query);
  //   const res = await me(query);
  //   if (res.status === "fail") {
  //     toast.error(res.message || "Error Occured");
  //     router.push("/");
  //   } else {
  //     toast.success(res.message);
  //   }
  // };
  // useEffect(() => {
  //   if (hasFetched.current) return;
  //   hasFetched.current = true;
  //   getUser();
  // }, []);
  const adminMenu = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard className={menuIconSize} />,
      path: `/${slug}/admin`,
    },
    {
      title: "Create Catalogue",
      icon: <PlusCircle className={menuIconSize} />,
      path: `/${slug}/admin/addProducts`,
    },
    {
      title: "All Products",
      icon: <Boxes className={menuIconSize} />,
      path: `/${slug}/admin/allProducts`,
    },
    {
      title: "All Catalogues",
      icon: <GalleryHorizontal className={menuIconSize} />,
      path: `/${slug}/admin/catalogues`,
    },
    {
      title: "Orders",
      icon: <ShoppingCart className={menuIconSize} />,
      path: `/${slug}/admin/orders`,
    },
    {
      title: "Notifications",
      icon: <Bell className={menuIconSize} />,
      path: `/${slug}/admin/notifications`,
    },
    {
      title: "Settings",
      icon: <Settings className={menuIconSize} />,
      path: `/${slug}/admin/settings`,
    },
    {
      title: "Profile",
      icon: <User className={menuIconSize} />,
      path: `/${slug}/admin/profile`,
    },
  ];
  {
    if (globalLoading) {
      // return <GlobalLoader show={globalLoading} loadingText={loadingText} />;
    } else {
      return (
        <div className="flex h-screen overflow-hidden">
          <div className="hidden sm:block sticky top-0 z-20 h-screen">
            <CmnSideBar navItems={adminMenu} />
          </div>
          <div className="flex-1 flex flex-col overflow-hidden">
            <CmnHeader />
            <div
              id="admin-scroll-container"
              className={`flex-1 overflow-y-auto p-0 mb-15 md:mb-0 md:p-4 ${cmnAdminBg}`}
            >
              {children}
            </div>
          </div>
          <BottomBar />
          {/* <GlobalLoader show={globalLoading} loadingText={loadingText} /> */}
        </div>
      );
    }
  }
};

export default Rootlayout;

// If needed to add sub menu under any menu just add this
// submenu: [
//   { title: "All Users", path: "/admin/users" },
//   { title: "Agents", path: "/admin/users/agents" },
//   { title: "Sellers", path: "/admin/users/sellers" },
//   { title: "Banned Accounts", path: "/admin/users/banned" },
// ],
