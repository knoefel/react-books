import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  list: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexWrap: "wrap"
    }
  },
  listItem: {
    [theme.breakpoints.up("md")]: {
      flexBasis: "50%"
    }
  }
}));
