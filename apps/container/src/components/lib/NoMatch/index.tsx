import { FourOhFour } from "@repo/ui";
import React from "react";
import { useNavigate } from "react-router-dom";

export function NoMatch() {
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
