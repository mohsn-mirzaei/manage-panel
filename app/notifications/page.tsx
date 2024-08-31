"use client";

import Header from "@/app/components/Header";
import LoadingPage from "@/app/components/LoadingPage";
import NotFindPage from "@/app/components/NotFindPage";
import NotificationTableBody from "@/app/components/notifications/NotificationTableBody";
import useNotification from "@/app/hooks/useNotifications";
import { Accordion, Table } from "flowbite-react";

const NotificationPage = () => {
  const { data, isLoading, error } = useNotification();

  if (isLoading) return <LoadingPage />;

  if (error) return null;

  const tableBody = data?.notifications.map((notif) => (
    <NotificationTableBody
      key={notif.date_time}
      description={notif.description}
      date_time={notif.date_time}
      subject={notif.subject}
    />
  ));

  const accordions = data?.notifications.map((accord) => (
    <Accordion.Panel key={accord.date_time}>
      <Accordion.Title className="text-xs sm:text-sm text-right">
        {accord.subject}
      </Accordion.Title>
      <Accordion.Content>
        <div className="flex">
          <div
            className="mb-2 text-gray-500 dark:text-gray-400"
            dir="rtl"
            dangerouslySetInnerHTML={{
              __html: accord.description || "",
            }}
          />
        </div>
        <p className="text-gray-500 text-xs">{accord.date_time}</p>
      </Accordion.Content>
    </Accordion.Panel>
  ));

  return (
    <>
      <Header title={"اعلان‌ها"} />
      {data?.notifications.length !== 0 ? (
        <div className="overflow-x-auto mt-5">
          <Table className="hidden md:table" dir="ltr">
            <Table.Head className="text-right">
              <Table.HeadCell>توضیحات</Table.HeadCell>
              <Table.HeadCell>تاریخ</Table.HeadCell>
              <Table.HeadCell>موضوع</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y text-right">{tableBody}</Table.Body>
          </Table>
          <Accordion className="md:hidden">
            {accordions ? accordions : <p>اعلان‌ها قابل نمایش نیستند!</p>}
          </Accordion>
        </div>
      ) : (
        <NotFindPage title="پیامی دریافت نشد!" />
      )}
    </>
  );
};

export default NotificationPage;
