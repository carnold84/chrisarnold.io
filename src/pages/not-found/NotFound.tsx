import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center">
      <h2 className="text-neutral-800">
        Huh? We couldn't find what you're looking for.
      </h2>
      <h3 className="text-neutral-600">
        Why not try <Link to="/">home</Link>?
      </h3>
    </div>
  );
};

export default NotFound;
