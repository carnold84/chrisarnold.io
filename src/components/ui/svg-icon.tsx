import type { ReactNode } from "react";

export type SVGIconProps = {
  children: ReactNode;
  height?: string;
  width?: string;
};

export const SVGIcon = ({
  children,
  height = "24px",
  width = "24px",
}: SVGIconProps) => {
  return (
    <svg
      className="text-current"
      fill="none"
      height={height}
      style={{
        clipRule: "evenodd",
        fillRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 1.41421,
      }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
    >
      {children}
    </svg>
  );
};
