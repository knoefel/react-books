import BookResource from "../../resources/BookResource";

export interface EditBookProps {
  show: boolean;
  book: BookResource;
  onEdit: (book: BookResource) => void;
  onClose: () => void;
}
