import { FaqProps } from "./Accordion";
import Accordion from "./Accordion";

interface AccordionsProps {
  faqs: FaqProps[];
}

const Accordions = ({ faqs }: AccordionsProps) => {
  return (
    <div className="w-full flex flex-col items-center gap-4 mb-14">
      {faqs.map((faq, i) => (
        <Accordion 
          key={i}
          headline={faq.headline}
          content={faq.content} 
        />
      ))}
    </div>
  );
};

export default Accordions;