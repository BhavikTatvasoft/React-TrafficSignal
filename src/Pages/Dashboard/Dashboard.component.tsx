import { createStyles, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import AmbulanceCard from './atoms/ambulance-card-component';

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
    const [prevTimer, setPrevTimer] = React.useState('');
    const [activeTimer, setActiveTimer] = React.useState(0);

    const handleSignal = () => {
        if (value === 'Clock') {
            setActiveTop('Active');         
        }
    }

    useEffect(() => {
        handleSignal();
    },);

    const handleChange = (event: any) => {
        setValue(event.target.value);
    };


    return (
        <div className={classes.body}>
            <div className={classes.title}>
                Traffic Control
             </div>
            <div>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                        <FormControlLabel value="Clock" control={<Radio />} label="Clock Wise" />
                        <FormControlLabel value="AntiClock" control={<Radio />} label="Anti Clock Wise" />
                        <FormControlLabel value="TopBottom" control={<Radio />} label="Top Bottom" />
                        <FormControlLabel value="RightLeft" control={<Radio />} label="Right Left" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className={classes.top}>
                <AmbulanceCard time={prevTimer} status={activeTop} />
            </div>
            <div className="row">
                <div className="col-6">
                    <div className={classes.left}><AmbulanceCard time={prevTimer} status={activeLeft} /></div>
                </div>
                <div className="col-6 ">
                    <div className={classes.right}><AmbulanceCard time={prevTimer} status={activeRight} /></div>
                </div>
            </div>
            <div className={classes.bottom}>
                <AmbulanceCard time={prevTimer} status={activeBottom} />
            </div>
        </div>
    )
}

export default Dashboard;