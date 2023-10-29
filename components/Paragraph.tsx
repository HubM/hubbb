import { HTMLProps } from "react";

export function Paragraph({
  children,
  ref,
  className,
  ...props
}: HTMLProps<HTMLParagraphElement>) {
  return (
    <p className={`text-white print:text-black ${className || ""}`} {...props}>
      {children}
    </p>
  );
}
