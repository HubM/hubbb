import { fontBody, fontTitle } from "@/utils/fonts";
import { HTMLProps } from "react";
import { match } from "ts-pattern";

export const Heading = ({
  level,
  className,
  children,
  ...props
}: HTMLProps<HTMLHeadingElement> & {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}) =>
  match(level)
    .with(1, () => (
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
    ))
    .with(2, () => (
      <h2
        {...props}
        className={`${
          fontBody.className
        } font-semibold leading-tight text-2xl ${className || ""}`}
      >
        {children}
      </h2>
    ))
    .with(3, () => (
      <h3
        {...props}
        className={`${fontBody.className} font-medium leading-tight text-xl ${
          className || ""
        }`}
      >
        {children}
      </h3>
    ))
    .with(4, () => <h4 className={`${className || ""}`}>{children}</h4>)
    .with(5, () => <h5 className={`${className || ""}`}>{children}</h5>)
    .with(6, () => <h6 className={`${className || ""}`}>{children}</h6>)
    .exhaustive();
