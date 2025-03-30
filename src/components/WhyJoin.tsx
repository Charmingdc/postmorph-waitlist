const WhyJoin = () => {
 return (
  <div className="w-full mx-auto rounded-xl bg-background/60 p-6 sm:p-7 border border-border/50 shadow-md backdrop-blur-lg">
     <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center">
        Join the Waitlist & Stay Ahead
     </h3>
     <p className="text-sm sm:text-base text-muted-foreground text-center mt-2 mb-8">
       Gain early access to AI-powered content repurposing.  
          Automate, scale, and maximize your reach with ease.
     </p>

     <div className="w-full flex flex-col items-center space-y-6 text-left text-sm sm:text-base text-foreground md:flex-row md:space-x-4">
       <div className="flex items-start gap-3">
        <div className="text-primary text-lg">⚡</div>
           
         <div>
          <p className="font-medium">Effortless Content Repurposing</p>
           <p className="text-muted-foreground text-sm">Turn one piece of content into many—without the extra work.</p>
         </div>
       </div>
      
       <div className="flex items-start gap-3">
        <div className="text-primary text-lg">🌍</div>
          
         <div>
          <p className="font-medium">Multi-Platform Ready</p>
          <p className="text-muted-foreground text-sm">Optimize content for X, LinkedIn, TikTok, and more—instantly.</p>
          </div>
       </div>

       <div className="flex items-start gap-3">
        <div className="text-primary text-lg">🤖</div>
          
        <div>
         <p className="font-medium">AI-Powered Precision</p>
          <p className="text-muted-foreground text-sm">Maintain quality and brand consistency across all formats.</p>
        </div>
       </div>
     </div>
   </div>
 )
}
export default WhyJoin;