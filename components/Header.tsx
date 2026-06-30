"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Primary links for the top row
const TOP_LINKS = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT US" },
  { href: "/procurement", label: "PROCUREMENT" },
  { href: "/newsmedia", label: "NEWS & MEDIA" },
  { href: "/school", label: "TRAINING SCHS", mobileLabel: "TRAINING SCHOOLS" },
  { href: "/program", label: "PROG & EVENT" },
  { href: "/alumni", label: "ALUMNI" },
];

// Content links for the second row
const SUB_LINKS = [
  { href: "/sublink1", label: "NEW LINK 1" },
  { href: "/sublink2", label: "NEW LINK 2" },
  { href: "/sublink3", label: "NEW LINK 3" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Wrapper to hold both navigation tiers */}
      <div className="header-container">
        
        {/* ROW 1: Branding and Desktop Primary Nav */}
        <header className="header-main-row">
          <div className="logo-area">
            <Image 
              src="/image 2.jpg" 
              alt="Citizenship and Leadership Training Centre Logo" 
              width={55} 
              height={55} 
              priority
            />
            <div className="logo-text">
              Citizenship and<br />Leadership Training <br />Centre
            </div>
          </div>

          {/* Desktop Top Links */}
          <nav className="nav-menu">
            {TOP_LINKS.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={pathname === link.href ? "active" : ""}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="menu-toggle"
            id="menu-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </header>

        {/* ROW 2: Aligned Left, Fits Content Width (Hidden on mobile displays) */}
        <div className="header-sub-row">
          <nav className="sub-nav-menu">
            {SUB_LINKS.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={pathname === link.href ? "active-sub" : ""}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

      </div>

      {/* Mobile Slide-out Drawer Panel */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`} id="mobile-menu">
        <div className="mobile-menu-header">
          <button
            className="close-btn"
            id="close-btn"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <nav className="mobile-nav">
          {/* Top row links rendering inside mobile drawer */}
          {TOP_LINKS.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={closeMenu} 
              className={pathname === link.href ? "active" : ""}
            >
              {link.mobileLabel || link.label}
            </Link>
          ))}
          
          {/* Visual break element */}
          <div className="mobile-divider"></div>

          {/* Bottom row links rendering inside mobile drawer */}
          {SUB_LINKS.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={closeMenu} 
              className={pathname === link.href ? "active" : ""}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
