import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  height?: string;
  width?: string;
}

const SVGIcon = ({ children, height = "24px", width = "24px" }: Props) => {
  return (
    <svg
      className="text-current"
      fill="none"
      height={height}
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
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

export default SVGIcon;
