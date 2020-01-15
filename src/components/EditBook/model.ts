import BookResource from "../../resources/BookResource";

export interface EditBookProps {
  show: boolean;
  onEdit: (book: BookResource) => void;
  onClose: () => void;
  book: BookResource;
}
