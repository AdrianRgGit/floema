import Hero from "../../components/Home/Hero/Hero";

import "./home.css";
import "../pages.css";
import About from "../../components/Home/About/About";

export default function Home() {
  return (
    <main className="main-container">
      <Hero />
      <About />
    </main>
  );
}
