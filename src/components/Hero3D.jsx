import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';

const AnimatedShape = () => {
  const shapeRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    shapeRef.current.rotation.x = t * 0.1;
    shapeRef.current.rotation.y = t * 0.15;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={shapeRef} args={[1, 64, 64]} scale={2.4}>
        <MeshDistortMaterial
          color="#333333"
          attach="material"
          distort={0.4}
          speed={4}
          roughness={0.2}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  );
};

const Hero3D = () => {
  return (
    <div className="hero-3d-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
        <AnimatedShape />
      </Canvas>
    </div>
  );
};

export default Hero3D;
