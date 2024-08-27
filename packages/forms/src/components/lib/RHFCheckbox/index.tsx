import { FieldValues, Path, useController } from "react-hook-form";

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@repo/ui";

import { IOption } from "../types";

interface IRHFCheckboxProps<T extends FieldValues> {
  name: Path<T>;
  options?: IOption[];
  label: string;
}

export function RHFCheckbox<T extends FieldValues>({
  name,
  options,
  label,
}: IRHFCheckboxProps<T>) {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController<T>({ name });

  return (
    <FormControl error={!!error}>
      <FormLabel>{label}</FormLabel>
      <FormGroup>
        {options?.map(option => (
          <FormControlLabel
            control={
              <Checkbox
                checked={value.includes(option.id)}
                onChange={() => {
                  if (value.includes(option.id)) {
                    onChange(
                      (value as string[]).filter(item => item !== option.id)
                    );
                  } else {
                    onChange([...value, option.id]);
                  }
                }}
                key={option.id}
              />
            }
            label={option.label}
            key={option.id}
          />
        ))}
      </FormGroup>
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
}
