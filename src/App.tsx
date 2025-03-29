import { useState } from "react";
import './index.css';

const App = () => {
  const [email, setEmail] = useState<string>("");

  return (
    <main className="w-screen h-screen bg-hero-pattern bg-center flex flex-col items-center justify-center text-center p-0 px-[5%] -mt-12 overflow-y-hidden">
      
      {/* Logo / Title */}
      <div className="rounded-xl border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
        🚀 Transform your content easily
      </div>

      {/* Headline */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight my-4">
        Turn <span className="heading-gradient">one piece of content</span> into dozens effortlessly
      </h1>

      {/* Description */}
      <p className="w-[80%] text-blue-500 dark:text-gray-300">
        Effortlessly transform your content into multiple formats. Save hours, stay consistent, and grow your audience without extra work.
      </p>

      {/* Email Input Form */}
      <form className="w-[90%] flex flex-col items-center py-4 mt-12">
        <div className="w-[100%] h-14 relative flex items-center justify-start border border-primary/20 rounded-3xl">
          <input 
           type="email"
           placeholder="Enter your email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           className="w-[100%] h-[100%] rounded-3xl border-none bg-transparent px-4 py-2 pr-[7rem] border border-gray-300 rounded-md focus:outline-none focus:ring-[.060rem] focus:ring-primary/10"
          />
        
          <button className="w-[6rem] bg-primary py-2 text-white px-6 rounded-2xl absolute right-[.6rem]">
           Join
          </button>
        </div>
      </form>
    </main>
  );
};

export default App;