const Footer = () => {
 const currentYr = new Date().getFullYear();
 
 return (
  <footer className="text-center text-sm text-muted-foreground mt-8 border-t border-border/20 py-6">
    © { currentYr } ContentFlip. All rights reserved.
  </footer>
 )
}
export default Footer;