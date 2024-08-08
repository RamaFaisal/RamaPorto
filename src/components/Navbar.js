import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as Link1 } from "react-scroll";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  window.addEventListener("scroll", windowScroll);
  function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      if (navbar !== null) {
        navbar?.classList.add("is-sticky");
      }
    } else {
      if (navbar !== null) {
        navbar?.classList.remove("is-sticky");
      }
    }

    const mybutton = document.getElementById("back-to-top");
    if (mybutton != null) {
      if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        mybutton.classList.add("flex");
        mybutton.classList.remove("hidden");
      } else {
        mybutton.classList.add("hidden");
        mybutton.classList.remove("flex");
      }
    }
  }

  return (
    <nav className="navbar" id="navbar">
      <div className="container flex flex-wrap items-center justify-between">
        <Link to="/" className="navbar-brand md:me-8" href="index.html">
          <img
            src="/images/1.png"
            className="img inline-block dark:hidden"
            alt=""
          />
          <img
            src="/images/2.png"
            className="img hidden dark:inline-block"
            alt=""
          />
        </Link>

        <div className="nav-icons flex items-center lg_992:order-2 ms-auto md:ms-8">
          {/* <!-- Navbar Button --> */}
          {/* <!-- Navbar Collapse Manu Button --> */}
          <button
            data-collapse="menu-collapse"
            type="button"
            onClick={handleClick}
            className="collapse-btn inline-flex items-center ms-2 text-dark dark:text-white lg_992:hidden"
            aria-controls="menu-collapse"
            aria-expanded="false"
          >
            <span className="sr-only">Navigation Menu</span>
            <i className="mdi mdi-menu text-[24px]"></i>
          </button>
        </div>

        {/* <!-- Navbar Manu --> */}
        <div
          className={
            isActive
              ? "navigation lg_992:order-1 lg_992:flex ms-auto"
              : "navigation lg_992:order-1 lg_992:flex hidden ms-auto"
          }
          id="menu-collapse"
        >
          <ul className="navbar-nav" id="navbar-navlist">
            <li className="nav-item">
              <Link1
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Home
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                to="experience"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Experience
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                to="project"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Project
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                to="blog"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Article
              </Link1>
            </li>
            <li className="nav-item">
              <a
                href="https://wa.me/628984146699"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                WhatsApp
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.upwork.com/freelancers/~01aadb8dd758fcaf27?mp_source=share!"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                Upwork
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.linkedin.com/in/rama-faisal-muntaha-02b2b0320/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                Linkedin
              </a>
            </li>
            <li className="nav-item">
              <a
                href="mailto:helloramafaisal@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                Email Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
