import BookResource from "../../resources/BookResource";

export interface BookListProps {
  books: BookResource[];
  updateBook: (book: BookResource) => void;
  deleteBook: (book: BookResource) => void;
}
