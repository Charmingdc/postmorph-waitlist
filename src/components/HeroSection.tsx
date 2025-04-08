const HeroSection = () => {
 return (
  <>
  {/* Logo / Title */}
   <div className="rounded-xl border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
      🚀 Transform content easily
   </div>

   {/* Headline */}
   <h1 className="w-auto text-4xl md:text-5xl lg:text-6xl font-bolder tracking-tight my-4">
     <span className="heading-gradient"> Create once. </span> Repurpose across every platform <span className="heading-gradient"> in seconds. </span>
   </h1>
   
   {/* Description */}
   <p className="w-[90%] mb-[.4rem]">
     You weren’t meant to spend hours rewriting content for every platform.
     Postmorph instantly turns your ideas into platform-native posts — for X, LinkedIn, and more.
     Join the waitlist and take back your time.
   </p>
    
    <a href="#waitlist" className="w-[94%] h-[3.5rem] flex items-center justify-center bg-primary text-white rounded-3xl my-10">
       Join the Waitlist 
   </a>
  </>
 )
}
export default HeroSection;