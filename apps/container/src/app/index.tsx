import { Stack } from "@repo/ui";
import React from "react";
import { FilterButton } from "../components/sections";

export function App(): JSX.Element {
  return (
    <Stack spacing={2}>
      <FilterButton />
    </Stack>
  );
}
