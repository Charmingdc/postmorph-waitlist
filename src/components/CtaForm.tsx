type EmailProps = {
 email: string;
 setEmail: (email: string) => string;
}


const CtaForm: React.FC<EmailProps> = ({email, setEmail}) => {
 const handleJoinWaitlist = async () => {
  if (!email.trim()) return;
  
  alert('Waitlist joined successfully')
 }
 
 return (
  <>
   <h3 className="text-lg mt-24 md:text-xl">
     Join now—repurpose content 10x faster before everyone else."
   </h3>
      
   {/* Email Input Form */}
   <form className="w-full flex flex-col items-center py-4">
    <div className="w-[100%] h-14 relative flex items-center justify-start border border-border/10 rounded-2xl">
      <input 
       type="email"
       placeholder="Enter your email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       className="w-[100%] h-[100%] font-urbanist text-sm rounded-2xl border-none bg-transparent px-4 py-2 pr-[7rem] border border-gray-300 rounded-md focus:outline-none focus:ring-none" />
        
      <button
       onClick={async () => await handleJoinWaitlist()}
       className="w-[6rem] bg-primary py-[.6rem] text-white px-6 rounded-xl absolute right-[.6rem]">
         Join
      </button>
    </div>
   </form>
  </>
 )
}
export default CtaForm;