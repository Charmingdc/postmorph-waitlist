const Navbar = () => {
 return (
  <nav>
   <div className="w-screen flex items-center justify-start px-[2vw] mt-2">
     <img 
       src="/contentflip-logo.png"
       width="50px"
       height="50px"
       alt="Contentflip Logo"
       loading="eager" />
         
     <h1 className="heading-gradient font-bold text-xl"> 
      Postmorph
     </h1>
    </div>
   </nav>
 )
}
export default Navbar;