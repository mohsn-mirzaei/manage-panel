import { Spinner } from "flowbite-react";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <Spinner aria-label="Extra large spinner example" size="xl" />
    </div>
  );
};

export default LoadingPage;
