import { TextField, TextFieldProps } from "@repo/ui";
import { FieldValues, Path, useController } from "react-hook-form";

type IRHFTextFieldProps<T extends FieldValues> = {
  name: Path<T>;
} & Pick<TextFieldProps, "label">;

export function RHFTextField<T extends FieldValues>({
  name,
  ...props
}: IRHFTextFieldProps<T>) {
  const {
    field,
    fieldState: { error },
  } = useController<T>({ name });

  return (
    <TextField
      {...field}
      {...props}
      error={!!error}
      helperText={error?.message}
    />
  );
}
