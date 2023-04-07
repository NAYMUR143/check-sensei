import { PresentationControls, Stage, useGLTF } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("./models/chair.gltf");
  return (
    <>
      <primitive object={scene} {...props} />
    </>
  );
}

const Experience = () => {
  return (
    <>
      <PresentationControls
        speed={1.5}
        global
        polar={[-0.1, Math.PI / 4]}
        rotation={[Math.PI / 8, Math.PI / 4, 0]}
      >
        <Stage environment="city" intensity={0.6} castShadow={false}>
          <Model />
        </Stage>
      </PresentationControls>
    </>
  );
};

export default Experience;
