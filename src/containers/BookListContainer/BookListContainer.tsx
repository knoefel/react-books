import React, { FC } from "react";
import BookList from "../../components/BookList/BookList";
import { useGetAllBooks } from "../../hooks/BooksHooks";

const BookListContainer: FC = () => {
  const books = useGetAllBooks();

  return <BookList books={books}></BookList>;
};

export default BookListContainer;
