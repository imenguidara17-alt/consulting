import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { RealisationsSection } from "../components/RealisationSection";
import { ServicesSection } from "../components/ServicesSection";
import { BlogSection } from "../components/BlogSection";
import { Blog } from "../context/BlogContext";
export const AcceuilPage = () => (
  <>
   
    <HeroSection />
    <AboutSection />
    <RealisationsSection />
    <ServicesSection />
    <Blog>
    <BlogSection/>
    </Blog>
  </>
);
