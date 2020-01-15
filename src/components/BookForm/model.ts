export interface BookFormProps {
  onChange: (values: Record<string, any>) => void;
  isValid: (isValid: boolean) => void;
  initialValues: Record<string, any>;
}
