import { createStyles, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import AmbulanceCard from './atoms/ambulance-card-component';
// import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
const useStyles = makeStyles(() =>
    createStyles({
        body: {

        },
        title: {
            fontSize: "xx-large",
            font: "bold"
        },
        top: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: "20px",

        },
        left: {
            paddingTop: "20px",
            paddingLeft: '50%',
        },
        bottom: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

        },
        right: {
            paddingTop: "20px",
            paddingLeft: '25%',
            marginRight: '0px',

        }


    }),
);
const Dashboard = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('Clock');
    const [activeTop, setActiveTop] = React.useState('');
    const [activeBottom, setActiveBottom] = React.useState('');
    const [activeLeft, setActiveLeft] = React.useState('');
    const [activeRight, setActiveRight] = React.useState('');
    const [prevActive, setPrevActive] = React.useState('');
    const [prevTimer, setPrevTimer] = React.useState(0);
    const [activeTimer, setActiveTimer] = React.useState(0);
    const [isRemember, setIsRemember] = React.useState(false);

    const handlestop = () => {
        setActiveTop("");
        setActiveRight("");
        setActiveBottom("");
        setActiveLeft("");
    }
    const handleSignal = () => {
        handlestop();
        if (!isRemember) {
            if (value === 'Clock') {
                if (prevActive === "") {
                    setActiveTop("Active");
                    setActiveTimer(5);
                    setPrevActive("Top");
                }
                if (prevActive === "Top") {
                    setActiveRight("Active");
                    setActiveTimer(5);
                    setPrevActive("Right");
                }
                if (prevActive === "Right") {
                    setActiveBottom("Active");
                    setActiveTimer(5);
                    setPrevActive("Bottom");
                }
                if (prevActive === "Bottom") {
                    setActiveLeft("Active");
                    setActiveTimer(5);
                    setPrevActive("");
                }
            }
            else if (value === "AntiClock") {
                if (prevActive === "") {
                    setActiveTop("Active");
                    setActiveTimer(5);
                    setPrevActive("Top");
                }
                if (prevActive === "Top") {
                    setActiveLeft("Active");
                    setActiveTimer(5);
                    setPrevActive("Left");
                }
                if (prevActive === "Left") {
                    setActiveBottom("Active");
                    setActiveTimer(5);
                    setPrevActive("Bottom");
                }
                if (prevActive === "Bottom") {
                    setActiveRight("Active");
                    setActiveTimer(5);
                    setPrevActive("");
                }
            }
            else if (value === "TopBottom") {
                if (prevActive === "") {
                    setActiveTop("Active");
                    setActiveTimer(5);
                    setPrevActive("Top");
                }
                if (prevActive === "Top") {
                    setActiveBottom("Active");
                    setActiveTimer(5);
                    setPrevActive("");
                }
            }
            else if (value === "RightLeft") {
                if (prevActive === "") {
                    setActiveLeft("Active");
                    setActiveTimer(5);
                    setPrevActive("Left");
                }
                if (prevActive === "Left") {
                    setActiveRight("Active");
                    setActiveTimer(5);
                    setPrevActive("");
                }
            }
        }
        else if (isRemember) {
            if (prevTimer !== 0) {
                if (prevActive === "Top") {
                    setActiveTop("Active");
                    setActiveTimer(prevTimer);
                    setPrevActive("Top");
                }
                else if (prevActive === "Left") {
                    setActiveLeft("Active");
                    setActiveTimer(prevTimer);
                    setPrevActive("Left");
                }
                else if (prevActive === "Left") {
                    setActiveLeft("Active");
                    setActiveTimer(prevTimer);
                    setPrevActive("Left");
                }
                else if (prevActive === "Bottom") {
                    setActiveBottom("Active");
                    setActiveTimer(prevTimer);
                    setPrevActive("Bottom");
                }
                setIsRemember(false);
            }
        }
    }

    const handleChange = (event: any) => {
        setValue(event.target.value);
        handleSignal();
        setPrevActive("");
    };

    const handleBreak = (type: any) => {
        setPrevTimer(activeTimer);
        handlestop();
        setIsRemember(true);
        if (type === "Top") {
            setActiveTop("Active");
            setActiveTimer(5);
        }
        else if (type === "Bottom") {
            setActiveBottom("Active");
            setActiveTimer(5);
        }
        else if (type === "Left") {
            setActiveLeft("Active");
            setActiveTimer(5);
        }
        else if (type === "Right") {
            setActiveRight("Active");
            setActiveTimer(5);
        }
    }

    useEffect(() => {
        if (activeTimer <= 0) {
            handleSignal();
        }
        else {
            const intervalRef = window.setInterval(() => setActiveTimer((prev) => prev - 1), 1000);

            return () => clearInterval(intervalRef);
        }
    }, [activeTimer]);

    return (
        <div className={classes.body}>
            <div className={classes.title}>
            {i18n.t('TrafficControl.1')} {i18n.t(`Second.${activeTimer}`)}
            </div>
            <div>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                        <FormControlLabel value="Clock" control={<Radio />} label={i18n.t('SignalChioces.1')} />
                        <FormControlLabel value="AntiClock" control={<Radio />} label={i18n.t('SignalChioces.2')} />
                        <FormControlLabel value="TopBottom" control={<Radio />} label={i18n.t('SignalChioces.3')} />
                        <FormControlLabel value="RightLeft" control={<Radio />} label={i18n.t('SignalChioces.4')} />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className={classes.top} onClick={() => handleBreak("Top")}>
                <AmbulanceCard time={activeTimer} status={activeTop} />
            </div>
            <div className="row">
                <div className="col-6">
                    <div className={classes.left} onClick={() => handleBreak("Left")}><AmbulanceCard time={activeTimer} status={activeLeft} /></div>
                </div>
                <div className="col-6 ">
                    <div className={classes.right} onClick={() => handleBreak("Right")}><AmbulanceCard time={activeTimer} status={activeRight} /></div>
                </div>
            </div>
            <div className={classes.bottom} onClick={() => handleBreak("Bottom")}>
                <AmbulanceCard time={activeTimer} status={activeBottom} />
            </div>
        </div>
    )
}

export default Dashboard;