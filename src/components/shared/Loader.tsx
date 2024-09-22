import FadeLoader from "react-spinners/Fadeloader";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
    <FadeLoader
      color={"#020C29"}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </div>
);
};

export default Loader;