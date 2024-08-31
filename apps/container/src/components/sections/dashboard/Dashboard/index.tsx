import { useGetDashboardData } from "@repo/query";
import { Grid } from "@repo/ui";
import React from "react";

export function Dashboard() {
  const getDashboardDataQuery = useGetDashboardData(
    "77be0264-c513-4912-be39-d6c18a2631c9"
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        Pie Chart
      </Grid>
      <Grid item xs={12} md={6}>
        Bar Chart
      </Grid>
    </Grid>
  );
}
