"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="logo-area">
          <img src="/image 2.jpg" alt="Citizenship and Leadership Training Centre Logo" />
          <div className="logo-text">
            Citizenship and<br />Leadership Training <br />Centre
          </div>
        </div>

        <nav className="nav-menu">
          <Link href="/" className={pathname === "/" ? "active" : ""}>HOME</Link>
          <Link href="/about" className={pathname === "/about" ? "active" : ""}>ABOUT US</Link>
          <Link href="/procurement" className={pathname === "/procurement" ? "active" : ""}>PROCUREMENT</Link>
          <Link href="/newsmedia" className={pathname === "/newsmedia" ? "active" : ""}>NEWS & MEDIA</Link>
          <Link href="/school" className={pathname === "/school" ? "active" : ""}>TRAINING SCHS</Link>
          {/*<Link href="/coursecat" className={pathname === "/coursecat" ? "active" : ""}>COURSE CAT</Link>*/}
          <Link href="/program" className={pathname === "/program" ? "active" : ""}>PROG & EVENT</Link>
          <Link href="/alumni" className={pathname === "/alumni" ? "active" : ""}>ALUMNI</Link>
          {/*<Link href="/alumni" className={pathname === "/magazine" ? "active" : ""}>MAGAZINE</Link>*/}
          {/*<Link href="/login" className={pathname === "/login" ? "active" : ""}>LOGIN</Link>*/}
        </nav>

        <button
          className="menu-toggle"
          id="menu-toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`} id="mobile-menu">
        <div className="mobile-menu-header">
          <button
            className="close-btn"
            id="close-btn"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <nav className="mobile-nav">
          <Link href="/" onClick={handleLinkClick} className={pathname === "/" ? "active" : ""}>
            HOME
          </Link>
          <Link href="/about" onClick={handleLinkClick} className={pathname === "/about" ? "active" : ""}>
            ABOUT US
          </Link>
          <Link href="/procurement" onClick={handleLinkClick} className={pathname === "/procurement" ? "active" : ""}>
            PROCUREMENT
          </Link>
          <Link href="/newsmedia" onClick={handleLinkClick} className={pathname === "/newsmedia" ? "active" : ""}>
            NEWS & MEDIA
          </Link>
          <Link href="/school" onClick={handleLinkClick} className={pathname === "/school" ? "active" : ""}>
            TRAINING SCHOOLS
          </Link>
          {/*<Link href="/coursecat" onClick={handleLinkClick} className={pathname === "/coursecat" ? "active" : ""}>
            COURSE CAT
          </Link>*/}
          <Link href="/program" onClick={handleLinkClick} className={pathname === "/program" ? "active" : ""}>
            PROG & EVENT
          </Link>
          <Link href="/alumni" onClick={handleLinkClick} className={pathname === "/alumni" ? "active" : ""}>
            ALUMNI
          </Link>
          {/*<Link href="/magazine" onClick={handleLinkClick} className={pathname === "/magazine" ? "active" : ""}>
            MAGAZINE
          </Link>*/}
          {/*<Link href="/login" onClick={handleLinkClick} className={pathname === "/login" ? "active" : ""}>
            LOGIN
          </Link>*/}
        </nav>
      </div>
    </>
  );

}


