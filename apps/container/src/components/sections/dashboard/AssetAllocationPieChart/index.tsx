import { PieChart } from "@repo/chart";
import { useGetDashboardData } from "@repo/query";
import { ErrorRetry, Spinner } from "@repo/ui";
import React from "react";

export function AssetAllocationPieChart() {
  const { status, data, refetch } = useGetDashboardData(
    "77be0264-c513-4912-be39-d6c18a2631c9"
  );

  return status === "pending" ? (
    <Spinner />
  ) : status === "error" ? (
    <ErrorRetry onClickHandler={() => refetch()} />
  ) : (
    <PieChart
      title="Asset Allocation"
      data={[
        { name: "Investments", y: data.totalInvestments },
        { name: "Deposits", y: data.totalDeposits },
      ]}
    />
  );
}
