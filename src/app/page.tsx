import React from "react";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import HappyClients from "@/sections/HappyClients";
import ReFinancing from "@/sections/ReFinancing";
import Cta from "@/sections/Cta";
{/* homepage */}
export default function Home() {
  return (
    <div className="px-[60px] container">
      <Header />
      <Hero />
      <HappyClients />
      <ReFinancing />
      <Cta />
    </div>
  );
}
