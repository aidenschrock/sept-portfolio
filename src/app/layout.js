"use client";

import "./globals.css";
import { Rampart_One } from "next/font/google";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const rampart = Rampart_One({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Aiden Schrock",
  description: "Creative 3D Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rampart.className}>
        <Canvas shadows camera={{ position: [0, 0, 20], fov: 20 }}>
          <Experience />
        </Canvas>
      </body>
    </html>
  );
}
