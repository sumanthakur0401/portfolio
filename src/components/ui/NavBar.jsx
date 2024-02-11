import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NavBar({ sectionRefs }) {
  const navBar = useRef(null);
  const logo = useRef(null);
  const cta = useRef(null);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  useEffect(() => {
    tl.to(navBar.current, {
      y: 0,
      duration: 3,
      delay: 0.5,
      ease: "power4.inOut",
    });
  });


  useEffect(() => {
    sectionRefs.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 375px",
        end: "bottom 300px",
        // markers: true,
        animation: gsap
          .timeline()
          .to(navBar.current, { color: "#FCF1FF" })
          .to(cta.current, { backgroundColor: "#FCF1FF", color: "#1E0126" }, 0)
          .to(".bg-secondary-100", { backgroundColor: "#1E0126" }, 0),

        toggleActions: "restart reverse restart reverse",
      });
    });

  });

  return (
    <header
      ref={navBar}
      className="fixed top-0 z-50 flex w-full -translate-y-full items-center justify-between bg-secondary-100 px-5 py-3"
    >
      {/* logo */}
      <a href="#hero" aria-label="Logo" className="z-50">
        <svg
          ref={logo}
          width="80"
          height="45"
          viewBox="0 0 121 45"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m4.2,28.1c-1.84-1.37-2.83-3.32-2.98-5.86h7.31c.07.86.33,1.49.77,1.89.44.4,1.02.59,1.71.59.63,0,1.15-.16,1.56-.47.41-.32.61-.75.61-1.31,0-.72-.34-1.28-1.01-1.68-.68-.4-1.77-.84-3.29-1.33-1.61-.54-2.91-1.05-3.9-1.56-.99-.5-1.85-1.24-2.59-2.2s-1.1-2.23-1.1-3.8.4-2.95,1.19-4.08c.79-1.13,1.89-1.99,3.29-2.57,1.4-.58,2.99-.88,4.76-.88,2.87,0,5.16.67,6.88,2.01,1.71,1.34,2.63,3.23,2.75,5.65h-7.46c-.02-.75-.25-1.31-.68-1.68-.43-.37-.99-.56-1.66-.56-.51,0-.93.15-1.26.45-.33.3-.49.74-.49,1.3,0,.47.18.87.54,1.21.36.34.81.63,1.35.88.54.25,1.33.55,2.38.93,1.56.54,2.85,1.07,3.87,1.59,1.02.53,1.89,1.26,2.62,2.21s1.1,2.14,1.1,3.59-.37,2.79-1.1,3.96-1.8,2.09-3.19,2.76c-1.39.68-3.03,1.02-4.92,1.02-2.87,0-5.23-.68-7.07-2.05Z"/><path d="m27.12,5.23v14.31c0,1.33.31,2.36.93,3.08.62.72,1.56,1.08,2.82,1.08s2.21-.37,2.85-1.1c.64-.74.96-1.75.96-3.06V5.23h6.86v14.31c0,2.26-.48,4.19-1.44,5.79-.96,1.6-2.26,2.8-3.9,3.6s-3.47,1.21-5.48,1.21-3.8-.4-5.37-1.21c-1.58-.8-2.81-2-3.71-3.59-.9-1.59-1.35-3.52-1.35-5.81V5.23h6.83Z"/><path d="m70.28,5.23v24.67h-6.86v-13.62l-4.66,13.62h-5.74l-4.69-13.72v13.72h-6.86V5.23h8.29l6.2,16.03,6.05-16.03h8.26Z"/><path d="m87.43,25.88h-8.75l-1.33,4.03h-7.21l9-24.67h7.91l8.96,24.67h-7.24l-1.33-4.03Zm-1.71-5.25l-2.66-7.98-2.62,7.98h5.29Z"/><path d="m118.75,29.91h-6.86l-9.13-13.79v13.79h-6.86V5.23h6.86l9.13,13.96V5.23h6.86v24.67Z"/>
        </svg>
      </a>
      <nav className=" space-x-7 font-grotesk text-body-3 sm:block">
        <a href="#about" className="group relative hidden md:inline-block">
          <span>about</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#services" className="group relative hidden md:inline-block">
          <span>services</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#works" className="group relative hidden md:inline-block">
          <span>projects</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a
          ref={cta}
          className="button group relative hover:bg-transparent"
          href="#contact"
        >
          <span className="relative w-fit">
            <span className="absolute bottom-2 h-[0.15em] w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
            <span>Contact</span>
          </span>
        </a>
      </nav>
    </header>
  );
}
