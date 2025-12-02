import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Footer from "@/components/Footer";

const AboutMe = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;