import React from "react";
import HeaderLogin from "../components/HeaderLogin";

export default function AuthLayout({ children }) {
  return (
    <>
      <HeaderLogin />
      <div className="container">{children}</div>
    </>
  );
}
