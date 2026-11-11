import { type AnchorHTMLAttributes, type MouseEvent } from "react";

import { navigate } from "../router.utils";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  replace?: boolean;
  to: string;
}

export function Link({ to, replace, onClick, target, ...rest }: LinkProps) {
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
