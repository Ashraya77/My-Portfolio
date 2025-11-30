// Intro.jsx (Strictly adhering to original theme, only adding Resume button)
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaArrowDown } from 'react-icons/fa'; // Added FaDownload, FaEnvelope, and FaArrowDown

export default function Intro() {
  const text = "hi, Ashraya here.";
  const [displayText, setDisplayText] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);


  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
  function handleClickOutside(e) {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setOpenMenu(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);


  return (
    <div className='min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4 space-y-3 font-sans relative overflow-hidden'>
      
      {/* Coding/Laptop Animation (Original Code - untouched) */}
      <div className="absolute top-60 w-full flex justify-center mb-8">
        <motion.div
          className="relative"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Laptop Base */}
          <motion.div
            className="w-32 h-20 bg-gray-700 rounded-lg relative"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Keyboard */}
            <div className="absolute bottom-1 left-2 right-2 h-3 bg-gray-800 rounded flex justify-between px-1">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-1 h-2 bg-gray-600 rounded-sm" />
              ))}
            </div>
          </motion.div>
          
          {/* Laptop Screen */}
          <motion.div
            className="w-40 h-24 bg-gray-800 rounded-t-lg absolute -top-24 left-1/2 transform -translate-x-1/2 border-2 border-gray-600"
            animate={{ y: [0, -1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Screen Content - Code Editor */}
            <div className="p-2 h-full bg-gray-900 rounded-t">
              {/* Code Lines */}
              <motion.div
                className="text-xs font-mono text-green-400 space-y-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.div
                  className="flex items-center"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                >
                  <span className="text-gray-500 mr-2">1</span>
                  <span>function</span>
                  <motion.span
                    className="text-blue-400 ml-1"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                  >
                    develop
                  </motion.span>
                </motion.div>
                <motion.div
                  className="flex items-center"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <span className="text-gray-500 mr-2">2</span>
                  <span className="text-purple-400">return</span>
                  <motion.span
                    className="text-yellow-300 ml-1"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 2 }}
                  >
                    "awesome"
                  </motion.span>
                </motion.div>
                <motion.div
                  className="flex items-center"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <span className="text-gray-500 mr-2">3</span>
                  <motion.span
                    className="text-gray-400"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 3 }}
                  >
                    // building...
                  </motion.span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Coding Brackets Animation */}
          <motion.div
            className="absolute -left-8 top-4 text-2xl text-teal-400"
            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {"{"}
          </motion.div>
          <motion.div
            className="absolute -right-8 top-4 text-2xl text-teal-400"
            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            {"}"}
          </motion.div>

          {/* Floating Code Elements */}
          <motion.div
            className="absolute -top-12 -left-4 text-xs text-purple-400 font-mono"
            animate={{ 
              y: [0, -10, 0],
              x: [0, 5, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 0 }}
          >
            &lt;div&gt;
          </motion.div>
          <motion.div
            className="absolute -top-8 -right-4 text-xs text-blue-400 font-mono"
            animate={{ 
              y: [0, -8, 0],
              x: [0, -5, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          >
            const
          </motion.div>
        </motion.div>
      </div>

      {/* Main typing section */}
      <div className="flex items-center mt-32"> 
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
          {displayText}
        </h1>
        <span className='text-4xl sm:text-5xl md:text-6xl text-teal-400 animate-pulse ml-1'>
          |
        </span>
      </div>

      {/* Subtitle */}
      <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-medium text-center tracking-tight">
        I create stuff sometimes.
      </h2>

      {/* Paragraph */}
      <p className="md:text-lg text-gray-400 text-base font-normal text-center max-w-xl px-4 pt-4">
        I'm a Fullstack Developer, focused on building high-impact, large-scale applications. I enjoy creating seamless digital experiences from frontend design to backend infrastructure.
      </p>

      {/* Button Group (Classy, dual CTA) */}
      <div className="pt-10 flex flex-wrap justify-center gap-6">
        
        {/* Primary CTA (Say Hi!) - Slightly more prominent background */}
        <div className="relative" ref={menuRef}>
  <button
    onClick={() => setOpenMenu(!openMenu)}
    className='flex items-center px-6 py-3 text-lg font-semibold border-2 border-teal-400 text-white bg-teal-600 rounded-md shadow-lg hover:bg-teal-500 transition duration-300'
  >
    <FaEnvelope className="mr-3" />
    Say Hi!
  </button>

  {openMenu && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute left-0 mt-3 w-56 bg-slate-800 border border-teal-500 rounded-lg shadow-xl p-3 space-y-3 z-50"
    >
      <a
        href="mailto:aashray851@email.com"
        className="flex items-center text-gray-200 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md transition"
      >
        📧 Email
      </a>

      <a
        href="https://www.linkedin.com/in/aashray-roka-808158384/"
        target="_blank"
        className="flex items-center text-gray-200 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md transition"
      >
        🔗 LinkedIn
      </a>

      <a
        href="https://instagram.com/aashrayya"
        target="_blank"
        className="flex items-center text-gray-200 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md transition"
      >
        📸 Instagram
      </a>

      <a
        href="https://github.com/Ashraya77"
        target="_blank"
        className="flex items-center text-gray-200 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md transition"
      >
        💻 GitHub
      </a>
    </motion.div>
  )}
</div>


        
        {/* Secondary CTA (Download Resume) - Transparent/Outline Style */}
        <a
          href="/your-resume.pdf" // **IMPORTANT: Update this path to your actual PDF file!**
          download
          className='flex items-center px-6 py-3 text-lg font-normal border-2 border-teal-400 text-teal-200 bg-transparent rounded-md hover:bg-teal-900/50 transition duration-300'
        >
          <FaDownload className="mr-3" /> 
          Download Resume
        </a>
      </div>

      {/* Explore Button with Arrow - at the bottom */}
      <motion.div
        className="absolute bottom-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <button
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
          className="flex flex-col items-center text-teal-400 hover:text-teal-300 transition duration-300 group"
        >
          <span className="text-sm font-medium mb-2 tracking-wider">EXPLORE</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaArrowDown className="text-2xl" />
          </motion.div>
        </button>
      </motion.div>
    </div>
  );
}