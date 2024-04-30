"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
// import { AnimatedTooltipPreview } from "./(components)/landing/AnimatedTooltipPreview";
import { AnimatedTooltipPreview } from "./(components)/landing/AnimatedToolTipPreview";
import Card_Home from "./(components)/landing/Card_Home";
import Footer from "./(components)/landing/Footer";
import From from "./(components)/landing/From";
import HeroSection from "./(components)/landing/HeroSection";
import { checkout } from "../checkout";
import Price from "./(components)/price-comparison/page";
import ProfileForm from "./(components)/signup/page";
import "./button.css";
import { useCallback, useEffect, useState } from "react";
// import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "tsparticles-slim";
import { useTheme } from "next-themes";
// import StarSky from "react-star-sky";
import Faq from "./(components)/landing/Faq";
import HeroSection1 from "./(components)/landing/HeroSection1";
import { motion } from "framer-motion";

// import "react-star-sky/dist/index.css";

export default function Home() {
  const { theme } = useTheme();
  const [forceAnimation, setForceAnimation] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  // triggered once
  useEffect(() => {
    setForceAnimation(true);
  }, []);
  return (
    <main className="bg-slate-200 dark:bg-slate-900 text-black dark:text-slate-200">
      <div>
        <HeroSection />
        <HeroSection1 />
        <Card_Home />
        <Faq />
        <AnimatedTooltipPreview />
      </div>
    </main>
  );
}
