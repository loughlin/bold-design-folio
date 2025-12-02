import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import Experience from "@/components/Experience";
import FeaturedCaseStudy from "@/components/FeaturedCaseStudy";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <FeaturedWork />
      <Experience />
      <FeaturedCaseStudy />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
