import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import "./intro.css";
import "../pages.css";

gsap.registerPlugin(useGSAP);

export default function Intro({ onFinish }) {
  const introRef = useRef();

  useGSAP(() => {
    document.body.style.overflow = "hidden";

    gsap.from(introRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      onComplete: () => {
        document.body.style.overflow = "auto";
      },
    });
  }, []);
  const handleClick = () => {
    gsap.to(introRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power2.inOut",
      onComplete: onFinish,
    });
  };

  return (
    <main ref={introRef} className="main-container intro-container">
      <h1>Bienvenido</h1>
      <p>Este es un mensaje introductorio.</p>
      <button onClick={handleClick} className="intro-button">
        Saber más
      </button>
    </main>
  );
}
