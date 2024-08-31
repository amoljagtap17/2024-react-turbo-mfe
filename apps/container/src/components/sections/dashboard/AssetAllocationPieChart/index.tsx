import { PieChart } from "@repo/chart";
import { useGetDashboardData } from "@repo/query";
import React from "react";

export function AssetAllocationPieChart() {
  const getDashboardDataQuery = useGetDashboardData(
    "77be0264-c513-4912-be39-d6c18a2631c9"
  );

  if (getDashboardDataQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (getDashboardDataQuery.isError) {
    return <div>Error</div>;
  }

  const totalInvestments = getDashboardDataQuery.data?.totalInvestments;
  const totalDeposits = getDashboardDataQuery.data?.totalDeposits;

  return (
    <PieChart
      title="Asset Allocation"
      data={[
        { name: "Investments", y: totalInvestments },
        { name: "Deposits", y: totalDeposits },
      ]}
    />
  );
}
