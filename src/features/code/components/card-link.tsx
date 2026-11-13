import type { ReactNode } from "react";

export type CardLinkProps = {
  children: ReactNode;
  href: string;
  icon: ReactNode;
};

export const CardLink = ({ children, href, icon }: CardLinkProps) => {
  return (
    <a
      className="flex items-center justify-center bg-transparent text-body text-text-400 lowercase hover:fill-text-500 hover:text-text-500 sm:inline-flex"
      href={href}
      rel="noopener"
      target="_blank"
    >
      {icon}
      <span className="ml-1.5">{children}</span>
    </a>
  );
};
