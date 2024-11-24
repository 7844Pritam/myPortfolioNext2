"use client";

import { useEffect, useState } from "react";
import { Link as LinkScroll, scroller } from "react-scroll";
import dynamic from "next/dynamic";

const menuItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "project", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function CreateMenus({ activeLink, getMenuItems, setActiveLink }) {
  return getMenuItems.map((item) => (
    <LinkScroll
      key={item.id}
      activeClass="active"
      to={item.id}
      spy={true}
      smooth={true}
      duration={1000}
      onSetActive={() => setActiveLink(item.id)}
      className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative
        ${
          activeLink === item.id
            ? "text-middle animation-active shadow-[#181617]"
            : "text-middle font-bold hover:text-secondary"
        }
      `}
    >
      {item.label}
    </LinkScroll>
  ));
}

function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-30 bg-primary transition-all ${
          scrollActive ? "shadow-md pt-0" : "pt-4"
        }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4 bg-primary">
          <div className="col-start-1 col-end-2 flex items-center">
            <div className="cursor-pointer flex gap-2 font-bold items-center text-[20px] text-middle ">
              <div className="w-[40px] h-[40px] flex justify-center items-center p-3  border-middle bg-middle">
                <span className="text-white-300 text-[25px] font-bold">P</span>
              </div>
              Pritam
            </div>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-middle items-center">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
            />
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-center items-center">
            <button
              onClick={() =>
                scroller.scrollTo("contact", {
                  duration: 1500,
                  delay: 100,
                  smooth: true,
                })
              }
              className="py-3 px-6 border-[2px] bg-secondary border-primary text-middle font-semibold rounded-lg text-xl tracking-widest hover:shadow-green-md transition-all outline-none"
            >
              Contact Me
            </button>
          </div>
        </nav>
      </header>

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20  shadow-t">
        <div className="bg-primary sm:px-0">
          <ul className="overflow-x-auto flex w-full justify-between items-center text-middle">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
            />
          </ul>
        </div>
      </nav>
    </>
  );
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
