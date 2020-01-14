import React, { FC } from "react";
import BookList from "../../components/BookList/BookList";
import { useGetAllBooks, useUpdateBook } from "../../hooks/BooksHooks";
import BookResource from "../../resources/BookResource";

const BookListContainer: FC = () => {
  const books = useGetAllBooks();
  const updateBook = useUpdateBook();

  return (
    <BookList
      books={books}
      updateBook={(book: BookResource) => updateBook(book, book)}
    ></BookList>
  );
};

export default BookListContainer;
