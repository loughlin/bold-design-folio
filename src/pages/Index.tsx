import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Seo from "@/components/Seo";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Seo
        title="James Loughlin — Portfolio Design Lead & Product Designer"
        description="Portfolio of James Loughlin, Portfolio Design Lead at Kessel Run (USAF). Human-centered design, design systems, and design culture in defense technology."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "James Loughlin",
          jobTitle: "Portfolio Design Lead",
          worksFor: { "@type": "Organization", name: "Kessel Run, USAF" },
          url: "https://jamesloughlin.design/",
          sameAs: ["https://www.linkedin.com/in/jameslloughlin/"],
        }}
      />
      <Navigation />
      <main id="main">
        <Hero />
        <FeaturedWork />
        <Skills />
        <Experience />
        <AboutSection />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
