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
   <p className="w-[90%] font-urbanist text-foreground">
     Tired of spending endless hours repurposing your content for different platforms? ContentFlip is here to change the game! 🤖 
     Our AI-powered tool effortlessly transforms your content into ready-to-publish posts for Twitter, LinkedIn, Instagram, and more. Join our waitlist and be among the first to experience the magic!
   </p>
    
    <a className="w-full h-[3.5rem] flex items-center justify-center bg-primary text-white rounded-3xl my-14">
       Join the Waitlist 
   </a>
  </>
 )
}
export default HeroSection;