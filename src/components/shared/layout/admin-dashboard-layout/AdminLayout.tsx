"use client";

import AdminLayout from "@/components/shared/layout/Layout";
import Link from "next/link";
import { ReactNode } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { LucideLogOut } from "lucide-react";
import { getItem, MenuItem } from "../Layout";
import { useRouter } from "next/navigation"; // ✅ Correct hook for app directory
import { toast } from "sonner";
import { logout } from "@/redux/features/auth";

const SuperAdminLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  // ✅ Logout function inside component
  const handleLogout = () => {
    logout();
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");

    toast.success("Logged out successfully");
    router.push("/login");
  };

  const navItems: MenuItem[] = [
    getItem(
      <Link href="/dashboard">Dashboard</Link>,
      "/dashboard",
      <LuLayoutDashboard />
    ),
    getItem(
      <Link href="/dashboard/all-customer">All Customer</Link>,
      "/dashboard/all-customer",
      <LuLayoutDashboard />
    ),
    getItem(
      <Link href="/dashboard/all-products">All Products</Link>,
      "/dashboard/all-products",
      <LuLayoutDashboard />
    ),
    getItem(
      <Link href="/dashboard/all-order">Order</Link>,
      "/dashboard/all-order",
      <LuLayoutDashboard />
    ),
    getItem(
      <Link href="/dashboard/all-payment">Payment</Link>,
      "/dashboard/all-payment",
      <LuLayoutDashboard />
    ),
    getItem(
      <Link href="/dashboard/setting">Setting</Link>,
      "/dashboard/setting",
      <LuLayoutDashboard />
    ),
    // ✅ Logout item (calls handleLogout)
    getItem("Logout", "logout", <LucideLogOut />, undefined, handleLogout),
  ];

  return <AdminLayout menu={navItems}>{children}</AdminLayout>;
};

export default SuperAdminLayout;
