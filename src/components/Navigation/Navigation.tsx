"use client";

import { useState } from "react";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import { generateNavLinks } from "./navData";

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
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const menuItems = generateNavLinks();

  const handleSubmenuClick = (title: string) => {
    setOpenSubmenu((prevOpenSubmenu) =>
      prevOpenSubmenu === title ? null : title
    );
  };

  const renderMenuItem = (item: MenuItem) => {
    return (
      <li key={item.title}>
        {item.link ? (
          <Link href={item.link}>{item.title}</Link>
        ) : (
          <>
            <span onClick={() => handleSubmenuClick(item.title)}>
              {item.title}
            </span>
            {item.submenu && openSubmenu === item.title && (
              <ul>
                {item.submenu.map((subItem) => (
                  <li key={subItem.title}>
                    <Link href={item.link ?? "#"}>{subItem.title}</Link>
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
