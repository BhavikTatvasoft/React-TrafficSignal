import { createStyles, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import i18n from "i18next";
import AmbulanceCard from "Pages/Dashboard/atoms/ambulance-card-component";
const useStyles = makeStyles(() =>
  createStyles({
    body: {
      padding: "1%",
    },
    title: {
      fontSize: "xx-large",
      font: "bold",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    form:{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    top: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "5px",
    },
    left: {
      paddingTop: "20px",
      paddingLeft: "50%",
    },
    bottom: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    right: {
      paddingTop: "20px",
      paddingLeft: "25%",
      marginRight: "0px",
    },
  })
);

enum Directions {
  Clock = "Clock",
  AntiClock = "AntiClock",
  TopBottom = "TopBottom",
  RightLeft = "RightLeft",
}

enum Signals {
  Top = "Top",
  Right = "Right",
  Bottom = "Bottom",
  Left = "Left",
}
const Dashboard = () => {
  const classes = useStyles();
  const [direction, setDirection] = useState(Directions.Clock);
  const [active, setActive] = useState("");
  const [prevActive, setPrevActive] = useState("");
  const [prevTimer, setPrevTimer] = useState(0);
  const [activeTimer, setActiveTimer] = useState(0);
  const [isRemember, setIsRemember] = useState(false);

  const handleSignal = () => {
    debugger;
    setActive("");
    if (!isRemember) {
      if (direction === Directions.Clock) {
        if (!prevActive) {
          setActive(Signals.Top);
          setActiveTimer(5);
          setPrevActive(Signals.Top);
        } else if (prevActive === Signals.Top) {
          setActive(Signals.Right);
          setActiveTimer(5);
          setPrevActive(Signals.Right);
        } else if (prevActive === Signals.Right) {
          setActive(Signals.Bottom);
          setActiveTimer(5);
          setPrevActive(Signals.Bottom);
        } else if (prevActive === Signals.Bottom) {
          setActive(Signals.Left);
          setActiveTimer(5);
          setPrevActive(Signals.Left);
        } else if (prevActive === Signals.Left) {
          setActive(Signals.Top);
          setActiveTimer(5);
          setPrevActive(Signals.Top);
        }
      } else if (direction === Directions.AntiClock) {
        if (!prevActive) {
          setActive(Signals.Top);
          setActiveTimer(5);
          setPrevActive(Signals.Top);
        } else if (prevActive === Signals.Top) {
          setActive(Signals.Left);
          setActiveTimer(5);
          setPrevActive(Signals.Left);
        } else if (prevActive === Signals.Left) {
          setActive(Signals.Bottom);
          setActiveTimer(5);
          setPrevActive(Signals.Bottom);
        } else if (prevActive === Signals.Bottom) {
          setActive(Signals.Right);
          setActiveTimer(5);
          setPrevActive(Signals.Right);
        } else if (prevActive === Signals.Right) {
          setActive(Signals.Top);
          setActiveTimer(5);
          setPrevActive(Signals.Top);
        }
      } else if (direction === Directions.TopBottom) {
        if (!prevActive) {
          setActive(Signals.Top);
          setActiveTimer(5);
          setPrevActive(Signals.Top);
        } else if (prevActive === Signals.Top) {
          setActive(Signals.Bottom);
          setActiveTimer(5);
          setPrevActive(Signals.Bottom);
        } else if (prevActive === Signals.Bottom) {
          setActive(Signals.Top);
          setActiveTimer(5);
          setPrevActive(Signals.Top);
        }
      } else if (direction === Directions.RightLeft) {
        if (!prevActive) {
          setActive(Signals.Left);
          setActiveTimer(5);
          setPrevActive(Signals.Left);
        } else if (prevActive === Signals.Left) {
          setActive(Signals.Right);
          setActiveTimer(5);
          setPrevActive(Signals.Right);
        } else if (prevActive === Signals.Right) {
          setActive(Signals.Left);
          setActiveTimer(5);
          setPrevActive(Signals.Left);
        }
      }
    } else if (isRemember) {
      setIsRemember(false);
      if (prevTimer !== 0) {
        if (prevActive === Signals.Top) {
          setActive(Signals.Top);
          setActiveTimer(prevTimer);
        } else if (prevActive === Signals.Right) {
          setActive(Signals.Right);
          setActiveTimer(prevTimer);
        } else if (prevActive === Signals.Left) {
          setActive(Signals.Left);
          setActiveTimer(prevTimer);
        } else if (prevActive === Signals.Bottom) {
          setActive(Signals.Bottom);
          setActiveTimer(prevTimer);
        }
      }
    }
  };

  const handleChange = (event: any) => {
    debugger;
    setDirection(event.target.value);
    handleSignal();
    setPrevActive("");
  };

  const handleBreak = (type: any) => {
    setPrevTimer(activeTimer);
    setActive("");
    setIsRemember(true);
    if (type === Signals.Top) {
      setActive(Signals.Top);
      setActiveTimer(5);
    } else if (type === Signals.Bottom) {
      setActive(Signals.Bottom);
      setActiveTimer(5);
    } else if (type === Signals.Left) {
      setActive(Signals.Left);
      setActiveTimer(5);
    } else if (type === Signals.Right) {
      setActive(Signals.Right);
      setActiveTimer(5);
    }
  };

  useEffect(() => {
    if (activeTimer <= 0) {
      handleSignal();
    } else {
      const intervalRef = window.setInterval(
        () => setActiveTimer((prev) => prev - 1),
        1000
      );
      return () => clearInterval(intervalRef);
    }
  }, [activeTimer]);

  return (
    <div className={classes.body}>
      <div className={classes.title}>
        {i18n.t("TrafficControl.1")} <h2 className="pl-5">{i18n.t(`Second.${activeTimer}`)}</h2>
      </div>
      <div className={classes.form}>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={direction}
            onChange={handleChange}
          >
            <FormControlLabel
              value="Clock"
              control={<Radio />}
              label={i18n.t("SignalChioces.1")}
            />
            <FormControlLabel
              value="AntiClock"
              control={<Radio />}
              label={i18n.t("SignalChioces.2")}
            />
            <FormControlLabel
              value="TopBottom"
              control={<Radio />}
              label={i18n.t("SignalChioces.3")}
            />
            <FormControlLabel
              value="RightLeft"
              control={<Radio />}
              label={i18n.t("SignalChioces.4")}
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.top} onClick={() => handleBreak("Top")}>
        <AmbulanceCard
          time={activeTimer}
          status={active === Signals.Top ? true : false}
        />
      </div>
      <div className="row">
        <div className="col-6">
          <div className={classes.left} onClick={() => handleBreak("Left")}>
            <AmbulanceCard
              time={activeTimer}
              status={active === Signals.Left ? true : false}
            />
          </div>
        </div>
        <div className="col-6">
          <div className={classes.right} onClick={() => handleBreak("Right")}>
            <AmbulanceCard
              time={activeTimer}
              status={active === Signals.Right ? true : false}
            />
          </div>
        </div>
      </div>
      <div className={classes.bottom} onClick={() => handleBreak("Bottom")}>
        <AmbulanceCard
          time={activeTimer}
          status={active === Signals.Bottom ? true : false}
        />
      </div>
    </div>
  );
};

export default Dashboard;
