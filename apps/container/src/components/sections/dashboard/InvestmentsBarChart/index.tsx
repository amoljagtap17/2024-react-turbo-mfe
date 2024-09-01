import { BarChart } from "@repo/chart";
import { useGetDashboardData } from "@repo/query";
import { ErrorRetry, Spinner } from "@repo/ui";
import React from "react";

export function InvestmentsBarChart() {
  const { status, data, refetch } = useGetDashboardData(
    "bce7d90e-552a-406f-9923-273593b6cb25"
  );

  return status === "pending" ? (
    <Spinner />
  ) : status === "error" ? (
    <ErrorRetry onClickHandler={() => refetch()} />
  ) : (
    <BarChart
      title="Investments by Type"
      categories={data.investmentsByType.map(
        investment => investment.type as string
      )}
      xAxisTitle="Investment Type"
      xAxisDescription="Investment Type"
      yAxisTitle="Amount"
      data={data.investmentsByType.map(investment => ({
        type: "bar",
        name: investment.type as string,
        data: [investment.value],
      }))}
    />
  );
}
