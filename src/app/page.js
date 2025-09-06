import CTA from "@/components/landing/CTA";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";


export default function Home() {
  return (
   <div>
   <Hero/>
   <Features/>
   <HowItWorks/>
   <Testimonials/>
   <CTA/>
   
   </div>
  );
}
