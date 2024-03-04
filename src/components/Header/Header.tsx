"use client";

import Link from "next/link";
import Container from "../Container/Container";
import Image from "next/image";
import logo from "../../../public/images/logo/Logo.svg";
import styles from "./Header.module.scss";
import { FiSearch } from "react-icons/fi";
import { CgMenuRight } from "react-icons/cg";
import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { useWindowSize } from "usehooks-ts";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { width } = useWindowSize();
  const isSmallScreen = width < 1440;

  const toggleMenuOpen = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <Link href={"/"} className={styles.logo}>
          <Image src={logo} alt="logo" width={76} height={52} />
        </Link>

        <ul className={styles.headerIconsList}>
          <li key="searchIcon">
            <FiSearch
              style={{ width: "24px", height: "24px", color: "#fefefe" }}
              //   onClick={toggleMenuOpen}
              aria-label={
                isSearchOpen ? "Close Search Menu" : "Open Search Menu"
              }
            />
          </li>
          <li key="menuIcon">
            <CgMenuRight
              style={{
                width: "24px",
                height: "24px",
                color: "#fefefe",
              }}
              onClick={toggleMenuOpen}
              aria-label={
                isMobileMenuOpen ? "Close Mobile Menu" : "Open Mobile Menu"
              }
            />
          </li>
          {isSmallScreen && (
            <li
              key="burgerIcon"
              className={`${styles.iconsItem} ${
                isMobileMenuOpen && styles.menuOpen
              } ${styles.burgerItem}`}
            >
              <button
                type="button"
                className={styles.menuIcon}
                onClick={toggleMenuOpen}
                aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
              >
                <span></span>
              </button>
            </li>
          )}
        </ul>
        {/* Mobile menu */}
        <div
          className={`${styles.burgerMenu} ${
            isMobileMenuOpen && styles.isOpen
          }`}
        >
          <Navigation
          //   className={styles.mobileMenu}
          //   onClick={toggleMenuOpen}

          //   navDict={navDict}
          />
        </div>
      </Container>
    </header>
  );
};

export default Header;
