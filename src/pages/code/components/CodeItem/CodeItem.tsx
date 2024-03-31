import { ReactNode } from "react";

import Github from "../../../../icons/Github";
import Link from "../../../../icons/Link";
import "./CodeItem.css";

const paddedNumber = (number: number) => {
  return number < 10 ? `0${number}` : number;
};

interface CardLinkProps {
  children: ReactNode;
  href: string;
  icon: ReactNode;
}

const CardLink = ({ children, href, icon }: CardLinkProps) => {
  return (
    <a
      className="flex items-center justify-center bg-transparent text-body lowercase text-text-400 hover:fill-text-500 hover:text-text-500 sm:inline-flex"
      href={href}
      rel="noopener"
      target="_blank"
    >
      {icon}
      <span className="ml-1.5">{children}</span>
    </a>
  );
};

interface Props {
  content: string;
  demoLink: string;
  number: number;
  repositoryLink: string;
  tags?: string;
  title: string;
}

const CodeItem = ({
  content,
  demoLink,
  number,
  repositoryLink,
  tags,
  title,
}: Props) => {
  return (
    <div className="code_item grid w-full border border-neutral-100 bg-neutral-50 p-10">
      <h3
        className="hidden shrink-0 font-display text-h4 text-text-200 lg:flex"
        style={{ gridArea: "number" }}
      >
        {paddedNumber(number)}.
      </h3>
      <h2
        className="mb-2 w-full shrink-0 font-display text-h4 lowercase text-text-500"
        style={{ gridArea: "header" }}
      >
        {title}
      </h2>
      <div
        className="mb-5 w-full text-body text-text-300"
        dangerouslySetInnerHTML={{ __html: content }}
        style={{ gridArea: "content" }}
      />
      {tags && (
        <p
          className="text-body lowercase text-text-400 sm:mb-5"
          style={{ gridArea: "meta" }}
        >
          <span className="text-text-tertiary">Tags:</span> {tags}
        </p>
      )}
      <div
        className="mt-8 flex justify-end gap-5"
        style={{ gridArea: "links" }}
      >
        {repositoryLink && repositoryLink !== "" && (
          <CardLink href={repositoryLink} icon={<Github />}>
            Code
          </CardLink>
        )}
        {demoLink && demoLink !== "" && (
          <CardLink href={demoLink} icon={<Link />}>
            Demo
          </CardLink>
        )}
      </div>
    </div>
  );
};

export default CodeItem;
