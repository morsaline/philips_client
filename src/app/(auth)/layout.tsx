"use client";

import Footer from "@/components/shared/Footer/Footer";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between ">
      {/* Main content */}
      <main className="">{children}</main>

      {/* Footer always visible at bottom */}
      <Footer />
    </div>
  );
};

export default Layout;
