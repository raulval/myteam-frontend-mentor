import { Error, Input, Label, TextArea } from "./styles";

interface FormInputProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  error?: string;
  register: any;
}

interface FormTextAreaProps {
  label: string;
  rows: number;
  name: string;
  placeholder: string;
  error?: string;
  register: any;
}

export const FormInput = ({
  label,
  type,
  name,
  placeholder,
  register,
  error,
}: FormInputProps) => {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input
        error={error}
        type={type}
        placeholder={placeholder}
        {...register}
      />
      <Error>{error && error}</Error>
    </div>
  );
};

export const FormTextArea = ({
  label,
  rows,
  placeholder,
  name,
  register,
  error,
}: FormTextAreaProps) => {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <TextArea
        rows={rows}
        error={error}
        placeholder={placeholder}
        {...register}
      />
      <Error>{error && error}</Error>
    </div>
  );
};
