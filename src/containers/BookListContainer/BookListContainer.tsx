import React, { FC, useState } from "react";
import AddButton from "../../components/AddButton/AddButton";
import BookList from "../../components/BookList/BookList";
import CreateBook from "../../components/CreateBook/CreateBook";
import {
  useBookSubscription,
  useCreateBook,
  useDeleteBook,
  useGetAllBooks,
  useUpdateBook
} from "../../hooks/books";
import BookResource from "../../resources/BookResource";

const BookListContainer: FC = () => {
  const books = useGetAllBooks();
  const createBook = useCreateBook();
  const updateBook = useUpdateBook();
  const deleteBook = useDeleteBook();

  const [showCreateBook, setShowCreateBook] = useState(false);

  const onCreateBook = (book: Partial<BookResource>) =>
    createBook({}, book).then(() => setShowCreateBook(false));

  useBookSubscription();

  return (
    <>
      <BookList
        books={books}
        updateBook={({ id, ...values }) => updateBook({ id }, values)}
        deleteBook={({ id }) => deleteBook({ id }, undefined)}
      ></BookList>

      <AddButton onClick={() => setShowCreateBook(true)}></AddButton>

      <CreateBook
        show={showCreateBook}
        onCreate={onCreateBook}
        onClose={() => setShowCreateBook(false)}
      ></CreateBook>
    </>
  );
};

export default BookListContainer;
