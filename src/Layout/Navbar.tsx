import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Button from "@material-ui/core/Button";
import { useEffect, useState } from "react";

enum Languages {
  Hindi = "hi",
  Gujrati = "guj",
  English = "en",
}

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

const NavBar = () => {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(
    process.env.DEFAULT_LANGUAGE !== undefined
      ? process.env.DEFAULT_LANGUAGE
      : Languages.English
  );

  const handleClick = (lang: string) => {
    setCurrentLanguage(lang);
  };

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage]);

  return (
    <nav className={classes.root}>
      <Button
        variant="contained"
        color={currentLanguage === Languages.English ? "primary" : "secondary"}
        onClick={() => handleClick(Languages.English)}
        className={classes.button}
      >
        English
      </Button>
      <Button
        variant="contained"
        color={currentLanguage === Languages.Hindi ? "primary" : "secondary"}
        onClick={() => handleClick(Languages.Hindi)}
        className={classes.button}
      >
        Hindi
      </Button>
      <Button
        variant="contained"
        color={currentLanguage === Languages.Gujrati ? "primary" : "secondary"}
        onClick={() => handleClick(Languages.Gujrati)}
        className={classes.button}
      >
        Gujrati
      </Button>
    </nav>
  );
};

export default NavBar;
