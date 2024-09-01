import { AppShell, FourOhFour, Spinner } from "@repo/ui";
import React, { lazy, Suspense } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { Navbar } from "../components/lib";

const Dashboard = lazy(() =>
  import("../components/sections/dashboard/Dashboard").then(module => ({
    default: module.Dashboard,
  }))
);

function NoMatch() {
  const navigate = useNavigate();

  return (
    <FourOhFour
      onClick={() => {
        console.log("clicked");
        navigate("/");
      }}
    />
  );
}

export function App(): JSX.Element {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppShell appName="Summary App" NavComponent={Navbar}>
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
