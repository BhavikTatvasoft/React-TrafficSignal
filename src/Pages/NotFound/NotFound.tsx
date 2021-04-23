import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxHeight: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const NotFound: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Page Not Found!</h1>
    </div>
  );
};

export default NotFound;
