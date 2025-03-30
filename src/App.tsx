import { useState } from "react";
import { FaqProps } from "./components/Accordion";
import HeroSection from "./components/HeroSection";
import WhyJoin from "./components/WhyJoin";
import CtaForm from "./components/CtaForm";
import Accordion from "./components/Accordion";
import './index.css';

const App = () => {
  const [email, setEmail] = useState<string>("");
  const faqs: FaqProps[] = [
   { 
    headline: "What does this tool do?",
    content: "It automatically converts your content into multiple formats (blogs, tweets, LinkedIn posts, threads, etc.) to maximize your reach with minimal effort."
   },
   { 
    headline: "How does it work?", 
    content: "Simply upload your content, and our AI handles the rest—extracting key insights, summarizing, and adapting it for different platforms." 
   },
   { 
    headline: "When will it launch?", 
    content: "We’re rolling out access soon! Join the waitlist to get early access and exclusive perks." 
   },
   {
    headline: "Is it free?",
    content: "Early users get special pricing and bonuses. Sign up to be notified first!"
   }
  ]

  return (
   <>
    <header>
     <nav>
      <div className="w-screen flex items-center justify-between px-[6vw] mt-4">
       <h1 className="heading-gradient font-bold text-xl"> 
         ContentFlip.app 
       </h1>
       
       <button> Logo </button>
      </div>
     </nav>
    </header>
    
    <main className="w-screen bg-hero-pattern bg-center font-urbanist flex flex-col items-center justify-center text-center p-0 px-[8%] mt-16">
    
     <section className="w-full flex flex-col items-center justify-center text-center">
       <HeroSection />
       <WhyJoin />
       <CtaForm 
        email={email}
        setEmail={setEmail} />
      </section>
      
      <section className="w-full mt-16">
       <div className="w-full flex flex-col items-center gap-4">
        {faqs.map((faq, i) => (
         <Accordion 
          key={i}
          headline={faq.headline}
          content={faq.content} />
        ))}
       </div>
      </section>
    </main>
   </>
  );
};

export default App;