import { useState } from "react";
import Intro from "./pages/Intro/Intro";
import Home from "./pages/Home/Home";

export default function App() {
  const [showHome, setShowHome] = useState(false);

  return (
    <div className="app-container">
      {!showHome ? <Intro onFinish={() => setShowHome(true)} /> : <Home />}
    </div>
  );
}
