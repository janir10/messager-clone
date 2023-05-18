"use client";

import clsx from "clsx";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import Link from "next/link";

interface DescktopItemProps {
  label: string;
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const DescktopItem: React.FC<DescktopItemProps> = ({
  label,
  icon: Icon,
  href,
  onClick,
  active,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };
  return (
    <li onClick={handleClick}>
      <Link
        href={href}
        className={clsx(
          `
      group
      flex
      gap-x-3
      rounded-md
      p-3
      text-sm
      loading-6
      font-semibold
      text-gray-500
      hover:text-black
      hover:bg-gray-100`,
          active && "bg-gray-100 text-black"
        )}
      >
        <Icon className="h-6 w-6 sheink-0" />
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  );
};

export default DescktopItem;
