"use client";

import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

import { generateNavLinks } from "./navData";

import styles from "./Navigation.module.scss";

interface MenuItem {
  title: string;
  link?: string;
  submenu?: MenuItem[];
}

interface NavigationProps {
  className?: string;
  onClick?: () => void;
}

export interface NavDictI {
  home: string;
  candles: string;
  soy: string;
  coconut: string;
  palm: string;
  createYourOwn: string;
  paymentAndDelivery: string;
  boxes: string;
}

const Navigation: React.FC<NavigationProps> = ({ className, onClick }) => {
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>(
    {}
  );
  const menuItems = generateNavLinks();

  const handleSubmenuClick = (title: string) => {
    setOpenSubmenus((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  const renderMenuItem = (item: MenuItem) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const submenuIsOpen = openSubmenus[item.title] || false;

    return (
      <li key={item.title}>
        {item.link ? (
          <Link href={item.link}>{item.title}</Link>
        ) : (
          <>
            <span onClick={() => handleSubmenuClick(item.title)}>
              {item.title} {hasSubmenu && <IoIosArrowDown />}
            </span>
            {hasSubmenu && submenuIsOpen && (
              <ul>
                {item.submenu!.map((subItem) => (
                  <li key={subItem.title}>
                    <Link href={subItem.link ?? "#"}>{subItem.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </li>
    );
  };

  return (
    <nav>
      <ul className={`${styles.navigationList} ${className || ""}`}>
        {menuItems.map((item) => renderMenuItem(item))}
      </ul>
    </nav>
  );
};

export default Navigation;
