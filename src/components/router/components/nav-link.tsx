import type { ReactNode } from "react";

import { useIsActive } from "../router.hooks";
import { Link, type LinkProps } from "./link";

export type NavLinkProps = Omit<LinkProps, "className" | "style" | "children"> & {
  children?: ReactNode | ((state: { isActive: boolean }) => ReactNode);
  className?: string | ((state: { isActive: boolean }) => string | undefined);
  end?: boolean;
  style?: LinkProps["style"] | ((state: { isActive: boolean }) => LinkProps["style"]);
};

/** A Link that knows whether it's active. Sets aria-current="page" when it is. */
export function NavLink({ to, end = true, className, style, children, ...rest }: NavLinkProps) {
  const isActive = useIsActive(to, { end });
  const state = { isActive };

  return (
    <Link
      to={to}
      aria-current={isActive ? "page" : undefined}
      className={
        typeof className === "function"
          ? className(state)
          : [className, isActive && "active"].filter(Boolean).join(" ") || undefined
      }
      style={typeof style === "function" ? style(state) : style}
      {...rest}
    >
      {typeof children === "function" ? children(state) : children}
    </Link>
  );
}
