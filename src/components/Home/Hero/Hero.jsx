import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import "./Hero.css";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const heroRef = useRef();

  useGSAP(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <section ref={heroRef} className="hero-section">
      <div className="home-hero-content-wrapper">
        <div className="home-hero-left-column">
          <h1>neural</h1>

          <div className="home-hero-text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              quidem maiores. Adipisci corrupti natus facilis reprehenderit
              accusamus aliquid temporibus voluptatum, necessitatibus explicabo
              animi commodi asperiores, at ea quasi accusantium assumenda. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Nulla eveniet
              odit pariatur quas, laudantium, perferendis, necessitatibus
              blanditiis officia sed quisquam nam. Iure at animi beatae
              quibusdam cupiditate voluptates, praesentium adipisci.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              quidem maiores. Adipisci corrupti natus facilis reprehenderit
              accusamus aliquid temporibus voluptatum, necessitatibus explicabo
              animi commodi asperiores, at ea quasi accusantium assumenda. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Nulla eveniet
              odit pariatur quas, laudantium, perferendis, necessitatibus
              blanditiis officia sed quisquam nam. Iure at animi beatae
              quibusdam cupiditate voluptates, praesentium adipisci.
            </p>
          </div>
        </div>

        <div className="home-hero-right-column">
          <div className="home-hero-vertical-text-wrapper">
            <p className="home-hero-vertical-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="home-hero-vertical-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
