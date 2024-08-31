import { AppShell } from "@repo/ui";
import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Navbar, NoMatch } from "../components/lib";
import { Dashboard } from "../components/sections";

export function App(): JSX.Element {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppShell appName="Container App" NavComponent={Navbar}>
            <Outlet />
          </AppShell>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}
