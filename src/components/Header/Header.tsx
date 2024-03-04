"use client";

import Link from "next/link";
import Container from "../Container/Container";
import Image from "next/image";
import logo from "../../../public/images/logo/Logo.svg";
import styles from "./Header.module.scss";
import { FiSearch } from "react-icons/fi";
import { CgMenuRight } from "react-icons/cg";
import { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import { IoCloseSharp } from "react-icons/io5";
import { useWindowSize } from "usehooks-ts";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { width } = useWindowSize();
  const isSmallScreen = width < 1440;

  useEffect(() => {
    const onEscKeydown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      window.addEventListener("keydown", onEscKeydown);
    } else {
      window.removeEventListener("keydown", onEscKeydown);
    }

    return () => {
      window.removeEventListener("keydown", onEscKeydown);
    };
  }, [isMobileMenuOpen]);

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

        {/* Desktop navigation */}
        {/* <Navigation className={styles.navbar} /> */}

        {isMobileMenuOpen ? (
          <IoCloseSharp
            style={{ width: "24px", height: "24px" }}
            className={`${styles.closeIcon} ${
              isMobileMenuOpen ? styles.fixed : ""
            }`}
            onClick={toggleMenuOpen}
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
          />
        ) : (
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
          </ul>
        )}

        {/* Mobile menu */}
        <div
          className={`${styles.burgerMenu} ${
            isMobileMenuOpen && styles.isOpen
          }`}
        >
          <Container>
            <Navigation
              className={styles.mobileMenu}
              onClick={toggleMenuOpen}
            />
          </Container>
        </div>
      </Container>
    </header>
  );
};

export default Header;
