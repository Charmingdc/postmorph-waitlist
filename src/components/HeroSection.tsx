const HeroSection = () => {
 return (
  <>
  {/* Logo / Title */}
   <div className="font-urbanist rounded-xl border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
      🚀 Transform your content easily
   </div>

   {/* Headline */}
   <h1 className="w-auto font-urbanist text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight my-4">
      Repurpose Smarter: <span className="heading-gradient"> Do More </span> With What You <span className="heading-gradient"> Create </span>
   </h1>
   
   {/* Description */}
   <p className="w-[90%] font-urbanist mb-[.4rem]">
     You weren’t meant to spend hours rewriting the same content for different platforms.
     
     Contentflip instantly turns your content into platform-native posts — for X, LinkedIn, and more.
     
     Join the waitlist and take back your time.
   </p>
    
    <a href="#waitlist" className="w-full h-[3.5rem] flex items-center justify-center bg-primary text-white rounded-3xl my-14">
       Join the Waitlist 
   </a>
  </>
 )
}
export default HeroSection;