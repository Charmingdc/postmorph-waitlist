import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { toast } from "sonner";

type EmailProps = {
 email: string;
 setEmail: (email: string) => string;
}


const CtaForm: React.FC<EmailProps> = ({email, setEmail}) => {
  const [loading, setLoading] = useState<string>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const { width, height } = useWindowSize();
  
  const images: string[] = [
   'user1',
   'user3',
   'user2',
   'user4'
  ]
  
 
  useEffect(() => {
   if (isActive) {
    const timer = setTimeout(() => setIsActive(false), 5000);
    
    return () => clearTimeout(timer);
   }
  }, [isActive]);
  
  
 const handleJoinWaitlist = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  
  try {
   if (!email.trim()) throw new Error('Invalid input value 🥺');
   
   toast.success('Congrats! Waitlist joined successfully 🎉');
   setIsActive(true);
  } catch (err: T) {
   console.log('Erorr:', err.message);
   toast.error(err.message);
   setIsActive(false);
  } finally {
   setEmail('');
   setLoading(false);
  }
 }
 
 return (
  <>
   <h3 className="text-lg mt-24 md:text-xl">
     Join now! Repurpose content 10x faster before everyone else.
   </h3>
      
   {/* Email Input Form */}
   <form
    onSubmit={async (e) => await handleJoinWaitlist(e)}
    className="w-full flex flex-col items-center py-4">
    <div className="w-[100%] h-14 relative flex items-center justify-start border border-border/10 rounded-2xl">
      <input 
       type="email"
       placeholder="Enter your email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       className="w-[100%] h-[100%] font-urbanist text-sm rounded-2xl border-none bg-transparent px-4 py-2 pr-[7rem] border border-gray-300 rounded-md focus:outline-none focus:ring-none" />
        
      <button
       type="submit"
       className="w-[6rem] bg-primary py-[.6rem] text-white px-6 rounded-xl absolute right-[.6rem]">
         Join
      </button>
    </div>
   </form>
   
   <div className="flex flex-row items-center justify-center -mt-[.4rem]">
    <div className="flex flex-row items-center justify-center mr-2">
     {images.map((img, i) => (
       <img 
        src={`/illustrations/${img}.jpg`}
        width="25px" height="25px"
        className="border border-secondary -ml-3 rounded-full"
        alt={i} />
      ))}
    </div>
    <h2> 
     <strong> 1,250+ </strong>
     people joined
    </h2>
   </div>
   
   {isActive && (
    <Confetti
      width={width}
      height={height}
      numberOfPieces={100}
      gravity={0.3}
      opacity={0.8}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none'
      }} /> )}
  </>
 )
}
export default CtaForm;