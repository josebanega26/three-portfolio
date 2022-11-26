import {
  Center,
  ContactShadows,
  Environment,
  Float,
  PresentationControls,
  useGLTF,
  Html,
} from "@react-three/drei";
import { Mesh } from "three";
import { useControls } from "leva";
import { Perf } from "r3f-perf";

export const Experience = () => {
  const { performanceVisibility } = useControls({
    performanceVisibility: false,
  });

  const model = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  console.log("model", model);
  return (
    <>
      <Environment preset="city" />
      {performanceVisibility && <Perf position="top-left" />}

      {/* Color */}
      <color args={["#7c3131"]} attach="background" />

      <PresentationControls
        global
        rotation={[-0.15, 0.6, 0]}
        polar={[-0.2, 0.35]}
        azimuth={[-0.5, 0.75]}
        config={{ mass: 3, tension: 200 }}
        snap
      >
        <Float speed={0.2} rotationIntensity={0.3}>
          {/* Screen light */}
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color="#efd6d6"
            rotation={[0.1, Math.PI, 0]}
            position={[-1.5, 0.55, -1.15]}
          />
          {/* Model */}
          <primitive object={model.scene} position-y={-1.5} position-x={-1.5}>
            <Html
              transform
              wrapperClass="iframe-container"
              distanceFactor={1.2}
              rotation-x={-0.256}
              position={[0, 1.55, -1.4]}
            >
              <iframe src="https://josebanega.netlify.app/about" />
            </Html>
          </primitive>
        </Float>
      </PresentationControls>

      {/* Lights */}
      <ambientLight intensity={1} />
      <directionalLight intensity={1} castShadow position={[1, 2, 0]} />

      <ContactShadows position-y={-1.8} opacity={0.5} scale={4} blur={2} />
    </>
  );
};
