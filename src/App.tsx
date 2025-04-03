import { useState } from "react";
import { Toaster } from "sonner";
import { FaqProps } from "./components/Accordion";
import accordionsData from "./data/accordionsData";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyJoin from "./components/WhyJoin";
import CtaForm from "./components/CtaForm";
import Accordions from "./components/Accordions";
import Footer from "./components/Footer";
import './index.css';

const App = () => {
  const [email, setEmail] = useState<string>("");
  const faqs: FaqProps[] = accordionsData();

  return (
   <>
    <header>
     <Navbar />
    </header>
    
    <main className="w-screen font-urbanist flex flex-col items-center justify-center text-center p-0 px-[5%] mt-14">
     <section className="w-full flex flex-col items-center justify-center text-center">
       <HeroSection />
       <WhyJoin />
       <CtaForm 
        email={email}
        setEmail={setEmail} />
      </section>
      
      <section className="w-full mt-16">
       <Accordions faqs={faqs} />
      </section>
    </main>
    
    <Footer />
    
    
    <Toaster
     position='top-center'
     richColors={true}
     closeButton={true}
     toastOptions={{
      duration: 2000,
     }} />
   </>
  );
};

export default App;