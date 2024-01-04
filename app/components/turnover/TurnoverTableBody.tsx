import { Table } from "flowbite-react";
import TurnoverStatusBadge from "./TurnoverStatusBadge";

interface Props {
  status_description: string;
  amount: string;
  date_time: string;
  reference_no: string;
  status: string;
}

const TurnoverTableBody = ({
  status_description,
  amount,
  date_time,
  reference_no,
  status,
}: Props) => {
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell dir="rtl">
        <TurnoverStatusBadge
          status={status}
          status_description={status_description}
        />
      </Table.Cell>
      <Table.Cell dir="rtl">
        <div className="flex items-center gap-1">
          {Number(amount).toLocaleString()}
          <p className="text-xs">تومان</p>
        </div>
      </Table.Cell>
      <Table.Cell>{date_time}</Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {reference_no}
      </Table.Cell>
    </Table.Row>
  );
};

export default TurnoverTableBody;
