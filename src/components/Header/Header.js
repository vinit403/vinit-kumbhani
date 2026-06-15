"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import styles from "./Header.module.scss";

export default function Header() {
  const [activeSection, setActiveSection] =
    useState("home");

  const [menuOpen, setMenuOpen] =
    useState(false);

  const scrollToSection = (id) => {
    const section =
      document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "skills",
      "resume",
      "portfolio",
      "contact",
    ];

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(
                entry.target.id
              );
            }
          });
        },
        {
          threshold: 0.4,
        }
      );

    sections.forEach((id) => {
      const section =
        document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    {
      id: "home",
      label: "Home",
    },
    {
      id: "about",
      label: "About",
    },
    {
      id: "skills",
      label: "Skills",
    },
    {
      id: "resume",
      label: "Experience",
    },
    {
      id: "portfolio",
      label: "Projects",
    },
    {
      id: "contact",
      label: "Contact",
    },
  ];

  return (
    <>
      <header className={styles.header}>
        <div
          className={styles.logo}
          onClick={() =>
            scrollToSection("home")
          }
        >
          <span>VK</span>
        </div>

        {/* Desktop Menu */}

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() =>
                scrollToSection(item.id)
              }
              className={`${styles.navLink}
              ${
                activeSection === item.id
                  ? styles.active
                  : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Icon */}

        <button
          className={styles.menuBtn}
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Mobile Sidebar */}

      <div
        className={`${styles.overlay}
        ${
          menuOpen
            ? styles.overlayShow
            : ""
        }`}
        onClick={() =>
          setMenuOpen(false)
        }
      />

      <div
        className={`${styles.mobileMenu}
        ${
          menuOpen
            ? styles.mobileMenuOpen
            : ""
        }`}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() =>
              scrollToSection(item.id)
            }
            className={`${styles.mobileLink}
            ${
              activeSection === item.id
                ? styles.activeMobile
                : ""
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
}