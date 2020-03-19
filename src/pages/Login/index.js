import React from "react";
import HeaderLogin from "../../components/HeaderLogin";

import api from "../../services/api";

import "./style.css";

export default function Login() {
  return (
    <>
      <HeaderLogin />
      <div className="container login-page"></div>
    </>
  );
}
