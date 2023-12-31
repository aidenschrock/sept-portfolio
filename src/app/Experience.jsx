import { EffectComposer, TiltShift2 } from "@react-three/postprocessing";

import {
  Text,
  MeshTransmissionMaterial,
  Float,
  Lightformer,
  Environment,
} from "@react-three/drei";

import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useState, useEffect } from "react";

export default function Experience() {
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    if (window.innerWidth < 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  const Knot = (props) => (
    <mesh {...props}>
      <torusKnotGeometry args={[3, 0.7, 256, 32]} />
      <MeshTransmissionMaterial thickness={1} />
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

  function DesktopTemplate() {
    return (
      <>
        <Text fontSize={2} color={"#ebe6e1"} position={[0, 4, 0]}>
          Creative 3D Web Developer | Based in Austin, TX
        </Text>
        <Text
          scale={6}
          position={[0, 0, 0]}
          font="./rampart.woff"
          letterSpacing={0.058}
          color={"#ebe6e1"}
        >
          Aiden Schrock
        </Text>

        <Float>
          <Knot position={[0, 0, 2]} />
        </Float>
      </>
    );
  }

  function MobileTemplate() {
    return (
      <>
        <Text fontSize={1.5} color={"#ebe6e1"} position={[0, 6, 0]}>
          Creative 3D Web Developer
        </Text>
        <Text fontSize={1.5} color={"#ebe6e1"} position={[0, 4, 0]}>
          | Based in Austin, TX
        </Text>
        <Text
          scale={6}
          position={[0, -2, 0]}
          font="./rampart.woff"
          letterSpacing={0.058}
          color={"#ebe6e1"}
        >
          Aiden
        </Text>
        <Text
          scale={6}
          position={[0, -8, 0]}
          font="./rampart.woff"
          color={"#ebe6e1"}
          letterSpacing={0.058}
        >
          Schrock
        </Text>
        <Float>
          <Knot position={[0, -6, 2]} />
        </Float>
      </>
    );
  }
  return (
    <>
      {/* <color attach="background" args={["#070606"]} /> */}
      <spotLight position={[0, 5, 2]} />
      {isMobile ? <MobileTemplate /> : <DesktopTemplate />}

      <Environment preset="city">
        <Lightformer
          intensity={4}
          position={[10, 5, 0]}
          scale={[10, 50, 1]}
          onUpdate={(self) => self.lookAt(0, 0, 0)}
        />
      </Environment>
      <EffectComposer disableNormalPass>
        <TiltShift2 blur={0.05} />
      </EffectComposer>

      <Rig />
    </>
  );
}
