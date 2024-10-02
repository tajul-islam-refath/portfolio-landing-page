"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "@/common/Magnetic";
import { AnimatePresence } from "framer-motion";
import RoundedButton from "@/common/RoundedButton";

function index() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef<any>(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(
            button.current,
            { scale: 0, duration: 0.25, ease: "power1.out" },
            setIsActive(false)
          );
        },
      },
    });
  }, []);
  return (
    <>
      <div
        ref={header}
        className="absolute flex z-10 top-0 text-white p-9 justify-between w-full font-light box-border items-center"
      >
        <div className="flex cursor-pointer group">
          <p className="m-0 transition-all duration-500 ease-[cubic-bezier(0.76, 0, 0.24, 1)] group-hover:rotate-360">
            ©
          </p>
          <div className="flex relative overflow-hidden whitespace-nowrap ml-1 transition-all duration-500 ease-[cubic-bezier(0.76, 0, 0.24, 1)] group-hover:pr-[30px] ">
            <p className="relative transition-transform duration-500 ease-[cubic-bezier(0.76, 0, 0.24, 1)] group-hover:-translate-x-full">
              Code by
            </p>
            <p className='"relative transition-transform duration-500 ease-[cubic-bezier(0.76, 0, 0.24, 1)] pl-[0.3em] group-hover:-translate-x-[65px]'>
              Tajul
            </p>
            <p className="absolute left-[120px] transition-transform duration-500 ease-[cubic-bezier(0.76, 0, 0.24, 1)]  group-hover:-translate-x-[85px]">
              Islam Refath
            </p>
          </div>
        </div>
        <div className="nav flex items-center">
          <Magnetic>
            <div className="el flex flex-col relative z-1 p-4 cursor-pointer group">
              <a>Work</a>
              <div className="indicator absolute w-[5px] h-[5px] top-[45px] left-1/2 bg-white rounded-full scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76, 0, 0.24, 1)] group-hover:scale-100"></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className="el flex flex-col relative z-1 p-4 cursor-pointer group">
              <a>About</a>
              <div className="indicator absolute w-[5px] h-[5px] top-[45px] left-1/2 bg-white rounded-full scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76, 0, 0.24, 1)] group-hover:scale-100"></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className="el flex flex-col relative z-1 p-4 cursor-pointer group">
              <a>Contact</a>
              <div className="indicator absolute w-[5px] h-[5px] top-[45px] left-1/2 bg-white rounded-full scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76, 0, 0.24, 1)] group-hover:scale-100"></div>
            </div>
          </Magnetic>
        </div>
      </div>
      <div ref={button} className={`fixed right-0 z-10 transform scale-0`}>
        <RoundedButton
          onClick={() => setIsActive(!isActive)}
          className="relative m-5 w-[80px] h-[80px] rounded-full bg-[#1C1D20] cursor-pointer flex items-center justify-center"
        >
          <div
            className={`relative w-full z-10 ${isActive ? "burgerActive" : ""}`}
          >
            <div className="before:content-[''] before:block before:h-[1px] before:w-[40%] before:m-auto before:bg-white before:text-white before:relative before:top-1 before:transition-transform after:content-[''] after:block after:h-[1px] after:w-[40%] after:m-auto after:bg-white after:relative after:top-[-5px] after:transition-transform "></div>
          </div>
        </RoundedButton>
      </div>
      {/* <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence> */}
    </>
  );
}

export default index;
