import Accordion from "./Accordion";
import { FaqProps } from "./Accordion";

const Accordions = ({ faqs }: FaqProps) => {
 return (
  <div className="w-full flex flex-col items-center gap-4 mb-14">
    {faqs.map((faq, i) => (
     <Accordion 
      key={i}
      headline={faq.headline}
      content={faq.content} />
    ))}
  </div>
 )
}
export default Accordions;