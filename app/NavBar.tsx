"use client";

import Link from "next/link";
import Image from "next/image";
import NavigationLinks from "./entities/NavigationLinks";
import logo from "@/public/next.svg";
import useUserInfo from "./hook/useUserInfo";
import { usePathname, useRouter } from "next/navigation";
import { Dropdown, Navbar } from "flowbite-react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaCoins } from "react-icons/fa6";
import { IoDiamondSharp } from "react-icons/io5";

const NavBar = () => {
  const { data: userInfo, isLoading, error } = useUserInfo();
  const currentPath = usePathname();
  const router = useRouter();
  const { links, supportLink } = NavigationLinks();

  const linkItem = links.reverse().map((link) => (
    <Navbar.Link
      as={Link}
      key={link.id}
      href={link.href}
      active={link.href === currentPath}
    >
      {link.name}
    </Navbar.Link>
  ));

  if (isLoading || error) return null;

  return (
    <Navbar fluid rounded className="lg:hidden">
      <Navbar.Brand as={Link} href={links[0].href}>
        <Image
          src={logo}
          className="mr-3 h-6 sm:h-9 w-32"
          alt="Flowbite React Logo"
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={<IoPersonCircleOutline size={32} color="#424750" />}
        >
          <Dropdown.Header>
            <span className="block text-sm">{userInfo?.profile[0].name}</span>
            <span className="block truncate text-sm font-medium">
              {userInfo?.profile[0].mobile_number}
            </span>
          </Dropdown.Header>
          <Dropdown.Header className="space-y-2">
            <span className="flex gap-1 truncate text-sm font-medium">
              <IoDiamondSharp size={24} color="#b103fc" />
              {userInfo?.profile[0].diamond_remain}
            </span>
            <span className="flex gap-1 truncate text-sm font-medium">
              <FaCoins size={24} color="#fcd703" />
              {userInfo?.profile[0].coin_remain}
            </span>
          </Dropdown.Header>
          <Dropdown.Item onClick={() => router.push(supportLink)}>
            پشتیبانی
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>درباره</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse dir="ltr">{linkItem}</Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
