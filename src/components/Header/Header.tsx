import { AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { FC } from "react";

const useStyles = makeStyles({
  toolbar: {
    justifyContent: "center"
  }
});

const Header: FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky"> 
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">Books</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
