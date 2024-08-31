import { Grid } from "@repo/ui";
import React from "react";

export function Dashboard() {
  return (
    <Grid container rowGap={8}>
      <Grid item xs={12} md={4} padding={2}>
        Form
      </Grid>
      <Grid item xs={12} md={8} padding={2}>
        Grid
      </Grid>
    </Grid>
  );
}
