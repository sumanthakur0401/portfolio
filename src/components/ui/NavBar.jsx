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
          width="105"
          height="45"
          viewBox="0 0 292 100"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m0,24v24l23.7.2c21.7.3,23.8.5,24.1,2,.3,1.7-1.3,1.8-23.7,1.8H0v48h292v-52h-48V0H0v24Zm96,1.5v22.5h-45V3h45v22.5Zm48,0v22.5h-45v-21.8c0-12,.3-22.2.7-22.5.3-.4,10.5-.7,22.5-.7h21.8v22.5Zm48.8.2l.2,22.3h-45V3l22.3.2,22.2.3.3,22.2Zm48.2-.2v22.5h-45V3h45v22.5ZM30.2,15.7c1,.9,1.8,2.2,1.8,3,0,1.8-3.6,1.7-4.4-.2-.8-2.1-6.2-2-7,.1-.9,2.3.7,3.9,5.4,5.3,5.1,1.5,7.4,4.8,6.1,8.4-2.1,5.4-9.5,6.4-13.9,1.9l-2.7-2.7,2.4-.3c1.5-.2,2.8.3,3.3,1.2,1.9,3.4,8.8.8,7.5-2.8-.3-.8-2.3-2-4.4-2.6-2.1-.7-4.6-1.9-5.5-2.8-2.3-1.9-2.3-6-.1-8.4,2.1-2.3,8.9-2.4,11.5-.1Zm65.8,58.8v22.5h-45v-45h45v22.5Zm48,0v22.5l-22.2-.2-22.3-.3-.3-22.3-.2-22.2h45v22.5Zm48.8-.3l-.3,22.3-22.2.3-22.3.2v-45h45l-.2,22.2Zm48.2.3v22.5h-45v-45h45v22.5Zm48,0v22.5h-45v-45h45v22.5ZM31,63.5c0,1-1,1.5-3,1.5h-3v10c0,9.3-.1,10-2,10s-2-.7-2-10v-10h-3c-2,0-3-.5-3-1.5,0-1.2,1.6-1.5,8-1.5s8,.3,8,1.5Z"/>
		  <path d="m65,22c0,8.4,1.5,13.2,4.5,14.4,3.7,1.4,8.6.6,11-1.9,2.3-2.2,2.5-3.2,2.5-11.5s-.1-9-2-9-2,.7-2,9c0,7.8-.2,9.1-1.9,10-5.8,3.1-8.1.1-8.1-10.6,0-7.7-.2-8.4-2-8.4s-2,.7-2,8Z"/>
		  <path d="m109,25.5c0,10.8.1,11.5,2,11.5,1.8,0,2-.7,2-7.8l.1-7.7,3.3,7.5c1.8,4.1,4,7.6,4.8,7.8,1,.2,2.7-2.3,5.1-7.5l3.6-7.8v7.7c.1,6.2.4,7.8,1.6,7.8s1.5-1.9,1.5-11.5c0-10.4-.2-11.5-1.8-11.5-1.3,0-2.9,2.4-5.6,8.5-2.1,4.7-4.2,8.3-4.6,8-.4-.2-2.2-4.1-4.1-8.5-2.7-6.7-3.6-8-5.6-8-2.3,0-2.3.1-2.3,11.5Z"/><path d="m167,14.4c0,.2-1.8,5.4-4,11.5-3.7,10.4-3.8,11.1-1.9,11.1,1.2,0,2.3-1,2.9-2.5.8-2.2,1.6-2.5,5.5-2.5s4.7.4,5.7,2.5c.6,1.4,2,2.5,3,2.5,2.2,0,2.4.8-2.6-13-3-8.4-3.7-9.5-6-9.8-1.4-.2-2.6-.1-2.6.2Zm4.3,7.8c.3,1.3.9,3.3,1.2,4.5.7,2.1.4,2.3-2.9,2.3-2,0-3.6-.2-3.6-.5,0-1.4,3.3-8.5,4-8.5.4,0,1,1,1.3,2.2Z"/><path d="m210,25.5c0,10.8.1,11.5,2,11.5,1.7,0,1.9-.8,2.2-8.1l.3-8,5.2,8c3.7,5.8,5.8,8.1,7.3,8.1,1.9,0,2-.6,2-11.5s-.1-11.5-2-11.5c-1.7,0-1.9.8-2.2,8.2l-.3,8.2-5.4-8.2c-3.5-5.4-6-8.2-7.2-8.2-1.7,0-1.9.9-1.9,11.5Z"/><path d="m64,73.5c0,10.8.1,11.5,2,11.5,1.7,0,2-.7,2-5v-5h11v5c0,4.3.3,5,2,5,1.9,0,2-.7,2-11.5s-.1-11.5-2-11.5c-1.7,0-2,.7-2,5v5h-11v-5c0-4.3-.3-5-2-5-1.9,0-2,.7-2,11.5Z"/><path d="m119,62.3c0,.2-1.8,5.4-4,11.5-3.6,10-3.8,11.2-2.1,11.2,1,0,2.3-1.1,2.9-2.5,1-2.1,1.8-2.5,5.7-2.5s4.7.3,5.5,2.5c.6,1.5,1.7,2.5,2.9,2.5,1.9,0,1.8-.7-1.9-11.1-2.2-6.1-4-11.3-4-11.5s-1.1-.4-2.5-.4-2.5.1-2.5.3Zm5.4,12.4c.7,2.1.4,2.3-2.9,2.3q-3.9,0-1.3-7l1-2.5,1.3,2.5c.7,1.4,1.6,3.5,1.9,4.7Z"/><path d="m163,73.5c0,9.6.3,11.5,1.5,11.5,1.1,0,1.5-1.2,1.5-4.5,0-2.5.4-4.5.9-4.5s2.5,2,4.5,4.5c2.7,3.2,4.5,4.5,6.3,4.5,2.4,0,2.3-.2-2.5-5.8l-5-5.8,5-5.7c4.7-5.4,4.8-5.7,2.5-5.7-1.7,0-3.6,1.4-6.1,4.5-2.1,2.5-4.2,4.5-4.7,4.5s-.9-2-.9-4.5c0-3.3-.4-4.5-1.5-4.5-1.2,0-1.5,1.9-1.5,11.5Z"/><path d="m210,71.4c0,9,.1,9.6,2.6,11.5,3.4,2.7,9.4,2.8,12.5.2,2.2-1.7,2.4-2.9,2.7-11.5.4-9.2.3-9.6-1.7-9.6s-2.1.5-2.1,8.4c0,9.2-1.1,11.6-5.4,11.6-3.8,0-4.6-1.9-4.6-11.2,0-8.1-.2-8.8-2-8.8-1.9,0-2,.7-2,9.4Z"/><path d="m260,73.5c0,10.8.1,11.5,2,11.5,1.7,0,2-.7,2-4.5,0-3.2.4-4.5,1.4-4.5.8,0,2.6,2,4,4.5,1.7,2.9,3.4,4.5,4.6,4.5,2.5,0,2.5-.2-.4-4.9l-2.5-3.9,2.5-2.3c3-2.8,3.1-7.2.4-9.9-1.6-1.6-3.3-2-8-2h-6v11.5Zm10.4-7.9c1.9.7,2.1,4.5.4,6.2-.7.7-2.5,1.2-4,1.2-2.6,0-2.8-.3-2.8-4s.3-4,2.4-4c1.3,0,3.1.3,4,.6Z"/>
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
