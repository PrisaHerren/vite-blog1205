import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Bottom from "./bottom";
import Search from "../elements/search";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";
import BackToTop from "../elements/backToTop";
import Head from "next/head";
declare global {
  interface Window {
    WOW: any;
  }
}
const Layout = ({ children }: any) => {
  const addClass = () => {
    document.body.classList.add("canvas-opened");
  };

  const removeClass = () => {
    document.body.classList.remove("canvas-opened");
  };

  const openSearch = () => {
    document.body.classList.toggle("open-search-form");
  };
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });

    // Load WOW.js
    const loadWow = () => {
      if (typeof (window as any).WOW === "function") {
        const wow = new (window as any).WOW({
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: true,
          live: true,
        });
        wow.init();
        window.WOW = wow;
        return true;
      }
      return false;
    };

    // Load WOW.js if not already loaded
    if (!(window as any).WOW) {
      const script = document.createElement("script");
      script.src = "/assets/js/vendor/wow.min.js";
      script.async = true;
      script.onload = () => setTimeout(loadWow, 100); // Small delay to ensure WOW is fully loaded
      document.body.appendChild(script);
    } else {
      loadWow();
    }

    // Initialize Masonry if grid-sizer exists
    const initializeMasonry = () => {
      const hasGridClass = document.querySelector(".grid-sizer");
      if (hasGridClass) {
        const xyz = require("masonry-layout");
        new xyz(".grid", {
          itemSelector: ".grid-item",
          columnWidth: ".grid-sizer",
        });
      }
    };

    // Call the Masonry initialization
    initializeMasonry();

    // Cleanup function
    return () => {
      // Any cleanup if needed
    };
  }, [pathname]);

  return (
    <>
      <Head>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Sidebar removeClass={removeClass} />
      <Header addClass={addClass} openSearch={openSearch} />
      <Search />

      {children}

      <Bottom />
      <Footer removeClass={removeClass} />
      <BackToTop />
    </>
  );
};

export default Layout;
