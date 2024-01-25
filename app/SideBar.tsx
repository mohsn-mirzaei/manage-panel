"use client";

import logo from "@/public/next.svg";
import Image from "next/image";
import Link from "next/link";
import NavigationLinks from "./entities/NavigationLinks";
import useUserInfo from "./hook/useUserInfo";

import { usePathname } from "next/navigation";
import { FaCoins } from "react-icons/fa6";
import { IoDiamondSharp, IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { linkColor } from "./entities/activeColor";

import "react-loading-skeleton/dist/skeleton.css";
import SideBarSkeletons from "./components/skeletons/SideBarSkeletons";

const SideBar = () => {
  const { data: userInfo, isLoading, error } = useUserInfo();
  const currentPath = usePathname();
  const { links, supportLink } = NavigationLinks();

  if (error) return null;

  if (isLoading) return <SideBarSkeletons />;

  const linkItem = links.map((link) => (
    <Link href={link.href} key={link.id}>
      <li className="flex items-center pb-2 text-xs font-semibold">
        <div className={linkColor(link.href, currentPath)}>
          {link.icon}
          <span className="text-zinc-600">{link.name}</span>
        </div>
      </li>
    </Link>
  ));

  return (
    <div className="col-span-4 h-fit rounded-lg border-2 border-grade2 p-7 hidden lg:block">
      <div className="flex mb-2 p-4 flex-col">
        <div className="flex justify-center mb-5">
          <Image src={logo} alt="logo" className="w-36" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12">
              <IoPersonCircleOutline size={48} color="#424750" />
            </div>
            <div className="flex flex-col mr-2 gap-2 justify-around">
              <p className="whitespace-nowrap text-s font-semibold text-gray-700">
                {userInfo?.profile[0]?.name}
              </p>
              <p className="text-lowEmphText text-xs font-normal text-gray-700">
                {userInfo?.profile[0]?.mobile_number}
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <div className="flex items-center gap-1">
            <FaCoins size={24} color="#fcd703" />
            <p className="text-gray-700">{userInfo?.profile[0]?.coin_remain}</p>
          </div>
          <div className="flex items-center gap-1">
            <IoDiamondSharp size={24} color="#b103fc" />
            <p className="text-gray-700">
              {userInfo?.profile[0]?.diamond_remain}
            </p>
          </div>
        </div>
      </div>
      <ul>
        <div className="space-y-16">
          {linkItem}
          <div>
            <Link href={supportLink}>
              <li className="flex items-center pb-2 text-xs font-semibold">
                <div className={linkColor(supportLink, currentPath)}>
                  <MdOutlineSupportAgent color="#71717a" size={24} />
                  <span className="text-zinc-600">پشتیبانی</span>
                </div>
              </li>
            </Link>
            <Link href="/">
              <li className="flex items-center pb-2 text-xs font-semibold">
                <div className={linkColor("/", currentPath)}>
                  <RiLogoutBoxRFill color="#71717a" size={24} />
                  <span className="text-zinc-600">بازگشت به بازی</span>
                </div>
              </li>
            </Link>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
