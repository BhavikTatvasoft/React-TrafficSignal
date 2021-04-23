import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import AmbulanceImage from '../../../Images/ambulance.png';
import i18n from 'i18next';
const useStyles = makeStyles({
    root: {
        maxWidth: 200,
        maxHeight: 120,
    },
    media: {
        height: 75,
    },
});

const AmbulanceCard = (props: any) => {
    const classes = useStyles();
    const { time, status, handleClick } = props;
    const backGround = (status === "Active") ? "bg-success" : "bg-danger";

    return (
        <div>
            <div className={classes.root}>
                <div>
                    <CardMedia
                        className={classes.media}
                        image={AmbulanceImage}
                        title="Contemplative Reptile"
                    />
                    <div>
                        <Button className={backGround} onClick={handleClick}>{i18n.t('TrafficLight.1')} {status === "Active" && <span>{"::"}{i18n.t(`Second.${time}`)}</span>}</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AmbulanceCard;