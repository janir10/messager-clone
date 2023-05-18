"use client";

import useRoutes from "@/app/hooks/useRoutes";
import { useState } from "react";
import DescktopItem from "./DescktopItem";
import { User } from "@prisma/client";
import getCurrentUser from "@/app/actions/getCurrentUser";
import Avatar from "../Avatar";
interface DesktopSidebarProps {
  currentUser: User;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ currentUser }) => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="
         hidden
         lg:fixed
         lg:inset-y-0
         lg:left-0
         lg:z-40
         lg:w-20
         xl:px-6
         lg:overflow-y-auto
         lg:bg-white
         lg:boder-r-[1px]
         lg:flex
         lg:flex-col
         justify-between
       "
    >
      <nav
        className="
        mt-4
        flex
        flex-col
        justify-between
        "
      >
        <ul
          role="list"
          className="
          flex
          flex-col
          items-center
          space-y-1
         "
        >
          {routes.map((item) => (
            <DescktopItem
              key={item.label}
              href={item.href}
              label={item.label}
              icon={item.icon}
              active={item.active}
              onClick={item.onCLick}
            />
          ))}
        </ul>
      </nav>
      <nav
        className="
            mt-4
            flex
            flex-col
            justify-between
            items-center
          "
      >
        <div
          onClick={() => setIsOpen(true)}
          className="
            cursor-pointer
            hover:opacity-75
            transation

          "
        >
          <Avatar user={currentUser} />
        </div>
      </nav>
    </div>
  );
};

export default DesktopSidebar;
