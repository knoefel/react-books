import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { FC, useEffect, useState } from "react";
import BookForm from "../BookForm/BookForm";
import { EditBookProps } from "./model";

const EditBook: FC<EditBookProps> = ({ show, onEdit, onClose, book }) => {
  const [updatedBook, setUpdatedBook] = useState();
  const [isBookFormValid, setIsBookFormValid] = useState(false);

  useEffect(() => {
    setUpdatedBook(book);
  }, [book]);

  const onSave = () => onEdit(updatedBook);

  return (
    <Dialog open={show} aria-labelledby="edit-book-dialog-title">
      <DialogTitle id="edit-book-dialog-title">Edit Book</DialogTitle>
      <DialogContent>
        <BookForm
          onChange={setUpdatedBook}
          initialValues={book}
          isValid={setIsBookFormValid}
        ></BookForm>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button disabled={!isBookFormValid} onClick={onSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditBook;
