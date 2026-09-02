"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  const isCoursesActive =
    isActive("/all-courses") ||
    isActive("/online-courses") ||
    isActive("/courses") ||
    isActive("/coursecat") ||
    pathname.startsWith("/course");

  const handleLinkClick = () => {
    setMenuOpen(false);
    setCoursesDropdownOpen(false);
    setMobileCoursesOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setCoursesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          <Link href="/" className={isActive("/") ? "active" : ""}>HOME</Link>
          <Link href="/about" className={isActive("/about") ? "active" : ""}>ABOUT US</Link>
          <Link href="/procurement" className={isActive("/procurement") ? "active" : ""}>PROCUREMENT</Link>
          <Link href="/newsmedia" className={isActive("/newsmedia") ? "active" : ""}>NEWS & MEDIA</Link>
          <Link href="/school" className={isActive("/school") ? "active" : ""}>TRAINING SCHS</Link>
          
          <div
            className={`nav-dropdown ${coursesDropdownOpen ? "open" : ""}`}
            ref={dropdownRef}
            onMouseEnter={() => setCoursesDropdownOpen(true)}
            onMouseLeave={() => setCoursesDropdownOpen(false)}
          >
            <button
              type="button"
              className={`dropdown-trigger ${isCoursesActive ? "active" : ""}`}
              onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
              aria-expanded={coursesDropdownOpen}
              aria-haspopup="true"
            >
              COURSES <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div className="dropdown-menu">
              <Link
                href="/all-courses"
                onClick={handleLinkClick}
                className={isActive("/all-courses") ? "active" : ""}
              >
                ALL COURSES
              </Link>
              <Link
                href="/online-courses"
                onClick={handleLinkClick}
                className={isActive("/online-courses") ? "active" : ""}
              >
                ONLINE COURSES
              </Link>
            </div>
          </div>

          <Link href="/program" className={isActive("/program") ? "active" : ""}>PROG & EVENT</Link>
          <Link href="/alumni" className={isActive("/alumni") ? "active" : ""}>ALUMNI</Link>
          <Link href="/magazine" className={isActive("/magazine") ? "active" : ""}>MAGAZINE</Link>
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
          <Link href="/" onClick={handleLinkClick} className={isActive("/") ? "active" : ""}>
            HOME
          </Link>
          <Link href="/about" onClick={handleLinkClick} className={isActive("/about") ? "active" : ""}>
            ABOUT US
          </Link>
          <Link href="/procurement" onClick={handleLinkClick} className={isActive("/procurement") ? "active" : ""}>
            PROCUREMENT
          </Link>
          <Link href="/newsmedia" onClick={handleLinkClick} className={isActive("/newsmedia") ? "active" : ""}>
            NEWS & MEDIA
          </Link>
          <Link href="/school" onClick={handleLinkClick} className={isActive("/school") ? "active" : ""}>
            TRAINING SCHOOLS
          </Link>
          
          <div className="mobile-dropdown">
            <button
              type="button"
              className={`mobile-dropdown-btn ${isCoursesActive ? "active" : ""} ${mobileCoursesOpen ? "open" : ""}`}
              onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
              aria-expanded={mobileCoursesOpen}
            >
              COURSES <i className="fa-solid fa-chevron-down"></i>
            </button>
            {mobileCoursesOpen && (
              <div className="mobile-dropdown-menu open">
                <Link
                  href="/all-courses"
                  onClick={handleLinkClick}
                  className={isActive("/all-courses") ? "active" : ""}
                >
                  ALL COURSES
                </Link>
                <Link
                  href="/online-courses"
                  onClick={handleLinkClick}
                  className={isActive("/online-courses") ? "active" : ""}
                >
                  ONLINE COURSES
                </Link>
              </div>
            )}
          </div>

          <Link href="/program" onClick={handleLinkClick} className={isActive("/program") ? "active" : ""}>
            PROG & EVENT
          </Link>
          <Link href="/alumni" onClick={handleLinkClick} className={isActive("/alumni") ? "active" : ""}>
            ALUMNI
          </Link>
          <Link href="/magazine" onClick={handleLinkClick} className={isActive("/magazine") ? "active" : ""}>
            MAGAZINE
          </Link>
          {/*<Link href="/login" onClick={handleLinkClick} className={pathname === "/login" ? "active" : ""}>
            LOGIN
          </Link>*/}
        </nav>
      </div>
    </>
  );
}

