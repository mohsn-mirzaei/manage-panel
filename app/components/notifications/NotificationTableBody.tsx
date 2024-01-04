import { Table } from "flowbite-react";

interface Props {
  description?: string;
  date_time: string;
  subject: string;
}
const NotificationTableBody = ({ description, date_time, subject }: Props) => {
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell>
        <div
          dir="rtl"
          dangerouslySetInnerHTML={{
            __html: description || "",
          }}
        />
      </Table.Cell>
      <Table.Cell>{date_time}</Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {subject}
      </Table.Cell>
    </Table.Row>
  );
};

export default NotificationTableBody;
