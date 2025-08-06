import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import "./intro.css";
import "../pages.css";
import CustomButton from "../../components/ui/Buttons/CustomButton/CustomButton";

gsap.registerPlugin(useGSAP);

export default function Intro({ onFinish }) {
  const introRef = useRef();

  useGSAP(() => {
    gsap.from(introRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
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
      <div className="intro-text-container">
        <h1>neural</h1>
        <p>Donde todo empieza</p>
      </div>

      <CustomButton text="Comenzar" onClick={() => handleClick()} />
    </main>
  );
}
