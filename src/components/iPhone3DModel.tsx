import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, OrbitControls, Html } from "@react-three/drei";
import { useIsMobile } from "@/hooks/useIsMobile";

function Loader() {
  return <Html center style={{ color: "white" }}>Loading...</Html>;
}

function Model(props: React.ComponentPropsWithoutRef<"primitive">) {
  const { scene } = useGLTF("/iphone_15_pro_max.glb");
  return <primitive object={scene} {...props} />;
}

const IPhone3DModel: React.FC = () => {
  const isMobile = useIsMobile();

  // Smaller scale for better fit
  const scale = isMobile ? 0.4 : 0.5;

  // Adjusted position for centering
  const position: [number, number, number] = isMobile ? [0, -0.3, 0] : [-0.15, -0.15, -0.15];

  // Camera position adjusted for better view
  const cameraPosition: [number, number, number] = isMobile ? [0, 1, 5] : [1.5, 3, 6];
  const fov = isMobile ? 45 : 40;

  return (
    <Canvas shadows camera={{ position: cameraPosition, fov }}>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.3}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />

      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} />
      <Suspense fallback={<Loader />}>
        <Model scale={scale} position={position} />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
};

useGLTF.preload("/iphone_15_pro_max.glb");

export default IPhone3DModel;
