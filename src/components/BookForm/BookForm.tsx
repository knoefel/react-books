import { TextField } from "@material-ui/core";
import {
  entries,
  isNaN,
  isNumber,
  join,
  pipe,
  upperFirst,
  words
} from "lodash/fp";
import React, { FC, ReactText, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import BookResource from "../../resources/BookResource";
import { BookFormProps } from "./model";

const BookForm: FC<BookFormProps> = ({
  onChange,
  isValid,
  initialValues = getInitialValues()
}) => {
  const { id, ...initialFormValues } = initialValues;
  const [formValues, setFormValues] = useState(initialFormValues);
  const { register, formState, triggerValidation } = useForm({
    defaultValues: initialFormValues,
    mode: "onChange"
  });

  isValid(formState.isValid);

  useEffect(() => {
    triggerValidation();
  }, [triggerValidation]);

  const handleValueChange = ({
    target: { valueAsNumber, value, name }
  }: React.ChangeEvent<HTMLInputElement>) => {
    const isFormValid = formState.isValid;
    const editedFormValues = {
      ...(id ? { id } : {}),
      ...formValues,
      [name]: isNaN(valueAsNumber) ? value : valueAsNumber
    };

    isValid(isFormValid);
    setFormValues(editedFormValues);
    onChange(editedFormValues);
  };

  return (
    <form>
      {entries(initialFormValues).map(([key, value]) => (
        <TextField
          onChange={handleValueChange}
          inputRef={register({ required: true })}
          label={getLabelFromKey(key)}
          type={getTypeFromValue(value)}
          name={key}
          key={key}
          fullWidth
        ></TextField>
      ))}
    </form>
  );
};

export default BookForm;

const getInitialValues = (): Record<string, ReactText> => {
  const { title, author, totalAmount, pages, isbn } = new BookResource();

  return { title, author, totalAmount, pages, isbn };
};

const joinWithSpace = join(" ");
const getLabelFromKey = pipe(upperFirst, words, joinWithSpace);

const getTypeFromValue = (value: ReactText) =>
  isNumber(value) ? "number" : "text";
