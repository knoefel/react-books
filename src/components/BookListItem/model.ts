import BookResource from "../../resources/BookResource";

export interface BookListItemProps {
  book: BookResource;
  className: string;
  onClickEdit: (book: BookResource) => void;
  onClickDelete: (book: BookResource) => void;
}
