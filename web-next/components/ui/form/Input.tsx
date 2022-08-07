import { forwardRef, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

// eslint-disable-next-line react/display-name
export const Input = forwardRef((props: InputProps, ref) => {
  return (
    <input
      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300"
      {...props}
      ref={ref}
    />
  );
});
