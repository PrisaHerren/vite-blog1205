"use client";

import { useEffect } from "react";

export default function Loading() {
  useEffect(() => {
    // This effect will run when the component mounts
    const preloader = document.querySelector(".preloader");
    if (preloader) {
      // Add a small delay to ensure the preloader is visible before starting the fade out
      const timer = setTimeout(() => {
        preloader.classList.add("fade-out");
      }, 450);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="preloader text-center">
      <div className="circle"></div>
    </div>
  );
}
