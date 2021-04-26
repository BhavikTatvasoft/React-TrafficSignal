import React, { useEffect } from "react";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard.component";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import NavBar from "Layout/Navbar";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(process.env.DEFAULT_LANGUAGE);
  }, []);
  return (
    <Router>
      <NavBar />
      <Route
        exact
        path="/"
        render={() => {
          return <Redirect to="/dashboard" />;
        }}
      />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  );
}

export default App;
