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
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import { useUsersStatsStore } from "@/store/useUserStatsStore";

export const dynamic = "force-dynamic";
const Rootlayout = ({ children }) => {
  const { slug } = useParams();
  const router = useRouter();
  const user = useAuthStore((store) => store.user);
  const getUserStats = useUsersStatsStore((store) => store.getUserStats);
  const id = user?.id;
  const bootstrap = useAuthStore((store) => store.bootstrap);
  const globalLoading = useUiStore((store) => store.globalLoading);
  const loadingText = useUiStore((store) => store.loadingText);
  const bootstrapRef = useRef(false);
  const statsRef = useRef(false);
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
    if (!slug) return;
    if (!bootstrapRef.current) {
      bootstrapRef.current = true;

      (async () => {
        const resp = await bootstrap(slug);

        if (!resp) return;

        if (resp.status === "fail") {
          toast.error(resp.message || "Error Occured");
          router.push("/");
          return;
        }

        if (!resp.skipped) {
          toast.success(resp.message || "Welcome to Dashboard");
        }
      })();
    }

    if (id && !statsRef.current) {
      statsRef.current = true;
      setTimeout(() => {
        getUserLatestStats();
      }, 2000);
    }
  }, [slug, id]);

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
      return <GlobalLoader show={globalLoading} loadingText={loadingText} />;
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
          <GlobalLoader show={globalLoading} loadingText={loadingText} />
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
