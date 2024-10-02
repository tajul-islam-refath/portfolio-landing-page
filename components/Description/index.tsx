import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "../../common/RoundedButton";

export default function index() {
  const phrase =
    "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <div
      ref={description}
      className="flex justify-center px-[200px] my-[200px]"
    >
      <div className="flex gap-[50px] relative max-w-[1400px]">
        <p className="m-0 text-[36px] gap-2 leading-[1.3]">
          {phrase.split(" ").map((word, index) => {
            return (
              <span
                key={index}
                className="relative inline-flex overflow-hidden mask mr-[3px]"
              >
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p
          variants={opacity}
          animate={isInView ? "open" : "closed"}
          className="text-[18px] font-light w-[80%]"
        >
          The combination of my passion for design, code & interaction positions
          me in a unique place in the web design world.
        </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
          <Rounded className="absolute top-[80%] left-[calc(100%-200px)] w-[180px] h-[180px] bg-[#1C1D20] text-white rounded-full flex items-center justify-center cursor-pointer">
            <p className="m-0 text-[16px] font-light relative z-[1]">
              About me
            </p>
          </Rounded>
        </div>
      </div>
    </div>
  );
}
