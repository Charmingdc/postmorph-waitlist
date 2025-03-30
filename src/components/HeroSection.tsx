const HeroSection = () => {
 return (
  <>
  {/* Logo / Title */}
   <div className="font-urbanist rounded-xl border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
      🚀 Transform your content easily
   </div>

   {/* Headline */}
   <h1 className="w-auto font-urbanist text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight my-4">
      Turn <span className="heading-gradient">one piece of content</span> into dozens effortlessly
   </h1>
   
   {/* Description */}
   <p className="w-[90%] font-urbanist text-foreground">
      Stop wasting hours repurposing content manually. Our AI instantly transforms your videos, podcasts, and blogs into platform-ready posts for Twitter, LinkedIn, Instagram, and more—so you can grow faster with zero extra effort.
   </p>
    
    <a className="w-full h-[3.5rem] flex items-center justify-center bg-primary text-white rounded-3xl my-14">
       Join the Waitlist 
   </a>
  </>
 )
}
export default HeroSection;