import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React, { FC } from "react";
import { BookListItemProps } from "./model";

const useStyles = makeStyles(theme => ({
  listItemText: {
    paddingRight: theme.spacing(4)
  }
}));

const BookListItem: FC<BookListItemProps> = ({
  book,
  className,
  onClickEdit,
  onClickDelete
}) => {
  const handleClickEdit = () => onClickEdit(book);
  const handleClickDelete = () => onClickDelete(book);

  const classes = useStyles();

  return (
    <ListItem classes={{ container: className }} button>
      <ListItemAvatar>
        <Avatar>{book.totalAmount}</Avatar>
      </ListItemAvatar>
      <ListItemText
        className={classes.listItemText}
        primary={book.title}
        secondary={book.author}
      />
      <ListItemSecondaryAction>
        <IconButton onClick={handleClickEdit} edge="end" aria-label="edit">
          <EditIcon />
        </IconButton>
        <IconButton onClick={handleClickDelete} edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default BookListItem;
