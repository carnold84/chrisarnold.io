import "./Loading.styles.css";

const Loading = () => {
  return (
    <div className="container">
      <div className="loader">
        <svg className="circle" viewBox="25 25 50 50">
          <circle
            className="path"
            cx="50"
            cy="50"
            r="15"
            fill="none"
            stroke-width="3"
            stroke-miterlimit="10"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loading;
