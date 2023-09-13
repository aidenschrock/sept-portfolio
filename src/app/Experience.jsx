import {
  EffectComposer,
  Noise,
  N8AO,
  TiltShift2,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import {
  Text,
  Html,
  MeshTransmissionMaterial,
  Float,
  Stage,
  ContactShadows,
  Lightformer,
  Environment,
} from "@react-three/drei";

import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

export default function Experience() {
  const Knot = (props) => (
    <mesh position={[0, 0, 2]} receiveShadow castShadow {...props}>
      <torusKnotGeometry args={[3, 0.7, 256, 32]} />
      <MeshTransmissionMaterial thickness={1} />
    </mesh>
  );

  const linePoints = [
    [0, 0, 0],
    [1, 1, 0],
    [3, 3, 0],
  ];

  const CatmullRomLine = (props) => (
    <mesh>
      <CatmullRomLine points={linePoints} />
    </mesh>
  );

  function Rig() {
    useFrame((state, delta) => {
      easing.damp3(
        state.camera.position,
        [
          Math.sin(-state.pointer.x) * 5,
          state.pointer.y * 3.5,
          15 + Math.cos(state.pointer.x) * 10,
        ],
        0.2,
        delta
      );
      state.camera.lookAt(0, 0, 0);
    });
  }
  return (
    <>
      <color args={["#000000"]} attach="background" />

      <spotLight position={[10, 20, 5]} penumbra={1} castShadow angle={0.2} />

      <Text fontSize={2} style={{ color: "white" }} position={[0, 2, 0]}>
        Creative 3D Web Developer | Based in Austin, TX
      </Text>
      <Text
        scale={6}
        position={[0, -2, 0]}
        font="./rampart.woff"
        letterSpacing={0.058}
      >
        Aiden Schrock
      </Text>
      <Float>
        <Knot />
        {/* <CatmullRomLine /> */}
      </Float>
      <ContactShadows
        scale={100}
        position={[0, -7.5, 0]}
        blur={1}
        far={100}
        opacity={0.85}
      />
      <Environment preset="city">
        <Lightformer
          intensity={4}
          position={[10, 5, 0]}
          scale={[10, 50, 1]}
          onUpdate={(self) => self.lookAt(0, 0, 0)}
        />
      </Environment>
      <EffectComposer disableNormalPass>
        <Noise blendFunction={BlendFunction.OVERLAY} />
        <N8AO aoRadius={1} intensity={2} />
        <TiltShift2 blur={0.1} />
      </EffectComposer>

      <Rig />
    </>
  );
}
