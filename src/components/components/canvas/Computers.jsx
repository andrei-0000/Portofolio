import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Preload,
  useGLTF,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { nodes, materials } = useGLTF("./public/logoap/logoap7.glb");
  const ref = useRef();
  const refLight = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.z -= delta / 1;
  });

  return (
    <group dispose={null}>
      <hemisphereLight intensity={40} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        ref={refLight}
        position={[20, 0, 10]}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus.geometry}
        material={materials.Material2}
        material-roughness={0.1}
        material-metallic={0.9}
        scale={isMobile ? 0.65 : 1}
        position={isMobile ? [-0, -0.75, 0] : [0, -0.65, 0]}
        rotation={[1.5, 0, -1]}
        ref={ref}
      />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [8, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Environment files={"./public/hdr/city.hdr"} background={false} />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
