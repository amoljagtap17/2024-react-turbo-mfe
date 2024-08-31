import { AppShell, FourOhFour } from "@repo/ui";
import React from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { Navbar } from "../components/lib";
import { Dashboard } from "../components/sections";

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
        <Route index element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}
