import React from "react";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import RegisterPage from "./components/pages/RegisterPage/RegisterPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import DashboardPage from "./components/pages/DashboardPage/DashboardPage";
import RegressionPage from "./components/pages/RegressionPage/RegressionPage";
import TestCasePage from "./components/pages/TestCasePage/TestCasePage";
import ProjectTestPage from "./components/pages/TestCasePage/Project/ProjectTestPage";
import ProcessPage from "./components/pages/RegressionPage/ProcessPage/ProcessPage";
import AddRegressionPage from "./components/pages/RegressionPage/AddRegressionPage/AddRegressionPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={LoginPage} exact />
          <Route path="/register" component={RegisterPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/regression" component={RegressionPage} />
          <Route path="/testcases" component={TestCasePage} />
          <Route path="/testcase/:id" component={ProjectTestPage} />
          <Route path="/retest/:id" component={ProcessPage} />
          <Route path="/regression-add" component={AddRegressionPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
