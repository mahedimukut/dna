import React from "react";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import HappyClients from "@/sections/HappyClients";
import ReFinancing from "@/sections/ReFinancing";
{/* homepage */}
export default function Home() {
  return (
    <div className="px-[60px]">
      <Header />
      <Hero />
      <HappyClients />
      <ReFinancing />
    </div>
  );
}
