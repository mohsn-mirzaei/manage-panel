import classNames from "classnames";
import { Badge } from "flowbite-react";

interface Props {
  status: string;
  status_description: string;
}

const TurnoverStatusBadge = ({ status, status_description }: Props) => {
  return (
    <Badge
      color={classNames({
        success: status === "1",
        failure: status === "2",
      })}
      className="w-fit text-xs md:text-sm whitespace-nowrap"
    >
      {status_description}
    </Badge>
  );
};

export default TurnoverStatusBadge;
