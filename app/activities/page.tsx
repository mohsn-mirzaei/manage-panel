"use client";

import Header from "@/app/components/Header";
import LoadingPage from "@/app/components/LoadingPage";
import NotFindPage from "@/app/components/NotFindPage";
import useActivities from "@/app/hooks/useActivites";

const ActivitiesPage = () => {
  const { data, isLoading, error } = useActivities();

  if (isLoading) return <LoadingPage />;

  if (error) return null;

  return (
    <>
      <Header title={data?.message} />
      {data?.activities.length !== 0 ? (
        <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-5">
          {data?.activities.map((activity) => (
            <li className="mb-10 ms-4" key={activity.start_date_time}>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-xs md:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {activity.start_date_time}
              </time>
              <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                {activity.comment1}
              </h3>
              <p className="text-xs md:text-sm font-normal text-gray-500 dark:text-gray-400">
                {activity.comment2}
              </p>
              <p className="text-xs md:text-sm">تعداد سکه: {activity.coin}</p>
            </li>
          ))}
        </ol>
      ) : (
        <NotFindPage title="فعالیتی دریافت نشد!" />
      )}
    </>
  );
};

export default ActivitiesPage;
