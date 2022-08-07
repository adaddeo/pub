import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../ui/form/Input";
import { BodyInput } from "../ui/form/FeatureInput";

const FormSchema = z.object({
  title: z.string().trim().min(1, "can't be empty"),
  body: z.any(),
});

type FormValues = {
  title: string;
  body: string;
};

type SubmitFormProps = {
  onSubmit: (values: FormValues) => Promise<void> | void;
};

export function SubmitForm({ onSubmit }: SubmitFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(FormSchema) });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="border p-6">
        {/* <div className="mb-4">
          <Input
            type="text"
            {...register("title")}
            placeholder="Title"
            className="text-lg font-bold w-full border-0 focus:ring-0 px-0"
          />
        </div> */}
        <Controller
          control={control}
          name="body"
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { invalid, isTouched, isDirty, error },
          }) => (
            <BodyInput
              onChange={(event) => onChange(event.state.doc.toJSON())}
            />
          )}
        />
      </div>

      <div className="mt-4">
        <button>Preview</button>
      </div>
    </form>
  );
}
