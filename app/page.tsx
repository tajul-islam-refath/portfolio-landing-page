"use client";

import Description from "@/components/Description";
import Landing from "@/components/Landing";
import Preloader from "@/components/Preloader";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main className="h-full w-full">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
    </main>
  );
}
