import { Grid } from "@repo/ui";
import React from "react";
import { AssetAllocationPieChart } from "../AssetAllocationPieChart";
import { InvestmentsBarChart } from "../InvestmentsBarChart";

export function Dashboard() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <AssetAllocationPieChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <InvestmentsBarChart />
      </Grid>
    </Grid>
  );
}
