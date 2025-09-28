"use client";
import { Navbar } from "@/components/Navbar";
import Slider from "@/components/Slider";
import Actions from "@/components/Actions";
import Gallery from "@/components/Gallery";

import { useTheme } from "next-themes";
export default function Home() {
  const { theme } = useTheme();
  return (
    <div
      className={`md:m-10 md:mb-0 ${
        theme === "dark" ? "border-0" : "border-gray-200  md:border-2 shadow-md"
      }   `}
    >
      <Navbar />
      <Slider />
      <Actions />
      <Gallery />
    </div>
  );
}
