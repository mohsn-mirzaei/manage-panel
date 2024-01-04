import Skeleton from "react-loading-skeleton";

const SideBarSkeletons = () => {
  return (
    <div className="col-span-4 h-fit rounded-lg border-2 border-grade2 p-7 hidden lg:block">
      <div className="flex mb-2 p-4 flex-col">
        <div className="justify-center mb-5">
          <Skeleton />
        </div>
        <div className="items-center justify-between">
          <div className="flex ">
            <div className="w-12 h-12">
              <Skeleton />
            </div>
          </div>
        </div>
      </div>
      <ul>
        <div className="space-y-16">
          <div>
            <Skeleton count={5} />
          </div>
          <div>
            <Skeleton count={2} />
          </div>
        </div>
      </ul>
    </div>
  );
};

export default SideBarSkeletons;
