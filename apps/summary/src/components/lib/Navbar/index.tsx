import { Button, Stack } from "@repo/ui";
import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [{ path: "/", label: "Summary" }];

export function Navbar() {
  return (
    <Stack direction="row" spacing={2}>
      {navItems.map(navItem => (
        <Button
          key={navItem.path}
          component={NavLink}
          to={navItem.path}
          color="inherit"
          sx={{
            "&.active": {
              borderBottom: "2px solid",
              borderBottomColor: "secondary.main",
            },
          }}
        >
          {navItem.label}
        </Button>
      ))}
    </Stack>
  );
}
