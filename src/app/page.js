"use client";
import "./globals.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import Ticker from "./Ticker";
import Loading from "./Loader/Loading";

import { Rampart_One, Quicksand } from "next/font/google";
import { Suspense } from "react";

const rampart = Rampart_One({ subsets: ["latin"], weight: "400" });
const quicksand = Quicksand({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col h-screen justify-between">
      <Loading className="z-10" />
      <div className="h-[430px] xs:h-[500px] sm:h-[450px] md:h-[550px] lg:h-full z-0">
        {/* <Suspense fallback={<Loading />}> */}
        <Canvas className="h-full">
          <Experience className={rampart.className} />
        </Canvas>
        {/* </Suspense> */}
      </div>
      <div className="flex flex-col">
        <div>
          <div className="text-[#ebe6e1] text-lg sm:text-xl font-semibold fill-[#ebe6e1] flex flex-row justify-end gap-6 mb-4 mr-8 contact">
            <div className={quicksand.className}>aidenschrock3D@gmail.com</div>
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
        <div>
          <Ticker />
        </div>
      </div>
    </main>
  );
}
