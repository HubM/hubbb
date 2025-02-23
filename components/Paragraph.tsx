import { HTMLProps } from "react";

export const Paragraph = ({
  children,
  ref,
  className,
  ...props
}: HTMLProps<HTMLParagraphElement>) => (
  <p
    className={`text-white print:text-black transition-opacity opacity-60 hover:opacity-95 print:transition-none print:opacity-95 ${
      className || ""
    }`}
    {...props}
  >
    {children}
  </p>
);
