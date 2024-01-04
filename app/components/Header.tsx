import { Button } from "flowbite-react";

interface Props {
  title?: string;
  buttonTitle?: string;
  onClick?: () => void;
}

const Header = ({ title, buttonTitle, onClick }: Props) => {
  return (
    <div className="border-b-2 border-grade2 pb-2 flex justify-between items-center">
      <p className="text-sm font-semibold text-gray-800">{title}</p>
      {buttonTitle && (
        <Button className="whitespace-nowrap" size="xs" onClick={onClick}>
          {buttonTitle}
        </Button>
      )}
    </div>
  );
};

export default Header;
