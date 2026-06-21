"use client";

import Lottie from "lottie-react";
import animationData from "../economy/lottie.json";

export default function EconomyLottie() {
  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      className="mx-auto h-64 w-64 sm:h-80 sm:w-80"
    />
  );
}
