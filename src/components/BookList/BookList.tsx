import { List } from "@material-ui/core";
import React, { FC, useState } from "react";
import BookResource from "../../resources/BookResource";
import BookListItem from "../BookListItem/BookListItem";
import EditBook from "../EditBook/EditBook";
import { BookListProps } from "./model";
import { useStyles } from "./styles";

const BookList: FC<BookListProps> = ({ books, updateBook, deleteBook }) => {
  const classes = useStyles();

  const [showEditBook, setShowEditBook] = useState(false);
  const [editBook, setEditBook] = useState();

  const onClickEdit = (book: BookResource) => {
    setShowEditBook(true);
    setEditBook(book);
  };
  const onClickDelete = (book: BookResource) => deleteBook(book);

  const onEdit = (book: BookResource) => 
    updateBook(book).then(() => setShowEditBook(false))
  ;

  return (
    <>
      <List className={classes.list}>
        {books.map(book => (
          <BookListItem
            className={classes.listItem}
            key={book.pk()}
            book={book}
            onClickEdit={onClickEdit}
            onClickDelete={onClickDelete}
          ></BookListItem>
        ))}
      </List>

      <EditBook
        show={showEditBook}
        book={editBook}
        onEdit={onEdit}
        onClose={() => setShowEditBook(false)}
      ></EditBook>
    </>
  );
};

export default BookList;
