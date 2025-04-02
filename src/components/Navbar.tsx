const Navbar = () => {
 return (
  <nav>
   <div className="w-screen flex items-center justify-start px-[2vw] mt-2">
     <img 
       src="/contentflip-logo.png"
       width="60px"
       height="60px"
       alt="Contentflip Logo"
       load="eager" />
         
     <h1 className="heading-gradient font-bold text-xl"> 
      Contentflip.app 
     </h1>
    </div>
   </nav>
 )
}
export default Navbar;