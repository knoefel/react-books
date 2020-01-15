import React, { FC } from "react";
import BookList from "../../components/BookList/BookList";
import {
  useDeleteBook,
  useGetAllBooks,
  useUpdateBook
} from "../../hooks/BooksHooks";

const BookListContainer: FC = () => {
  const books = useGetAllBooks();
  const updateBook = useUpdateBook();
  const deleteBook = useDeleteBook();

  return (
    <BookList
      books={books}
      updateBook={({ id, ...values }) => updateBook({ id }, values)}
      deleteBook={({ id }) => deleteBook({ id }, undefined)}
    ></BookList>
  );
};

export default BookListContainer;
