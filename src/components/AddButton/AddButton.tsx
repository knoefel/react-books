import { Fab, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { FC } from "react";
import { AddButtonProps } from "./model";

const useStyles = makeStyles(theme => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

const AddButton: FC<AddButtonProps> = ({ onClick }) => {
  const classes = useStyles();

  return (
    <Fab
      onClick={onClick}
      className={classes.fab}
      color="primary"
      aria-label="add"
    >
      <AddIcon />
    </Fab>
  );
};

export default AddButton;
