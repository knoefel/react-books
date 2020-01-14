import { List } from "@material-ui/core";
import React, { FC, useState } from "react";
import BookResource from "../../resources/BookResource";
import BookListItem from "../BookListItem/BookListItem";
import EditBook from "../EditBook/EditBook";
import { useStyles } from "./styles";

const BookList: FC<{ books: BookResource[]; updateBook }> = ({
  books,
  updateBook
}) => {
  const classes = useStyles();

  const [showEditBook, setShowEditBook] = useState(false);
  const [editBook, setEditBook] = useState();

  const onClickEdit = (book: BookResource) => {
    setShowEditBook(true);
    setEditBook(book);
  };
  const onEdit = (book: BookResource) => {
    updateBook(book);

    resetState();
  };

  const resetState = () => {
    setShowEditBook(false);
    setEditBook(null);
  };

  return (
    <>
      <List className={classes.list}>
        {books.map(book => (
          <BookListItem
            className={classes.listItem}
            key={book.pk()}
            book={book}
            onClickEdit={onClickEdit}
          ></BookListItem>
        ))}
      </List>

      {showEditBook && (
        <EditBook
          show={showEditBook}
          book={editBook}
          onEdit={onEdit}
          onClose={resetState}
        ></EditBook>
      )}
    </>
  );
};

export default BookList;
