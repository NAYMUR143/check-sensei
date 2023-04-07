import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "../components/Experiencs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Canvas>
        <fog attach="fog" args={["#213547", 10, 20]} />
        <color attach="background" args={["#213547"]} />
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
