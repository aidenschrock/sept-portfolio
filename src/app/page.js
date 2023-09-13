"use client";
import "./globals.css";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import Ticker from "./Ticker";
import { useEffect, useRef, useState } from "react";

import { Rampart_One, Quicksand } from "next/font/google";

const rampart = Rampart_One({ subsets: ["latin"], weight: "400" });
const quicksand = Quicksand({ subsets: ["latin"] });

export default function Home() {
  const [isReady, setReady] = useState(false);

  let windowWidth = useRef();
  let fovValue = useRef();

  function calculateFOV() {
    if (windowWidth.current < 380) {
      return 40;
    } else if (windowWidth.current < 436) {
      return 30;
    } else if (windowWidth.current < 630) {
      return 29;
    } else if (windowWidth.current < 760) {
      return 27;
    } else if (windowWidth.current < 900) {
      return 24
    }
    else if (windowWidth.current < 1080) {
      return 22;
    } else if (windowWidth.current < 1440) {
      return 18;
    } else {
      return 16;
    }
  }

  useEffect(() => {
    windowWidth.current = window.innerWidth;
    fovValue.current = calculateFOV();
    console.log(fovValue.current);
    console.log(windowWidth.current);
    window.addEventListener("resize", () => {
      windowWidth.current = window.innerWidth;
      fovValue.current = calculateFOV();
      console.log(fovValue.current);
      console.log(windowWidth.current);
    });
    setReady(true);
  }, []);

  // console.log(fovValue);

  return (
    <main className="flex flex-col min-h-screen h-screen">
      {isReady ? (
        <Canvas
          camera={{ fov: `${fovValue.current}` }}
          className="h-full"
          shadows
        >
          <Experience className={rampart.className} />
        </Canvas>
      ) : null}

      <div className={quicksand.className}>
        <div className="text-white fill-white flex flex-row justify-end gap-6 mb-4 mr-8 contact">
          aidennoel@proton.me
          <a
            className="w-6 h-6"
            target="_blank"
            href="https://twitter.com/AidenNSchrock"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>X</title>
              <path
                fill="white"
                d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
              />
            </svg>
          </a>
          <a
            className="w-6 h-6"
            target="_blank"
            href="https://www.linkedin.com/in/aiden-schrock/"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>LinkedIn</title>
              <path
                fill="white"
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </a>
        </div>
      </div>
      <Ticker />
    </main>
  );
}
