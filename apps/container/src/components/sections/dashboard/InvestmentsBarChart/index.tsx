import { BarChart } from "@repo/chart";
import { useGetDashboardData } from "@repo/query";
import { Spinner } from "@repo/ui";
import React from "react";

export function InvestmentsBarChart() {
  const getDashboardDataQuery = useGetDashboardData(
    "77be0264-c513-4912-be39-d6c18a2631c9"
  );

  if (getDashboardDataQuery.isLoading) {
    return <Spinner />;
  }

  if (getDashboardDataQuery.isError) {
    return <div>Error</div>;
  }

  const investmentsByType = getDashboardDataQuery.data?.investmentsByType;

  return (
    <BarChart
      title="Investments by Type"
      categories={
        investmentsByType?.map(investment => investment.type as string) || []
      }
      xAxisTitle="Investment Type"
      xAxisDescription="Investment Type"
      yAxisTitle="Amount"
      data={
        investmentsByType?.map(investment => ({
          type: "bar",
          name: investment.type as string,
          data: [investment.value],
        })) || []
      }
    />
  );
}
