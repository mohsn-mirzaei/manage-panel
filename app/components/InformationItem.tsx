import { ReactNode } from "react";

interface Props {
  title?: string;
  subTitle?: string;
  badgeChild?: ReactNode;
}
const InformationItem = ({ title, subTitle, badgeChild }: Props) => {
  return (
    <div className="flex justify-between pt-7 pb-2 border-b-2 border-grade2">
      <div className="flex gap-4 w-full justify-between md:flex-col">
        <p className="text-xs md:text-sm font-normal text-gray-700">{title}</p>
        {badgeChild ? (
          badgeChild
        ) : (
          <p className="text-xs md:text-sm font-semibold text-gray-700">
            {subTitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default InformationItem;
