import { HTMLProps } from "react";
import { FiExternalLink } from "react-icons/fi";

export function ExternalLink({
  children,
  ...props
}: HTMLProps<HTMLAnchorElement>) {
  return (
    <a
      className="inline-flex items-center w-fit text-teal-300 border-b-2 border-teal-200"
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
}
