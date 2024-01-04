import Skeleton from "react-loading-skeleton";

const UserInfoSkeletons = () => {
  return (
    <>
      <Skeleton />
      <div className="flex flex-col py-5 md:flex-row md:gap-11">
        <div className="flex flex-col itc md:w-1/2 md:border-l-2 md:border-grade2 md:px-11 md:justify-center">
          <Skeleton count={3} />
        </div>
        <div className="flex flex-col md:w-1/2">
          <Skeleton count={3} />
        </div>
      </div>
      <div className="flex justify-end">
        <Skeleton />
      </div>
    </>
  );
};

export default UserInfoSkeletons;
