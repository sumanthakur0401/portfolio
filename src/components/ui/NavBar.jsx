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
          width="115"
          height="45"
          viewBox="0 0 268.25 95.19"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
        <g>
      <polygon points="204.5 28.1 204.4 28.1 195.7 15.8 193.4 15.8 193.3 32.5 195.9 32.5 195.9 20.2 196 20.2 204.7 32.5 207.2 32.5 207.2 15.8 204.5 15.8 204.5 28.1" />
      <path d="M155,15.8l-6.6,16.7h2.8l1.3-3.4h7.7l1.3,3.4h2.8l-6.6-16.7h-2.7ZM153.3,26.7l3-7.6h.1l3,7.6h-6.1Z" />
      <polygon points="112.3 28.2 106.7 15.8 103.9 15.8 103.9 32.5 106.4 32.5 106.4 21 106.4 21 111 31.3 113.3 31.3 117.9 21 118 21 118 32.5 120.6 32.5 120.6 15.8 117.8 15.8 112.3 28.2" />
      <path d="M69.5,33.2c4.8,0,6.8-2.3,6.8-7.5v-9.3h-2.7v9.3c0,3.8-1,5.1-4,5.1s-4-1.3-4-5.1v-9.3h-2.9v9.3c0,5.2,2,7.5,6.8,7.5Z" />
      <polygon points="74.1 68.6 65.8 68.6 65.8 61.7 63.1 61.7 63.1 78.4 65.8 78.4 65.8 71.1 74.1 71.1 74.1 78.4 76.8 78.4 76.8 61.7 74.1 61.7 74.1 68.6" />
      <path d="M110.9,61.8l-6.6,16.7h2.8l1.3-3.5h7.7l1.3,3.5h2.8l-6.6-16.7h-2.7ZM109.3,72.7l3-7.5h.1l3,7.5h-6.1Z" />
      <polygon points="163 61.7 159.5 61.7 152.1 69.4 152 69.4 152 61.7 149.3 61.7 149.3 78.3 152 78.3 152 73 154.4 70.5 154.5 70.5 160.1 78.3 163.3 78.3 156.3 68.5 163 61.7" />
      <path d="M204.2,70.9c0,3.8-1,5.1-4,5.1s-4-1.3-4-5.1v-9.3h-2.9v9.3c0,5.2,2,7.5,6.8,7.5s6.8-2.3,6.8-7.5v-9.3h-2.7v9.3h0Z" />
      <path d="M247.6,71.8c1.9-.8,3-2.4,3-4.8,0-3.5-2.1-5.3-5.9-5.3h-6.9v16.7h2.8v-6h4.6l3,6h2.9l-3.5-6.6ZM244.6,70h-4.1v-5.9h4.1c2.4,0,3.5,1,3.5,3s-1.2,2.9-3.5,2.9Z" />
    </g>
    <path d="M223.9,0H0v45.7h44.7v3.8H0v45.7h268.2V0h-44.3ZM22.8,32.8c-4.2,0-6.8-2-6.8-5.7h2.7c0,2.2,1.5,3.3,4.2,3.3s4.1-1,4.1-2.7c0-4.3-10.5-1-10.5-7.3,0-3,2.4-4.9,6.2-4.9s6.5,2,6.5,5.5h-2.5c0-2-1.5-3.1-4-3.1-2.3,0-3.7,1-3.7,2.4,0,3.9,10.5.7,10.5,7.3,0,3.2-2.5,5.2-6.7,5.2ZM29.9,63.2h-5.5v14.3h-2.7v-14.3h-5.5v-2.4h13.7v2.4ZM88.8,91.6h-40.6v-42h40.6v42ZM88.8,45.9h-40.6V3.6h40.6v42.3ZM132.2,49.5v42h-39.9v-42h39.9ZM132.2,45.9h-39.9V3.6h39.9v42.3ZM176.3,91.6h-39.9v-42h39.9v42h0ZM176.3,45.9h-39.9V3.6h39.9v42.3h0ZM220.4,91.6h-40.6v-42h40.6v42h0ZM220.4,45.9h-40.6V3.6h40.6v42.3h0ZM264.7,91.6h-40.6v-42h40.6v42ZM264.7,45.9h-40.6V3.6h40.6v42.3Z" stroke-width="0"/>
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
