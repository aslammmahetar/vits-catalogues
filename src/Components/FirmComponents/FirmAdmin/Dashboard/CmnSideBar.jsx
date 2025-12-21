"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ChevronDown, ChevronRight, LogOut, Menu } from "lucide-react";
import logo from "../../../../app/logo.png";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // Import usePathname
import { toast } from "react-hot-toast";
import { useAuthStore } from "@/store/useAuthStore";

const CmnSideBar = ({ navItems }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  // const [expandedMenus, setExpandedMenus] = useState({});
  const signOut = useAuthStore((store) => store.signout);
  const pathname = usePathname();
  const router = useRouter();

  const toggleSubmenu = (title) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const isActive = (path, submenu = []) => {
    // Check if current path matches the main menu path
    if (path === pathname) return true;

    // Check if any submenu item matches the current path
    if (submenu.some((subItem) => subItem.path === pathname)) return true;

    return false;
  };

  const expandedMenus = useMemo(() => {
    const state = {};

    navItems.forEach((item) => {
      if (item.submenu) {
        state[item.title] = item.submenu.some(
          (subItem) => subItem.path === pathname
        );
      }
    });

    return state;
  }, [pathname, navItems]);
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth < 768) setIsCollapsed(true);
  //     else setIsCollapsed(false);
  //   };

  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  const handleLogout = async () => {
    const logout = await signOut();
    console.log(logout.message);
    if (logout.status === "fail") {
      toast.error(logout.message || "Error Occured!");
    } else {
      toast.success(logout.message);
      router.push("/");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-green-600 text-white transition-all duration-300 ease-in-out flex flex-col ${
          isCollapsed ? "w-12" : "w-55"
        }`}
      >
        {/* Top Section (Logo & Collapse Button) */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
          {!isCollapsed && (
            <Image
              src={logo}
              alt="Logo"
              width={60}
              height={20}
              className="rounded mx-auto"
            />
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-white m-auto cursor-pointer"
          >
            <Menu size={20} />
          </button>
        </div>

        {/* Scrollable Menu Section */}
        <div className="flex-1 overflow-y-auto">
          <nav className="mt-4 space-y-1">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {/* Main Menu Item */}
                <div
                  className={`flex items-center justify-between px-2 py-2 hover:bg-white hover:text-green-800 cursor-pointer transition-all ${
                    expandedMenus[item.title] ? "bg-white text-green-800" : ""
                  } ${
                    isActive(item.path, item.submenu)
                      ? "bg-white text-green-800 border-l-4 border-white"
                      : ""
                  }`}
                  onClick={() => item.submenu && toggleSubmenu(item.title)}
                  title={item.title}
                >
                  <Link
                    href={item.path || "#"}
                    className="flex items-center gap-3 flex-1"
                    onClick={(e) => item.submenu && e.preventDefault()}
                  >
                    <span className="shrink-0 ml-1">{item.icon}</span>
                    {!isCollapsed && (
                      <span className="flex-1">{item.title}</span>
                    )}
                  </Link>

                  {!isCollapsed && item.submenu && (
                    <span className="ml-2">
                      {expandedMenus[item.title] ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </span>
                  )}

                  {!isCollapsed && item.badge && (
                    <span className="ml-2 bg-blue-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Submenu Items */}
                {!isCollapsed && item.submenu && expandedMenus[item.title] && (
                  <div className="ml-8 mt-1 space-y-1">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.path}
                        className={`flex items-center gap-3 px-4 py-2 hover:bg-white hover:text-green-800 cursor-pointer transition-all text-sm ${
                          pathname === subItem.path
                            ? "bg-blue-700 border-l-4 border-white"
                            : ""
                        }`}
                      >
                        <span className="w-4 shrink-0"></span>
                        <span>{subItem.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Fixed Bottom Section: Logout */}
        <div
          className="px-4 py-3 border-t border-gray-700 hover:bg-white cursor-pointer hover:text-green-800 flex items-center gap-2"
          onClick={handleLogout}
        >
          <LogOut size={20} />
          {!isCollapsed && <span>Logout</span>}
        </div>
      </div>
    </div>
  );
};

export default CmnSideBar;
