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
      <h1>Página de Inicio</h1>
      <p>Este es el contenido principal del sitio.</p>
    </main>
  );
}
