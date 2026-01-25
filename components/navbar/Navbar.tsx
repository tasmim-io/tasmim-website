"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLinks } from "./NavLinks";
import { MobileMenu } from "./MobileMenu";
import styles from "./Navbar.module.scss";

gsap.registerPlugin(ScrollTrigger);

export const Navbar = () => {
  const navbarRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const logoTextRef = useRef<HTMLSpanElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useGSAP(() => {
    const navbar = navbarRef.current;
    const container = containerRef.current;
    const nav = navRef.current;
    const logoText = logoTextRef.current;
    if (!navbar || !container || !nav || !logoText) return;

    const mm = gsap.matchMedia();

    // Changed from 600px to 768px as per plan
    mm.add("(min-width: 768px)", () => {
      // Use the hero section (50vh) as the trigger element - best practice approach
      const heroSection = document.getElementById("hero");
      if (!heroSection) return;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: heroSection,
            start: "bottom top", // When hero bottom reaches viewport top
            scrub: 1.2,
            end: "bottom top",
            toggleActions: "play none none reverse",
          },
          defaults: {
            duration: 0.5,
            ease: "power3.out",
          },
        })
        .to(logoText, { width: 0, opacity: 0, duration: 0.2 }, 0)
        .to(
          navbar,
          {
            width: 600,
            top: 16,
            borderRadius: 4,
            borderColor: "#2a2a2a",
          },
          0,
        )
        .to(container, { padding: "10px 16px" }, 0)
        .to(nav, { gap: 6 }, 0)
        .to(nav.children, { fontSize: "12px" }, 0);
    });
  }, []);

  return (
    <>
      <header ref={navbarRef} className={styles.navbar}>
        <div ref={containerRef} className={styles.container}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/tasmim-logo.svg"
              alt="TASMIM Logo"
              width={40}
              height={24}
              className={styles.logoImage}
            />
            <span ref={logoTextRef} className={styles.logoText}>
              TASMIM
            </span>
          </Link>

          {/* Desktop/Tablet Nav */}
          <div className={styles.desktopNavWrapper}>
            <NavLinks ref={navRef} />
          </div>

          {/* Hamburger Menu Toggle */}
          <button
            className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};
