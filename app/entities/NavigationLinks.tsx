import { FaInfoCircle } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FiActivity } from "react-icons/fi";
import { AiFillWechat } from "react-icons/ai";

const NavigationLinks = () => {
  const userinfoLink = `/userinfo`;
  const notificationsLink = `/notifications`;
  const turnoverLink = `/turnover`;
  const activitiesLink = `/activities`;
  const chatsLink = `/chats`;
  const supportLink = `/support`;

  const links = [
    {
      id: 1,
      name: "اطلاعات فردی",
      icon: <FaInfoCircle color="#71717a" size={24} />,
      href: userinfoLink,
    },
    {
      id: 2,
      name: "اعلان‌ها",
      icon: <IoIosNotifications color="#71717a" size={24} />,
      href: notificationsLink,
    },
    {
      id: 3,
      name: "گردش مالی",
      icon: <FaMoneyBillTransfer color="#71717a" size={24} />,
      href: turnoverLink,
    },
    {
      id: 4,
      name: "فعالیت‌ها",
      icon: <FiActivity color="#71717a" size={24} />,
      href: activitiesLink,
    },
    {
      id: 5,
      name: "گفتگوی هوشمند",
      icon: <AiFillWechat color="#71717a" size={24} />,
      href: chatsLink,
    },
  ];
  return { links, supportLink };
};

export default NavigationLinks;
