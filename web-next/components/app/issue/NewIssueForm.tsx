import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../../ui/form/Input";
import { useEffect } from "react";

const FormSchema = z.object({
  submissionFee: z.number(),
});

export type NewIssueFormValues = {
  submissionFee: string;
};

type NewIssueFormProps = {
  onSubmit: (values: NewIssueFormValues) => Promise<void> | void;
  onChange: (values: NewIssueFormValues) => unknown;
};

export function NewIssueForm({ onSubmit, onChange }: NewIssueFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isValidating },
  } = useForm<NewIssueFormValues>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
  });

  const submissionFee = watch("submissionFee");

  useEffect(() => {
    if (!isValidating && isValid) {
      onChange({
        submissionFee,
      });
    }
  }, [submissionFee, isValid, isValidating]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="number"
        {...register("submissionFee", { valueAsNumber: true })}
        placeholder="Submission Fee"
        className="text-lg font-bold w-full border-0 focus:ring-0 px-0"
      />
    </form>
  );
}
