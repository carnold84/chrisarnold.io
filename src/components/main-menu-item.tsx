import clsx from "clsx";
import type { MouseEvent as ReactMouseEvent } from "react";

export interface MainMenuItemProps {
  isActive?: boolean;
  label: string;
  onClick: (routeId: string) => void;
  to: string;
}

export const MainMenuItem = ({
  isActive,
  label,
  onClick,
  to,
}: MainMenuItemProps) => {
  const handleClick = (
    event: ReactMouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    onClick(to);
  };

  return (
    <a
      className={clsx(
        "font-display text-sm font-normal lowercase hover:text-text-500",
        {
          "text-text-300": !isActive,
          "text-text-500": isActive,
        },
      )}
      href={to}
      onClick={handleClick}
    >
      {label}
    </a>
  );
};
