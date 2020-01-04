import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { FC } from "react";
import BookResource from "../../resources/BookResource";

const BookListItem: FC<{ book: BookResource; className: string }> = ({ 
  book,
  className
}) => {
  return (
    <ListItem classes={{ container: className }} button>
      <ListItemAvatar>
        <Avatar>{book.totalAmount}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={book.title} secondary={book.author} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default BookListItem;
