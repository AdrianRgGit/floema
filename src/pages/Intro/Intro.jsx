import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Intro({ onFinish }) {
  const containerRef = useRef();

  useGSAP(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  const handleClick = () => {
    gsap.to(containerRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power2.inOut",
      onComplete: onFinish,
    });
  };

  return (
    <main ref={containerRef} className="intro-container">
      <h1>Bienvenido</h1>
      <p>Este es un mensaje introductorio.</p>
      <button onClick={handleClick} className="intro-button">
        Saber más
      </button>
    </main>
  );
}
