import { fontBody, fontTitle } from "@/utils/fonts";
import { HTMLProps } from "react";

export default function Heading({
  level,
  className,
  children,
  ...props
}: HTMLProps<HTMLHeadingElement> & {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}) {
  switch (level) {
    case 1:
      return (
        <h1
          {...props}
          className={`${
            fontTitle.className
          } w-fit leading-tight text-8xl p-5 -ml-5 italic relative z-10 animate-fontWeight print:animate-none print:font-semibold print:text-6xl print:mb-6 ${
            className || ""
          }`}
        >
          {children}
        </h1>
      );
    case 2:
      return (
        <h2
          {...props}
          className={`${
            fontBody.className
          } font-semibold leading-tight text-2xl ${className || ""}`}
        >
          {children}
        </h2>
      );
    case 3:
      return (
        <h3
          {...props}
          className={`${fontBody.className} font-medium leading-tight text-xl ${
            className || ""
          }`}
        >
          {children}
        </h3>
      );
    case 4:
      return <h4 className={`${className || ""}`}>{children}</h4>;
    case 5:
      return <h5 className={`${className || ""}`}>{children}</h5>;
    case 6:
      return <h6 className={`${className || ""}`}>{children}</h6>;
    default:
      throw Error(`Unknown heading level: ${level}`);
  }
}
