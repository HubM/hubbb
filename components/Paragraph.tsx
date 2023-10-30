import { HTMLProps } from "react";

export function Paragraph({
  children,
  ref,
  className,
  ...props
}: HTMLProps<HTMLParagraphElement>) {
  return (
    <p
      className={`text-white print:text-black transition-opacity opacity-60 hover:opacity-95 print:transition-none print:opacity-95 ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </p>
  );
}
