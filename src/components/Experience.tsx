import { OrbitControls } from "@react-three/drei";
import { Mesh } from "three";
import { useControls } from "leva";
import { Perf } from "r3f-perf";

export const Experience = () => {
  const { performanceVisibility } = useControls({
    performanceVisibility: false,
  });

  return (
    <>
      {performanceVisibility && <Perf position="top-left" />}
      <OrbitControls makeDefault />

      {/* Color */}
      <color args={["#201919"]} attach="background" />

      {/* Lights */}
      <ambientLight intensity={1} />
      <directionalLight intensity={1} castShadow position={[1, 2, 0]} />
    </>
  );
};
