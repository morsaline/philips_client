import React from "react";
import DashboardStats from "./DashboardStats";
import SalesAnalytics from "./SalesAnalytics";
import OrdersTable from "./OrdersTable";
import NewCustomersCard from "./NewCustomersCard";

function DashboardHome() {
  return (
    <div>
      <DashboardStats />
      <div className="flex gap-4">
        <div className="w-[60%]">
          {" "}
          <SalesAnalytics />
        </div>
        <div className="w-[40%]">
          <NewCustomersCard />
        </div>
      </div>
      <OrdersTable />
    </div>
  );
}

export default DashboardHome;
