"use client";
import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { slideUp } from "./animation";
import { motion } from "framer-motion";

export default function index() {
  const firstText = useRef<any>(null);
  const secondText = useRef<any>(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className="relative flex h-screen overflow-hidden"
    >
      <Image
        src="/images/background.jpg"
        fill={true}
        alt="background"
        className="object-cover"
      />
      <div className="absolute top-[calc(100vh-350px)]">
        <div ref={slider} className="relative whitespace-nowrap">
          <p
            ref={firstText}
            className="relative m-0 text-white text-[230px] font-[500] pr-[50px]"
          >
            Frontend Developer -
          </p>
          <p
            ref={secondText}
            className="absolute left-full top-0 m-0 text-white text-[230px] font-[500] pr-[50px]"
          >
            Frontend Developer -
          </p>
        </div>
      </div>
      <div
        data-scroll
        data-scroll-speed={0.1}
        className="absolute top-[35%] left-[65%] text-white text-[24px] font-[300]"
      >
        <svg
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transform scale-150 mb-[100px]"
        >
          <path
            d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
            fill="white"
          />
        </svg>
        <p className="m-0 mb-[10px]">Frontend Developer</p>
        <p className="m-0 mb-[10px]">Designer & Developer</p>
      </div>
    </motion.main>
  );
}
