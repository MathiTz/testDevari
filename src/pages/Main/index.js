import React from "react";

import HeaderIndex from "../../components/HeaderIndex";

export default function Main({ children }) {
  return (
    <>
      <HeaderIndex />
      <div className="container">{children}</div>
    </>
  );
}
