import { Grid } from "@repo/ui";
import React from "react";
import { AssetAllocationPieChart } from "../AssetAllocationPieChart";

export function Dashboard() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <AssetAllocationPieChart />
      </Grid>
      <Grid item xs={12} md={6}>
        Bar Chart
      </Grid>
    </Grid>
  );
}
