import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import Login from "../pages/Login";
import Main from "../pages/Main";

export default function Routes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    function checkData() {
      setData(localStorage.getItem("data"));
    }

    checkData();
  }, []);

  return (
    <Router>
      <Route path="/" component={Login} />
      <Route path="/main" component={Main} />

      <Switch>
        {data === null ? (
          <Redirect to={{ pathname: "/" }} />
        ) : (
          <Redirect to={{ pathname: "/main" }} />
        )}
      </Switch>
    </Router>
  );
}
