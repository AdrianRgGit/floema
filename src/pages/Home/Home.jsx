import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const homeRef = useRef();

  useGSAP(() => {
    gsap.from(homeRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <main ref={homeRef} style={styles.main}>
      <h1>Página de Inicio</h1>
      <p>Este es el contenido principal del sitio.</p>
    </main>
  );
}

const styles = {
  main: {
    padding: "2rem",
  },
};
