import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@repo/ui";
import { FieldValues, Path, useController } from "react-hook-form";
import { IOption } from "../types";

interface IRHFRadioGroupProps<T extends FieldValues> {
  name: Path<T>;
  options?: IOption[];
  label: string;
}

export function RHFRadioGroup<T extends FieldValues>({
  name,
  options,
  label,
}: IRHFRadioGroupProps<T>) {
  const {
    field,
    fieldState: { error },
  } = useController<T>({ name });

  return (
    <FormControl {...field} error={!!error}>
      <FormLabel>{label}</FormLabel>
      <RadioGroup>
        {options?.map(option => (
          <FormControlLabel
            value={option.id}
            control={<Radio checked={field.value === option.id} />}
            label={option.label}
            key={option.id}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
