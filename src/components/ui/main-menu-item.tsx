import type { MouseEvent as ReactMouseEvent } from "react";

import clsx from "clsx";

export interface MainMenuItemProps {
  isActive?: boolean;
  label: string;
  onClick: (routeId: string) => void;
  to: string;
}

export function MainMenuItem({ isActive, label, onClick, to }: MainMenuItemProps) {
  const handleClick = (event: ReactMouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    onClick(to);
  };

  return (
    <a
      className={clsx("font-display hover:text-text-500 text-sm font-normal lowercase", {
        "text-text-300": !isActive,
        "text-text-500": isActive,
      })}
      href={to}
      onClick={handleClick}
    >
      {label}
    </a>
  );
}
