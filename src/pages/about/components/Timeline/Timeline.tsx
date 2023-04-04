const Timeline = () => {
  return (
    <div className="flex h-full flex-col items-center">
      <div className="relative flex h-8 w-8 items-center justify-center">
        <div className="absolute h-8 w-8 rounded-full border-2 border-dashed border-neutral-200"></div>
        <div className="absolute h-4 w-4 rounded-full bg-neutral-300"></div>
      </div>
      <div className="grow border-l-2 border-dashed border-neutral-200"></div>
    </div>
  );
};

export default Timeline;
