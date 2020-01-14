import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React, { FC } from "react";
import { BookListItemProps } from "./model";

const BookListItem: FC<BookListItemProps> = ({
  book,
  className,
  onClickEdit,
  onClickDelete
}) => {
  const handleClickEdit = () => onClickEdit(book);
  const handleClickDelete = () => onClickDelete(book);

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
        <IconButton onClick={handleClickDelete} edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default BookListItem;
