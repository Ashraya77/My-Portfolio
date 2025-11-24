import { useState, useEffect } from "react";
export default function Intro() {
const text = "hi, Ashraya here.";
const [displayText, setDisplayText] = useState("");
useEffect(() => {
let i = 0;
const interval = setInterval(() => {
setDisplayText(text.slice(0, i));
i++;
if (i > text.length) clearInterval(interval);
    }, 120);
return () => clearInterval(interval);
  }, []);

return (
<div className='min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4 space-y-6 font-sans'>


{/* Main typing section - Larger, bold, tracking-tight for a clean, modern look */}
<div className="flex items-center"> 
<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
{displayText}
</h1>
<span className='text-4xl sm:text-5xl md:text-6xl text-teal-400 animate-pulse ml-1'>
          |
</span>
</div>

{/* Subtitle - Slightly smaller, dark gray, and still clean */}
<h2 className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-medium text-center tracking-tight">
        I create stuff sometimes.
</h2>

{/* Paragraph - More constrained width (max-w-xl) and slightly smaller text for compactness */}
<p className="md:text-lg text-gray-400 text-base font-normal text-center max-w-xl px-4 pt-4">
I'm a Fullstack Developer, focused on building high-impact, large-scale applications. I enjoy creating seamless digital experiences from frontend design to backend infrastructure.</p>

{/* Button - Transparent background, clean border color, and a small icon */}
<div className="pt-4">
<button className='border-2 px-6 py-4 text-lg font-normal border-current text-teal-200 bg-transparent hover:bg-teal-800 transition duration-300'>
    {/* Simple envelope icon for "Say hi" */}
    <span className="mr-2">✉️</span> 
    Say hi!
</button>
</div>
</div>
  );
}