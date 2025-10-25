import { FC } from "react";
import HeroBanner from "@/components/home/HeroBanner";
import Products from "@/components/home/Products";
import AboutSection from "@/components/home/AboutSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import FaqSection from "@/components/home/faqSection";
import ContactForm from "@/components/home/ContactForm";
import Footer from "@/components/home/Footer";
import ProductsPage from "@/components/products/ProductsPage";
import RomanticSlider from "@/components/home/RomanticSlider";

const HompPage: FC = () => {
  return (
    <div>
      <HeroBanner />
      <Products />
      <RomanticSlider />
      <AboutSection />
      <TestimonialSection />
      <FaqSection />
      <ContactForm />

      {/* <Footer /> */}
    </div>
  );
};

export default HompPage;
