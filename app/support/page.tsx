"use client";

import Header from "@/app/components/Header";
import InformationItem from "@/app/components/InformationItem";
import LoadingPage from "@/app/components/LoadingPage";
import NotFindPage from "@/app/components/NotFindPage";
import useTickets from "@/app/hook/useTickets";
import classNames from "classnames";
import { Badge, Button, Card, Table } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SupportPage = ({ params }: { params: { token: string } }) => {
  const { data, isLoading, error } = useTickets();
  const router = useRouter();

  if (isLoading) return <LoadingPage />;

  if (error) return null;

  const tableBody = data?.tickets.map((ticket) => (
    <Table.Row
      key={ticket.date_time}
      className="bg-white dark:border-gray-700 dark:bg-gray-800"
    >
      <Table.Cell>
        <Link href={`/support/${ticket.ticket_no}`} className="text-sm">
          <Button color="gray" size="xs">
            مشاهده
          </Button>
        </Link>
      </Table.Cell>
      <Table.Cell>{ticket.date_time}</Table.Cell>
      <Table.Cell dir="rtl">
        <Badge
          color={classNames({
            indigo: ticket.status === "1",
            gray: ticket.status === "0",
            purple: ticket.status === "2",
          })}
          className="w-fit"
        >
          {ticket.status_description}
        </Badge>
      </Table.Cell>
      <Table.Cell>{ticket.subject}</Table.Cell>
      <Table.Cell>{ticket.ticket_no}</Table.Cell>
    </Table.Row>
  ));

  const messageCard = data?.tickets.map((ticket) => (
    <Card key={ticket.date_time} className="md:hidden mb-3">
      <InformationItem title="شماره تیکت" subTitle={ticket.ticket_no} />
      <InformationItem title="موضوع" subTitle={ticket.subject} />
      <InformationItem
        title="وضعیت"
        badgeChild={
          <Badge
            color={classNames({
              indigo: ticket.status === "1",
              gray: ticket.status === "0",
              purple: ticket.status === "2",
            })}
            className="w-fit text-xs md:text-sm"
          >
            {ticket.status_description}
          </Badge>
        }
      />
      <InformationItem title="آخرین بروزرسانی" subTitle={ticket.date_time} />
      <InformationItem
        title="جزئیات"
        badgeChild={
          <Link href={`/support/${ticket.ticket_no}`}>
            <Button color="gray" size="xs">
              مشاهده
            </Button>
          </Link>
        }
      />
    </Card>
  ));

  return (
    <>
      <Header
        title={data?.message}
        buttonTitle="ارسال تیکت"
        onClick={() => router.push(`/support/newticket/${params.token}`)}
      />

      {data?.tickets.length !== 0 ? (
        <div className="overflow-x-auto mt-5">
          <Table dir="ltr" className="hidden md:table">
            <Table.Head className="text-right">
              <Table.HeadCell>جزئیات</Table.HeadCell>
              <Table.HeadCell>آخرین بروزرسانی</Table.HeadCell>
              <Table.HeadCell>وضعیت</Table.HeadCell>
              <Table.HeadCell>موضوع</Table.HeadCell>
              <Table.HeadCell>شماره تیکت</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y text-right">{tableBody}</Table.Body>
          </Table>
          {messageCard}
        </div>
      ) : (
        <NotFindPage title="تیکتی دریافت نشد!" />
      )}
    </>
  );
};

export default SupportPage;
