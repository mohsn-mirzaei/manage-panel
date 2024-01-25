"use client";

import { Button } from "flowbite-react";
import Header from "@/app/components/Header";
import InformationItem from "@/app/components/InformationItem";
import "react-loading-skeleton/dist/skeleton.css";

import useUserInfo from "@/app/hooks/useUserInfo";
import UserInfoSkeletons from "@/app/components/skeletons/UserInfoSkeletons";

const UserInfoPage = () => {
  const { data: userInfo, isLoading, error } = useUserInfo();

  if (isLoading) return <UserInfoSkeletons />;

  if (error) return null;

  return (
    <>
      <Header title="اطلاعات فردی" />
      <div className="flex flex-col py-5 md:flex-row md:gap-11">
        <div className="flex flex-col itc md:w-1/2 md:border-l-2 md:border-grade2 md:px-11 md:justify-center">
          <InformationItem
            title="نام و نام خانوادگی:"
            subTitle={userInfo?.profile[0]?.name}
          />
          <InformationItem
            title="جنسیت:"
            subTitle={
              userInfo?.profile[0]?.gender === "female" ? "دختر" : "پسر"
            }
          />
          <InformationItem
            title="پایه تحصیلی:"
            subTitle={userInfo?.profile[0]?.grade_name}
          />
        </div>
        <div className="flex flex-col md:w-1/2">
          <InformationItem
            title="تاریخ تولد:"
            subTitle={userInfo?.profile[0]?.birthday}
          />
          <InformationItem
            title="شماره موبایل:"
            subTitle={userInfo?.profile[0]?.mobile_number}
          />
          <InformationItem
            title="وضعیت اشتراک:"
            subTitle={userInfo?.profile[0]?.plan_expire}
          />
        </div>
      </div>
      <div className="flex">
        <Button className="whitespace-nowrap" size="xs">
          ویرایش اطلاعات
        </Button>
      </div>
    </>
  );
};

export default UserInfoPage;
