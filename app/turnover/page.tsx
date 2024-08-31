"use client";

import Header from "@/app/components/Header";
import LoadingPage from "@/app/components/LoadingPage";
import NotFindPage from "@/app/components/NotFindPage";
import TurnoverCard from "@/app/components/turnover/TurnoverCard";
import TurnoverTableBody from "@/app/components/turnover/TurnoverTableBody";
import useTurnover from "@/app/hooks/useTurnover";
import { Table } from "flowbite-react";

const TurnoverPage = () => {
  const { data, isLoading, error } = useTurnover();
  if (isLoading) return <LoadingPage />;

  if (error) return null;

  const tableBody = data?.turnover.map((transaction) => (
    <TurnoverTableBody
      key={transaction.date_time}
      status_description={transaction.status_description}
      amount={transaction.amount}
      date_time={transaction.date_time}
      reference_no={transaction.reference_no}
      status={transaction.status}
    />
  ));

  const infoCards = data?.turnover.map((transaction) => (
    <TurnoverCard
      key={transaction.date_time}
      status_description={transaction.status_description}
      amount={transaction.amount}
      date_time={transaction.date_time}
      reference_no={transaction.reference_no}
      status={transaction.status}
    />
  ));

  return (
    <>
      <Header title={"گردش مالی"} />
      {data?.turnover.length !== 0 ? (
        <div className="overflow-x-auto mt-5">
          <Table dir="ltr" className="hidden md:table">
            <Table.Head className="text-right">
              <Table.HeadCell>وضعیت</Table.HeadCell>
              <Table.HeadCell>مبلغ</Table.HeadCell>
              <Table.HeadCell>تاریخ</Table.HeadCell>
              <Table.HeadCell>شماره پیگیری</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y text-right">{tableBody}</Table.Body>
          </Table>
          {infoCards}
        </div>
      ) : (
        <NotFindPage title="پیامی دریافت نشد!" />
      )}
    </>
  );
};

export default TurnoverPage;
