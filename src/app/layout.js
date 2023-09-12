"use client";

import "./globals.css";

export const metadata = {
  title: "Aiden Schrock",
  description: "Creative 3D Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
