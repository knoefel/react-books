import { List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { FC } from "react";
import BookResource from "../../resources/BookResource";
import BookListItem from "../BookListItem/BookListItem";

const useStyles = makeStyles(theme => ({
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

const BookList: FC<{ books: BookResource[] }> = ({ books }) => {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      {books.map(book => (
        <BookListItem
          className={classes.listItem}
          key={book.pk()}
          book={book}
        ></BookListItem>
      ))}
    </List>
  );
};

export default BookList;
