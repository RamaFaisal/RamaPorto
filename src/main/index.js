import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroOne from "../components/HeroOne";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Clients from "../components/Clients";

export default function Index() {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("light");
  }, []);
  return (
    <>
      <Navbar />
      <HeroOne />
      <Experience />
      <Projects />
      <Clients />
      <Blogs />
      <Footer />
    </>
  );
}
