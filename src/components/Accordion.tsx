import { useState } from "react";
export type FaqProps = {
 headline: string;
 content: string;
}

const Accordion = ({headline, content}: FaqProps) => {
 const [isActive, setIsActive] = useState<boolean>(false);
 
 
 return (
  <div className={`w-full flex flex-col items-center rounded-xl bg-background/60 px-4 border border-border/10 shadow-sm backdrop-blur-lg transition-all duration-500 overflow-hidden ${isActive ? 'max-h-80' : 'max-h-[4.5rem]'}`}>
   <div className="w-full h-[4.5rem] px-2 flex flex-row items-center justify-between">
    <h3 className="text-md my-6">
     { headline }
    </h3>
    
    <button 
     onClick={() => setIsActive(!isActive)}
     className={`bg-secondary flex items-center justify-center p-[.5rem] rounded-full transition-transform duration-500 ${isActive ? 'rotate-180' : ''}`}> 
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
    </button>
   </div>
   
         
   <p className="bg-secondary p-3 my-2 mb-4 rounded-xl">
    { content }
   </p>
  </div>
 )
}
export default Accordion;