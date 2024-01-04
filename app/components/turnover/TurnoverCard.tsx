import { Card } from "flowbite-react";
import InformationItem from "../InformationItem";
import TurnoverStatusBadge from "./TurnoverStatusBadge";

interface Props {
  status_description: string;
  amount: string;
  date_time: string;
  reference_no: string;
  status: string;
}

const TurnoverCard = ({
  status_description,
  amount,
  date_time,
  reference_no,
  status,
}: Props) => {
  return (
    <Card key={date_time} className="md:hidden mb-3">
      <InformationItem title="شماره پیگیری" subTitle={reference_no} />
      <InformationItem title="تاریخ" subTitle={date_time} />
      <InformationItem
        title="مبلغ"
        subTitle={`${Number(amount).toLocaleString()} تومان`}
      />
      <InformationItem
        title="وضعیت"
        badgeChild={
          <TurnoverStatusBadge
            status={status}
            status_description={status_description}
          />
        }
      />
    </Card>
  );
};

export default TurnoverCard;
