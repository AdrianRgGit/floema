import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "./About.css";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef();
  const containerRef = useRef();

  useGSAP(() => {
    const panels = gsap.utils.toArray(".about-panel");

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + containerRef.current.offsetWidth,
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="about-section">
      <div ref={containerRef} className="about-container">
        <div className="about-panel">
          <h2>About 1</h2>
          <p>Primera parte del contenido</p>
        </div>
        <div className="about-panel">
          <h2>About 2</h2>
          <p>Segunda parte con scroll horizontal</p>
        </div>
        <div className="about-panel">
          <h2>About 3</h2>
          <p>Tercera parte</p>
        </div>
      </div>
    </section>
  );
}
