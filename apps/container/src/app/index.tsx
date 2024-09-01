import { AppShell, Spinner } from "@repo/ui";
import React, { lazy, Suspense } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Navbar, NoMatch } from "../components/lib";

const DashboardPage = lazy(() =>
  import("../components/sections/dashboard/Dashboard").then(module => ({
    default: module.Dashboard,
  }))
);

const SummaryPage = lazy(() =>
  import("../components/sections/summary/RemoteSummaryPage").then(module => ({
    default: module.RemoteSummaryPage,
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
              <DashboardPage />
            </Suspense>
          }
        />
        <Route
          path="summary"
          element={
            <Suspense fallback={<Spinner />}>
              <SummaryPage />
            </Suspense>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}
