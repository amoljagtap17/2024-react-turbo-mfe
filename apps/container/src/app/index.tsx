import { AppShell, Spinner } from "@repo/ui";
import React, { lazy, Suspense } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Navbar, NoMatch } from "../components/lib";

const Dashboard = lazy(() =>
  import("../components/sections/dashboard/Dashboard").then(module => ({
    default: module.Dashboard,
  }))
);

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
        <Route
          index
          element={
            <Suspense fallback={<Spinner />}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}
