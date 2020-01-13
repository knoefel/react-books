import { TextField } from "@material-ui/core";
import { entries } from "lodash/fp";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export function BookForm({ onChange, isValid, initialValues }) {
  const { id, ...defaultValues } = initialValues;
  const { register, formState, getValues } = useForm({
    defaultValues,
    mode: "onChange"
  });

  // setup validation using custom register -> https://github.com/react-hook-form/react-hook-form/issues/404#issuecomment-549657347
  useEffect(() => {
    entries(defaultValues).forEach(([name, value]: [string, any]) =>
      register({ name, value }, { required: true })
    );
  }, [register]);

  isValid(formState.isValid);

  const handleValueChange = () => {
    const updatedValues = getValues();
    const isFormValid = formState.isValid;

    isValid(isFormValid);

    if (isFormValid) {
      onChange({ id, ...updatedValues });
    }
  };

  return (
    <form>
      <TextField
        onChange={handleValueChange}
        inputRef={register}
        label="Title"
        name="title"
        type="text"
        fullWidth
      ></TextField>
      <TextField
        onChange={handleValueChange}
        inputRef={register}
        label="Author"
        name="author"
        type="text"
        fullWidth
      ></TextField>
      <TextField
        onChange={handleValueChange}
        inputRef={register}
        label="Total Amount"
        name="totalAmount"
        type="number"
        fullWidth
      ></TextField>
      <TextField
        onChange={handleValueChange}
        inputRef={register}
        label="Pages"
        name="pages"
        type="number"
        fullWidth
      ></TextField>
      <TextField
        onChange={handleValueChange}
        inputRef={register}
        label="ISBN"
        name="isbn"
        type="text"
        fullWidth
      ></TextField>
    </form>
  );
}
