import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-3">
      <h2 className="text-h4 text-text-500">
        Huh? We couldn't find what you're looking for.
      </h2>
      <h3 className="text-h5 text-text-300">
        Why not try{" "}
        <Link
          className="text-text-300 underline decoration-text-300 decoration-dotted decoration-1 underline-offset-4 hover:text-text-500 hover:decoration-text-500"
          to="/"
        >
          home
        </Link>
        ?
      </h3>
    </div>
  );
};

export default NotFound;
