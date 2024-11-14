import React from "react";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import HappyClients from "@/sections/HappyClients";
{/* homepage */}
export default function Home() {
  return (
    <div className="px-[60px]">
      <Header />
      <Hero />
      <HappyClients />
    </div>
  );
}
