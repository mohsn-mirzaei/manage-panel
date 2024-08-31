import useUserInfo from "@/app/hooks/useUserInfo";
import { List } from "flowbite-react";

export default function Home() {
  useUserInfo();
  return (
    <div>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
        جزئیات وب سایت:
      </h5>
      <h6 className="text-gray-700 mb-2">
        پنل والدین شمشاد یک وب اپلیکیشن پویا و کارآمد است که به والدین این امکان
        را می‌دهد تا به صورت آنلاین اطلاعات مربوط به دانش آموزان خود را مدیریت و
        پیگیری نمایند. این وب سایت با توجه به نیازهای والدین و اهمیت هماهنگی
        موثر بین خانواده و{" "}
        <a
          href="https://shemshadgame.ir/"
          target="_blank"
          className="text-blue-600 font-bold"
        >
          بازی آموزش محور شمشاد
        </a>
        ، ویژگی های منحصر به فرد زیر را ارائه می‌دهد:
      </h6>
      <List>
        <List.Item>مشاهده اطلاعات دانش آموز</List.Item>
        <List.Item>دریافت اعلان ها</List.Item>
        <List.Item>نمایش گردش مالی همراه با جزئیات</List.Item>
        <List.Item>نمایش فعالیت های دانش آموز</List.Item>
        <List.Item>گفتگوی هوشمند</List.Item>
        <List.Item>سیستم تیکتینگ</List.Item>
      </List>
      <p className="text-gray-700 my-2">
        سورس کد دمو، در گیت‌هاب{" "}
        <a
          href="https://github.com/mohsn-mirzaei/manage-panel"
          className="text-blue-600 font-bold"
          target="_blank"
        >
          من
        </a>{" "}
        قابل مشاهده است.
      </p>
    </div>
  );
}
