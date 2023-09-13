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

import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
import { useEffect } from "react";



export default function Experience() {
  // let windowWidth = useRef();
  // let fovValue = useRef();
  const { viewport } = useThree()
  const camera = useThree(state => state.camera)

  console.log(viewport)
  const Knot = (props) => (
    <mesh position={[0, 0, 2]} receiveShadow castShadow {...props}>
      <torusKnotGeometry args={[0.2, 0.05, 256, 32]} />
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
  // useFrame((state, delta) => {
  //   fov = state.camera.fov
  // })
  // function customCamera() {

  // }

  function calculateFOV() {
    if (viewport.width < 5) {
      return 43;
    } else if (viewport.width < 20) {
      return 30;
    } else if (viewport.width < 25) {
      return 29;
    } else if (viewport.width < 30) {
      return 27;
    } else if (viewport.width < 35) {
      return 24
    }
    else if (viewport.width < 40) {
      return 22;
    } else if (viewport.width < 45) {
      return 18;
    } else {
      return 16;
    }
  }



  useEffect(() => {
    console.log(viewport.width)

    // let fovValue = calculateFOV();


    camera.fov = calculateFOV()

    window.addEventListener("resize", () => {

      camera.fov = calculateFOV()
      console.log(camera.fov)
      console.log(viewport.width)

    });
  })

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
      <Text fontSize={.15} style={{ color: "white" }} position={[0, .5, 0]}>
        Creative 3D Web Developer | Based in Austin, TX
      </Text>
      <Text scale={.5} position={[0, 0, 0]} font="./rampart.woff" letterSpacing={0.058}>
        Aiden Schrock
      </Text>
      <Float>
        <Knot />
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

      {/* <Rig /> */}
    </>
  );
}
