import { Badge } from "flowbite-react";

interface Props {
  date: string;
  usedDiamond: number;
}
const MessageFooter = ({ date, usedDiamond }: Props) => {
  return (
    <div className="flex justify-between mt-2 flex-col gap-2 sm:flex-row">
      <div className="flex items-center gap-1">
        <p className="text-gray-700 text-xs">تاریخ:</p>
        <p className="text-gray900 text-xs font-semibold">
          <Badge color="gray" className="w-fit">
            {date}
          </Badge>
        </p>
      </div>
      <div className="flex items-center gap-1">
        <p className="text-gray-700 text-xs">الماس مصرف شده:</p>
        <p className="text-red-500 text-xs font-semibold" dir="ltr">
          <Badge color="failure" className="w-fit">
            {usedDiamond}
          </Badge>
        </p>
      </div>
    </div>
  );
};

export default MessageFooter;
