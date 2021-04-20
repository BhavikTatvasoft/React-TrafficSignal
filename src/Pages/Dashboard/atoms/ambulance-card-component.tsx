
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import AmbulanceImage from '../../../Images/ambulance.png';

const useStyles = makeStyles({
    root: {
        maxWidth: 200,
        maxHeight:120,
    },
    media: {
        height: 75,
    },
});

const AmbulanceCard = (props: any) => {
    const { time , status} = props;

    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={AmbulanceImage}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        {status}
                        <Button >TrafficLight</Button>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )

}

export default AmbulanceCard;