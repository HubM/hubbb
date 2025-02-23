import { HTMLProps } from "react";
import { FiExternalLink } from "react-icons/fi";

export const ExternalLink = ({
  children,
  ...props
}: HTMLProps<HTMLAnchorElement>) => (
  <a
    className="inline-flex items-center w-fit text-teal-300 border-b-2 border-teal-200 print:text-black print:border-b-[1px] print:border-black"
    rel="noopener noreferrer"
    {...props}
  >
    {children}
    <FiExternalLink
      className="ml-2 w-5"
      title="(ouvrir dans un nouvel onglet)"
    />
  </a>
);
