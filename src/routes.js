import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProgressBar from "./components/circularProgress/ProgressBar";

const Login = lazy(() => import("./view/login/Login"));
const Dashboard = lazy(() => import("./view/dashboard/Dashboard"));
const Register = lazy(() => import("./view/register/Register"));

const Routes = () => (
  <Router>
    <Suspense
      fallback={
        <div className="mt-5 pt-5">
          <ProgressBar />
        </div>
      }
    >
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={Login} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
