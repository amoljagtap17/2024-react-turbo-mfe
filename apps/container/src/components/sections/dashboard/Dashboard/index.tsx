import { Grid } from "@repo/ui";
import React from "react";
import { AssetAllocationPieChart } from "../AssetAllocationPieChart";
import { InvestmentsBarChart } from "../InvestmentsBarChart";

export function Dashboard() {
  return (
    <Grid container rowGap={8}>
      <Grid item xs={12} md={6} padding={2}>
        <AssetAllocationPieChart />
      </Grid>
      <Grid item xs={12} md={6} padding={2}>
        <InvestmentsBarChart />
      </Grid>
    </Grid>
  );
}
