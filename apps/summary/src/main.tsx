import { QueryProvider } from "@repo/query";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";

const el = document.getElementById("root");
if (el) {
  const root = createRoot(el);

  root.render(
    <React.StrictMode>
      <QueryProvider>
        <BrowserRouter basename="/">
          <App />
        </BrowserRouter>
      </QueryProvider>
    </React.StrictMode>
  );
} else {
  throw new Error("Could not find root element");
}
