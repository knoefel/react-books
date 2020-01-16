import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { FC, useState } from "react";
import BookForm from "../BookForm/BookForm";
import { CreateBookProps } from "./model";

const CreateBook: FC<CreateBookProps> = ({ show, onCreate, onClose }) => {
  const [newBook, setNewBook] = useState();
  const [isBookFormValid, setIsBookFormValid] = useState(false);

  const onSave = () => onCreate(newBook);

  return (
    <Dialog open={show} aria-labelledby="create-book-dialog-title">
      <DialogTitle id="create-book-dialog-title">Create Book</DialogTitle>
      <DialogContent>
        <BookForm
          onChange={setNewBook}
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

export default CreateBook;
