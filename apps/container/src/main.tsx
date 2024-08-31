import { QueryProvider } from "@repo/query";
import { AppShell } from "@repo/ui";
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";

const el = document.getElementById("root");
if (el) {
  const root = createRoot(el);

  root.render(
    <React.StrictMode>
      <QueryProvider>
        <AppShell>
          <App />
        </AppShell>
      </QueryProvider>
    </React.StrictMode>
  );
} else {
  throw new Error("Could not find root element");
}
