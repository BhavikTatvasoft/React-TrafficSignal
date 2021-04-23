import React, { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard.component";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";

const useStyles = makeStyles({
  root: {
    width: "90%",
    padding: "0.5rem 0",
    paddingLeft: "35%",
    margin: "auto",
    backgroundColor: "grey",
  },
  button: {
    margin: "10px",
  },
});
function App() {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const [isEnglish, setEnglish] = useState(true);
  const [isHindi, setHindi] = useState(false);
  const [isGujrati, setGujrati] = useState(false);

  const handleClick = (lang: any) => {
    setEnglish(false);
    setHindi(false);
    setGujrati(false);
    lang === "en" && setEnglish(true);
    lang === "hi" && setHindi(true);
    lang === "guj" && setGujrati(true);
    i18n.changeLanguage(lang);
  };
  useEffect(() => {
    i18n.changeLanguage(process.env.DEFAULT_LANGUAGE);
  }, []);
  return (
    <Router>
      <nav className={classes.root}>
        <Button
          variant="contained"
          color={isEnglish ? "primary" : "secondary"}
          onClick={() => handleClick("en")}
          className={classes.button}
        >
          English
        </Button>
        <Button
          variant="contained"
          color={isHindi ? "primary" : "secondary"}
          onClick={() => handleClick("hi")}
          className={classes.button}
        >
          Hindi
        </Button>
        <Button
          variant="contained"
          color={isGujrati ? "primary" : "secondary"}
          onClick={() => handleClick("guj")}
          className={classes.button}
        >
          Gujrati
        </Button>
      </nav>
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
