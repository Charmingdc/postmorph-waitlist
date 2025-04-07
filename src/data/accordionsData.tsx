import { FaqProps } from "../components/Accordion";

const accordionsData = () => {
 const data: FaqProps[] = [
   { 
    headline: "What does this tool do?",
    content: "It automatically converts your content into multiple formats (blogs, tweets, LinkedIn posts, threads, etc.) to maximize your reach with minimal effort."
   },
   { 
    headline: "How does it work?", 
    content: "Simply paste your content URL or drop in the text, choose your output format and tone — and let our AI do the rest. It extracts key insights, summarizes, and adapts your content perfectly for each platform." 
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
  
  return data;
}
export default accordionsData;