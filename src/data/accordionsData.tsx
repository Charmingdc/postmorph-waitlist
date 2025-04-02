import { FaqProps } from "../components/Accordion";

const accordionsData = () => {
 const data: FaqProps[] = [
   { 
    headline: "What does this tool do?",
    content: "It automatically converts your content into multiple formats (blogs, tweets, LinkedIn posts, threads, etc.) to maximize your reach with minimal effort."
   },
   { 
    headline: "How does it work?", 
    content: "Simply paste the url to your content or paste as text, and our AI handles the rest—extracting key insights, summarizing, and adapting it for different platforms." 
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