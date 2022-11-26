import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Leva } from "leva";
import { Experience } from "@/components/Experience";

function App() {
  return (
    <>
      <Leva titleBar={{ title: "Test" }} />
      <Canvas
        flat
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 300,
          position: [1, 4, 6],
        }}
      >
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
