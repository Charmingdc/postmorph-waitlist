import React, { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { toast } from "sonner";

type EmailProps = {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
};

const CtaForm: React.FC<EmailProps> = ({ email, setEmail }) => {
  const [emailCount, setEmailCount] = useState<number>(0);
  const hasGottenEmailCount = useRef<boolean>(false) 
  const [loading, setLoading] = useState<boolean>(false);
  const [isLoadingCount, setIsLoadingCount] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const { width, height } = useWindowSize();
  
  const images: string[] = ["user1", "user3", "user2", "user4"];
  
  
  useEffect(() => {
   if (isActive) {
    const timer = setTimeout(() => setIsActive(false), 5000);
     return () => clearTimeout(timer);
   }
  }, [isActive]);
  
  
  useEffect(() => {
   if (hasGottenEmailCount.current) return
   
   getNumberOfEmails();
   hasGottenEmailCount.current = true;
  }, []);
  
  
  const getNumberOfEmails = async () => {
   setIsLoadingCount(true);
   
   try {
     const response = await fetch("/api/firestore", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
     });
    
     if (!response.ok) throw new Error("Failed to fetch data");

     const data = await response.json();
     if (!data || !data.type) throw new Error("Invalid response from server");

     if (data.type === "success") setEmailCount(data.count);
   } catch (error) {
     console.error(error);
     toast.error("Failed to fetch email count ❌");
   } finally {
    setIsLoadingCount(false);
   }
  };
  
 
  const handleJoinWaitlist = async (e: React.FormEvent) => {
   e.preventDefault();
   setLoading(true);
  
    try {
     if (!email.trim()) throw new Error("Email is required 🥺");

     // Email regex validation
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailRegex.test(email)) throw new Error("Invalid email format ❌");

     const response = await fetch("/api/firestore", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ email }),
     });

     const data = await response.json();
     if (data.type === 'success') {
      hasGottenEmailCount.current = false;
      await getNumberOfEmails();
     }

     if (data.type === 'error') {
      toast.error(data.message)
     } else if (data.type === 'warning') {
      toast.warning(data.message)
     } else if (data.type === 'success') {
      toast.success(data.message);
     }
     setIsActive(data.type === "success");
   } catch (err) {
     toast.error(err instanceof Error ? err.message : "Unexpected error ❌");
   } finally {
     setEmail("");
     setLoading(false);
   }
  };
  
  
  return (
    <>
     <h3 className="text-lg mt-24 md:text-xl">
       Join now! Repurpose content 10x faster before everyone else.
     </h3>

     {/* Email Input Form */}
     <form
      onSubmit={async (e) => await handleJoinWaitlist(e)}
      id="waitlist"
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
           disabled={loading}
           className={`w-[6rem] ${loading ? 'bg-gray-500' : 'bg-primary'} py-[.6rem] text-white px-6 rounded-xl absolute right-[.6rem]`}>
            {loading ? "Joining" : "Join"}
         </button>
       </div>
     </form>

     <div className="flex flex-row items-center justify-center -mt-[.4rem]">
       {!isLoadingCount ? (
        <>
         <div className="flex flex-row items-center justify-center mr-2">
          {images.map((img, i) => (
           <img
             key={i}
             src={`/illustrations/${img}.jpg`}
             width="25px"
             height="25px"
             className="border border-secondary -ml-3 rounded-full"
             alt={img} />
           ))}
         </div>
         
         <strong className="mr-[.3rem]">
          { emailCount }+
         </strong> people joined already!
        </>
       ) : (
         <em> getting email count </em>
       )}
     </div>

     {isActive && (
       <Confetti
         width={width}
         height={height}
         numberOfPieces={200}
         gravity={0.3}
         opacity={0.8}
         style={{
           position: "fixed",
           top: 0,
           left: 0,
           width: "100vw",
           height: "100vh",
           pointerEvents: "none",
         }} />
     )}
   </>
  );
};

export default CtaForm;