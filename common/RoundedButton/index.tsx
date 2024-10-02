import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Magnetic from "../Magnetic";
import { cn } from "@/utils/cn";

export default function index({
  children,
  backgroundColor = "#455CE9",
  className,
  ...attributes
}: any) {
  const circle = useRef(null);
  let timeline = useRef<any>(null);
  let timeoutId: string | number | NodeJS.Timeout | null | undefined = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className={cn(
          "rounded-full border border-gray-500 cursor-pointer relative flex items-center justify-center",
          className
        )}
        style={{ overflow: "hidden" }}
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        {...attributes}
      >
        {children}
        <div
          ref={circle}
          style={{ backgroundColor }}
          className="w-full h-[150%] absolute rounded-full top-full"
        ></div>
      </div>
    </Magnetic>
  );
}
