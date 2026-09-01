"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // 1. Explicitly disable browser scroll restoration
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      // 2. Override default browser scroll restoration on refresh / page load
      window.scrollTo(0, 0);

      const handleBeforeUnload = () => {
        window.scrollTo(0, 0);
      };

      window.addEventListener("beforeunload", handleBeforeUnload);

      // 3. Ensure ScrollTrigger pin states recalculate at (0, 0)
      const timer = setTimeout(() => {
        window.scrollTo(0, 0);
        if (typeof window !== "undefined") {
          gsap.registerPlugin(ScrollTrigger);
          ScrollTrigger.refresh();
        }
      }, 50);

      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
        clearTimeout(timer);
      };
    }
  }, [pathname]);

  return null;
}
