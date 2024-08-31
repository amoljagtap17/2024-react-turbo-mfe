import { Grid } from "@repo/ui";
import React from "react";
import { InvestmentGrid } from "../InvestmentGrid";

export function Dashboard() {
  return (
    <Grid container rowGap={8}>
      <Grid item xs={12} md={3} padding={2}>
        Form
      </Grid>
      <Grid item xs={12} md={9} padding={2}>
        <InvestmentGrid />
      </Grid>
    </Grid>
  );
}
