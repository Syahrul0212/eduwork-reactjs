/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const stickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    stickyHeader();
    return window.removeEventListener("scroll", stickyHeader);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location - 80,
      behavior: "smooth",
      left: 0,
    });
  };

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show_menu");
  };

  return (
    <header
      ref={headerRef}
      className="w-full h-[80px] leading-[80px] flex items-center"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/*=== Logo Start ===*/}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] flex items-center justify-center rounded-full bg-primaryColor text-white text-[18px] font-[500]">
              S
            </span>

            <div className="leading-[20px]">
              <h2 className="lg:text-xl text-[15px] text-smallTextColor font-[700]">
                Syahrul Hidayatullah
              </h2>
              <p className="text-smallTextColor text-[13px] lg:text-[18px] font-[500]">
                Personal
              </p>
            </div>
          </div>
          {/*=== Logo End ===*/}

          {/*=== Menu Start ===*/}
          <div ref={menuRef} onClick={toggleMenu} className="menu">
            <ul className="flex items-center gap-10">
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#experience"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
          {/*=== Menu End ===*/}

          {/*=== Menu Right ===*/}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[600] ease-in duration-700">
              <a href="https://wa.me/6282112653125?text=Pesan%20Anda%20disini">
                <i className="ri-send-plane-line"></i> Let's Talk
              </a>
            </button>
            <span
              onClick={toggleMenu}
              className="text-2xl text-smallTextColor md:hidden cursor-pointer"
            >
              <i className="ri-menu-line"></i>
            </span>
          </div>
          {/*=== Menu Right End ===*/}
        </div>
      </div>
    </header>
  );
};

export default Header;
