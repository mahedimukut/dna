import React from "react";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import HappyClients from "@/sections/HappyClients";
import ReFinancing from "@/sections/ReFinancing";
import Cta from "@/sections/Cta";
{/* homepage */}
export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-[60px]">
      <Header />
      <Hero />
      <HappyClients />
      <ReFinancing />
      <Cta />
    </div>
  );
}
