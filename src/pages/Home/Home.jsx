import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import "./home.css";
import "../pages.css";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const homeRef = useRef();

  useGSAP(() => {
    document.body.style.overflow = "hidden";

    gsap.from(homeRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      onComplete: () => {
        document.body.style.overflow = "auto";
      },
    });
  }, []);

  return (
    <main ref={homeRef} className="main-container home-container">
      <div className="home-content-wrapper">
        <div className="home-left-column">
          <h1>neural</h1>
          <div className="home-text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              voluptates odit? Aspernatur nam dignissimos quo beatae veritatis
              hic delectus incidunt molestias error amet pariatur, sit
              necessitatibus illo, alias earum itaque? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Repudiandae veritatis optio
              molestiae possimus distinctio facere voluptate delectus libero
              cupiditate, enim dolorem a incidunt deleniti quam, beatae tempore
              architecto doloremque accusamus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              voluptates odit? Aspernatur nam dignissimos quo beatae veritatis
              hic delectus incidunt molestias error amet pariatur, sit
              necessitatibus illo, alias earum itaque? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Repudiandae veritatis optio
              molestiae possimus distinctio facere voluptate delectus libero
              cupiditate, enim dolorem a incidunt deleniti quam, beatae tempore
              architecto doloremque accusamus.
            </p>
          </div>
        </div>

        <div className="home-right-column">
          <p className="home-vertical-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </main>
  );
}
