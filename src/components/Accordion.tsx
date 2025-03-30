import { useState } from "react";
export type FaqProps = {
 headline: string;
 content: string;
}

const Accordion = ({headline, content}: FaqProps) => {
 const [isActive, setIsActive] = useState<boolean>(false);
 
 
 return (
  <div className={`w-full h-${!isActive ? '[4.5rem]' : 'auto'} flex flex-col items-center rounded-xl bg-background/60 px-4 border border-border/10 shadow-sm backdrop-blur-lg overflow-y-hidden`}>
   <div className="w-full h-[4.5rem] px-2 flex flex-row items-center justify-between">
    <h3 className="text-md my-6">
     { headline }
    </h3>
    
    <button 
     onClick={() => setIsActive(!isActive)}> 
      Toggle 
    </button>
   </div>
   
         
   <p className="my-2">
    { content }
   </p>
  </div>
 )
}
export default Accordion;