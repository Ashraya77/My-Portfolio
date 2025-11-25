import { useState, useEffect } from "react";

// Consolidated list of all technologies for a flat display
const ALL_SKILLS = [
  "Nestjs",,"Next.js", "React", "TypeScript","Next.js", 
  "Node.js", "Express.js", 
  "PostgreSQL", "MongoDB", "Redis", 
  "Git", "Docker"
];

// Reusable SVG for a checkmark or list icon
const CheckIcon = ({ className = "w-5 h-5" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={`${className} text-teal-200`}
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6"></polyline> {/* Caret Right Path */}
  </svg>
);

const About = () => {
  // Simple state to simulate loading the profile (optional)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading delay
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Placeholder image URL using colors close to the new scheme (slate-900 background and teal-200 text)
  const profileImageUrl = "https://placehold.co/400x400/0f172a/99f6e4?text=Your+Profile+Picture";
  
  return (
    <div className={` bg-slate-900 p-6 sm:p-12 font-sans`}>
      {/* py-24 ensures 96px top and bottom padding, meeting the 80px requirement */}
      <div className="max-w-6xl mx-auto">
        
        {/* === SECTION HEADING WITH INLINE LINE === */}
        <div className="flex items-center mb-12">
          {/* Heading Text */}
          <h2 className="text-3xl font-bold text-white whitespace-nowrap">
            <span className="text-white mr-2">/</span> about me
          </h2>
          {/* Inline Line that takes up remaining space */}
          <div className="ml-4 mt-3 w-130 h-[1px] bg-teal-200 opacity-30 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Column 1: Text Content and Technologies (Spans 2/3 on desktop) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Main Bio Paragraph */}
            <div className={`text-lg text-gray-400 space-y-4`}>
              <p>
                Hello! I'm Ashraya, a <span className="text-teal-200"> Fullstack Developer. </span>  I'm passionate about building robust, scalable applications that solve real-world problems. My experience spans the entire development lifecycle, from conceptualizing and designing intuitive user interfaces to implementing performant backend infrastructure.
              </p>
              
             
            </div>

            {/* Technologies Section - FLAT DISPLAY */}
            <div className="pt-3">
              <h3 className="text-xl font-light text-white mb-4">
                Here are some technologies I've been working with:
              </h3>
              
              {/* Flat list of skills, displayed in two columns on all screens */}
              <ul className="grid grid-cols-2 gap-x-1 gap-y-1 text-lg sm:text-base">
                {ALL_SKILLS.map((skill, index) => (
                  <li 
                    key={index} 
                    className={`flex items-center text-gray-400 font-light`}
                  >
                    <CheckIcon className="w-4 h-4 mr-2 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className={`text-lg text-gray-400 space-y-4`}>
               <p>
                When I'm not coding, you can find me exploring new algorithms, contributing to open-source projects, or perhaps grinding on gaming or chess.
              </p>
            </div>

          </div>

          {/* Column 2: Profile Picture (Spans 1/3 on desktop) */}
          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            <div className={`relative w-64 h-64 sm:w-80 sm:h-80 transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
              
              {/* Image Frame/Border effect using border-teal-200 */}
              <div className={`absolute inset-0 border-2 border-teal-200 rounded-lg transform translate-x-3 translate-y-3`}></div>
              
              {/* Profile Image */}
              <img
                src={profileImageUrl}
                alt="Ashraya Profile"
                className="w-full h-full object-cover rounded-lg relative z-10 filter grayscale hover:grayscale-0 transition duration-500 ease-in-out"
                loading="lazy"
                
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default About;