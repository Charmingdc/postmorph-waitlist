type Point = {
 icon: string;
 title: string;
 text: string;
}


const WhyJoin = () => {
 const points: Point[] = [
  { icon: '⚡', title: 'Effortless Content Repurposing', text: 'Turn one piece of content into many—without the extra work.' },
  { icon: '⏳', title: 'Built to Save You Time', text: 'Spend less time rewriting, formatting, and scheduling — and more time creating what matters.' },
  { icon: '🌍', title: 'Multi-Platform Ready', text: 'Optimize content for X, LinkedIn, Reddit, and more—instantly.' },
  { icon: '🤖', title: 'AI-Powered Precision', text: 'Maintain quality and brand consistency across all formats.' },
 ]
 
 
 return (
  <div className="w-full mx-auto rounded-xl bg-background/60 p-6 sm:p-7 border border-border/10 shadow-sm backdrop-blur-lg">
     <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center">
        Join the Waitlist & Stay Ahead
     </h3>
     <p className="text-sm sm:text-base text-muted-foreground text-center mt-2 mb-8">
       Gain early access to AI-powered content repurposing.  
          Automate, scale, and maximize your reach with ease.
     </p>

     <div className="w-full flex flex-col items-center space-y-6 text-left text-sm sm:text-base text-foreground md:flex-row md:space-x-4">
       {points.map((point, i) => (
        <div key={i} className="flex items-start gap-3">
          <div className="text-primary text-lg"> { point.icon } </div>
          
           <div>
            <p className="font-bold"> { point.title } </p>
            <p className="text-muted-foreground text-sm"> { point.text } </p>
           </div>
         </div>
        ))}
     </div>
   </div>
 )
}
export default WhyJoin;