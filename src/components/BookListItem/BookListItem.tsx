import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React, { FC } from "react";
import BookResource from "../../resources/BookResource";

const BookListItem: FC<{ book: BookResource; className: string; onClickEdit }> = ({
  book,
  className,
  onClickEdit
}) => {
  const handleClickEdit = () => onClickEdit(book);

  return (
    <ListItem classes={{ container: className }} button>
      <ListItemAvatar>
        <Avatar>{book.totalAmount}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={book.title} secondary={book.author} />
      <ListItemSecondaryAction>
        <IconButton onClick={handleClickEdit} edge="end" aria-label="edit">
          <EditIcon />
        </IconButton>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default BookListItem;
