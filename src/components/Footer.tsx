const Footer = () => {
 const currentYr = new Date().getFullYear();
 
 return (
  <footer className="bg-background text-center text-sm text-muted-foreground mt-8 border-t border-border/20 py-6">
    <p> 
     Follow on X (Twitter) | <a href='https://x.com/Charmingdc01' target='_blank' className="text-primary"> Muis </a>
    </p>
    
   <p className="mt-2">
    © { currentYr } Postmorph. All rights reserved.
   </p>
  </footer>
 )
}
export default Footer;