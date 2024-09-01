import { PieChart } from "@repo/chart";
import { useGetDashboardData } from "@repo/query";
import { ErrorRetry, Spinner } from "@repo/ui";
import React from "react";

export function AssetAllocationPieChart() {
  const { status, data, refetch } = useGetDashboardData(
    "bce7d90e-552a-406f-9923-273593b6cb25"
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
