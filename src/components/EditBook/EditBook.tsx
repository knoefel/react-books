import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { useState } from "react";
import { BookForm } from "../BookForm/BookForm";

export default function EditBook({ show, onEdit, onClose, book = {} }) {
  const [updatedBook, setUpdatedBook] = useState(book);
  const [isBookFormValid, setIsBookFormValid] = useState(false);

  const onSave = () => onEdit({ ...book, ...updatedBook });

  return (
    <div>
      <Dialog open={show} aria-labelledby="edit-book-dialog-title">
        <DialogTitle id="edit-book-dialog-title">Edit Book</DialogTitle>
        <DialogContent>
          <BookForm
            onChange={setUpdatedBook}
            initialValues={updatedBook}
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
    </div>
  );
}
