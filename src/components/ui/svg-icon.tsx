import type { ComponentPropsWithRef, ReactNode } from "react";

export type SVGIconProps = ComponentPropsWithRef<"svg"> & {
  children: ReactNode;
  height?: string;
  width?: string;
};

export const SVGIcon = ({
  children,
  height = "24px",
  width = "24px",
  ...rest
}: SVGIconProps) => {
  return (
    <svg
      className="text-current"
      fill="none"
      height={height}
      role="presentation"
      style={{
        clipRule: "evenodd",
        fillRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 1.4,
      }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      {...rest}
    >
      {children}
    </svg>
  );
};
