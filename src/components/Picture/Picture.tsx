import { useEffect, useRef, useState } from "react";

import Loading from "../Loading";

interface Props {
  alt?: string;
  height?: number;
  url: string;
  width?: number;
}

const Picture = ({ alt = "", height, url, width }: Props) => {
  const [scaledHeight, setScaledHeight] = useState("60px");
  const [isLoading, setIsLoading] = useState(true);
  const [opacity, setOpacity] = useState(0);
  const elWrapper = useRef<HTMLDivElement>(null);
  const elImage = useRef<HTMLImageElement>(null);

  const updateHeight = (height: number, width: number) => {
    if (elWrapper.current) {
      const ratio = height / width;
      const bounds = elWrapper.current.getBoundingClientRect();
      setScaledHeight(`${bounds.width * ratio}px`);
    }
  };

  useEffect(() => {
    if (elWrapper.current && height && width) {
      updateHeight(height, width);
    }
  }, [elWrapper, height, width]);

  const onImageLoaded = () => {
    if (elImage.current) {
      updateHeight(elImage.current.height, elImage.current.width);
      setOpacity(1);
      setIsLoading(false);
    }
  };

  const onResize = () => {
    if (elImage.current && elWrapper.current) {
      const ratio = elImage.current.height / elImage.current.width;
      const bounds = elWrapper.current.getBoundingClientRect();
      setScaledHeight(`${bounds.width * ratio}px`);
    }
  };

  useEffect(() => {
    if (elImage.current) {
      elImage.current.src = url;
    }

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [url]);

  return (
    <div className="w-ful flex items-center justify-center" ref={elWrapper}>
      {isLoading && (
        <div className="absolute flex h-full w-full items-center justify-center">
          <Loading />
        </div>
      )}
      <div
        className="w-full"
        style={{
          height: scaledHeight,
          opacity,
          transition: !isLoading ? "height 500ms ease-in-out" : undefined,
        }}
      >
        <img
          className="transition-opacity duration-500 ease-in-out"
          alt={alt}
          onLoad={onImageLoaded}
          ref={elImage}
          style={{ opacity }}
        />
      </div>
    </div>
  );
};

export default Picture;
