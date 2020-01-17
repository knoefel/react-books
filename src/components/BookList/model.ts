import BookResource from "../../resources/BookResource";

export interface BookListProps {
  books: BookResource[];
  updateBook: (book: BookResource) => Promise<BookResource>;
  deleteBook: (book: BookResource) => void;
}
