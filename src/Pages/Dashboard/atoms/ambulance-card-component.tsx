import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import AmbulanceImage from "Images/ambulance.png";
import i18n from "i18next";
const useStyles = makeStyles({
  root: {
    maxWidth: 150,
    maxHeight: 100,
  },
  media: {
    height: 75,
  },
});

interface IAmbulanceProps {
    time: number 
    status: boolean;
  }
  

const AmbulanceCard: React.FC<IAmbulanceProps> = ({time, status})=> {
  const classes = useStyles();
  const backGround = status ? "bg-success" : "bg-danger";

  return (
    <div className={classes.root}>
      <div>
        <CardMedia
          className={classes.media}
          image={AmbulanceImage}
          title="Contemplative Reptile"
        />
        <div>
          <Button className={backGround}>
            {i18n.t("TrafficLight.1")}{" "}
            {status && (
              <span>
                {"::"}
                {i18n.t(`Second.${time}`)}
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AmbulanceCard;
