import { ReactText } from "react";
import BookResource from "../../resources/BookResource";

export interface BookFormProps {
  onChange: (values: BookResource | Record<string, ReactText | undefined>) => void;
  isValid: (isValid: boolean) => void;
  initialValues?: BookResource | Record<string, ReactText | undefined>;
}
