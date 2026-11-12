import type { AnchorHTMLAttributes, MouseEvent } from "react";

import { useNavigate } from "../router.hooks";

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
  replace?: boolean;
};

export function Link({ to, replace, onClick, target, ...rest }: LinkProps) {
  const navigate = useNavigate();

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      (target && target !== "_self")
    ) {
      return; // let the browser handle new-tab / modified clicks
    }
    e.preventDefault();
    navigate(to, { replace });
  }

  return <a href={to} target={target} onClick={handleClick} {...rest} />;
}
