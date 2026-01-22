import React from "react";
import { Navbar } from "./components/Navbar";
import { MissionSection } from "./components/MissionSection";
import { AboutSection } from "./components/AboutSection";
import { GallerySection } from "./components/GallerySection";
import { ServicePriceSection } from "./components/ServicePriceSection";
import { Footer } from "./components/Footer";

const App: React.FC = () => {

  return (
    <div className="min-h-screen no-selection">
      <Navbar />
      <MissionSection />
      <AboutSection />
      <GallerySection />
      <ServicePriceSection />
      <Footer />
    </div>
  )
}

export default App
