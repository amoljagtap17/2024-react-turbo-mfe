import { Box, Button, Drawer } from "@repo/ui";
import React, { useState } from "react";

export function FilterButton() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Box>
      <Button variant="contained" onClick={toggleDrawer(true)}>
        Filter
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        Content
      </Drawer>
    </Box>
  );
}
