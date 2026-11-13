import { GitHub } from "@/icons/git-hub";
import { Link } from "@/icons/link";

import { CardLink } from "./card-link";

const paddedNumber = (number: number) => {
  return number < 10 ? `0${number}` : number;
};

export type CodeItemProps = {
  content: string;
  demoLink: string;
  number: number;
  repositoryLink: string;
  tags?: string;
  title: string;
};

export const CodeItem = ({
  content,
  demoLink,
  number,
  repositoryLink,
  tags,
  title,
}: CodeItemProps) => {
  return (
    <div className="grid w-full grid-cols-1 grid-rows-[auto_1fr_auto_40px] border border-neutral-100 bg-neutral-50 p-10 lg:grid-cols-[60px_1fr]">
      <h3 className="hidden shrink-0 font-display text-h4 text-text-200 lg:col-start-1 lg:row-span-4 lg:row-start-1 lg:flex">
        {paddedNumber(number)}.
      </h3>
      <h2 className="row-start-1 mb-2 w-full shrink-0 font-display text-h4 text-text-500 lowercase lg:col-start-2">
        {title}
      </h2>
      <div
        className="row-start-2 mb-5 w-full text-body text-text-300 lg:col-start-2"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {tags && (
        <p className="row-start-3 text-body text-text-400 lowercase sm:mb-5 lg:col-start-2">
          <span className="text-text-tertiary">Tags:</span> {tags}
        </p>
      )}
      <div className="row-start-4 mt-8 flex justify-end gap-5 lg:col-start-2">
        {repositoryLink && repositoryLink !== "" && (
          <CardLink href={repositoryLink} icon={<GitHub />}>
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
