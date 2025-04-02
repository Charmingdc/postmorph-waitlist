const HeroSection = () => {
 return (
  <>
  {/* Logo / Title */}
   <div className="font-urbanist rounded-xl border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
      🚀 Transform your content easily
   </div>

   {/* Headline */}
   <h1 className="w-auto font-urbanist text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight my-4">
     <span className="heading-gradient"> Join the Future of Content </span> Repurposing
   </h1>
   
   {/* Description */}
   <p className="w-[90%] font-urbanist mb-[.4rem]">
     Tired of repurposing content for every platform? Contentflip does it for you! 🤖
     
     Our AI transforms your content into ready-to-post tweets, LinkedIn updates, and more. Join the waitlist now!
   </p>
    
    <a href="#waitlist" className="w-full h-[3.5rem] flex items-center justify-center bg-primary text-white rounded-3xl my-14">
       Join the Waitlist 
   </a>
  </>
 )
}
export default HeroSection;