import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaArrowDown, FaBars, FaTimes, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Intro() {
  const text = "hi, Ashraya here.";
  const [displayText, setDisplayText] = useState("");
  // openMenu controls the visibility of the single dropdown menu
  const [openMenu, setOpenMenu] = useState(false);
  
  // Ref for the single dropdown menu container
  const menuRef = useRef(null); 
  // Ref for the mobile hamburger button (top-left)
  const mobileButtonRef = useRef(null); 
  // Ref for the desktop 'Say Hi!' button (center-aligned)
  const desktopButtonRef = useRef(null);

  // --- Social Link Data (for clean mapping) ---
  const socialLinks = [
    { name: 'Email', href: 'mailto:aashray851@email.com', icon: FaEnvelope, color: 'text-red-400' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/aashray-roka-808158384/', icon: FaLinkedin, color: 'text-blue-400' },
    { name: 'Instagram', href: 'https://instagram.com/aashrayya', icon: FaInstagram, color: 'text-pink-400' },
    { name: 'GitHub', href: 'https://github.com/Ashraya77', icon: FaGithub, color: 'text-gray-400' },
  ];

  // Typing Effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);
  
  // Click Outside Handler for Unified Menu
  useEffect(() => {
    function handleClickOutside(e) {
      if (!openMenu) return;

      const clickedButton = e.target === mobileButtonRef.current || e.target === desktopButtonRef.current || 
                            mobileButtonRef.current?.contains(e.target) || desktopButtonRef.current?.contains(e.target);
      
      const clickedMenu = menuRef.current?.contains(e.target);

      // Close the menu if the click is neither on the button nor inside the menu
      if (!clickedButton && !clickedMenu) {
         setOpenMenu(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [openMenu]); 

  const handleExploreScroll = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };
  
  // Function to open/close the menu
  const handleMenuToggle = (e) => {
    e.stopPropagation(); 
    setOpenMenu(prev => !prev);
  }

  return (
    <div className='min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4 sm:p-8 font-sans relative overflow-visible z-10'>
      
    

      {/* Coding/Laptop Animation (Unchanged) */}
      <div className="absolute top-[22vh] sm:top-[25vh] md:top-[28vh] w-full flex justify-center">
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
      <div className="flex items-center mt-40 sm:mt-52 md:mt-32 lg:mt-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
          {displayText}
        </h1>
        <span className='text-4xl sm:text-5xl md:text-6xl text-teal-400 animate-pulse ml-1'>
          |
        </span>
      </div>

      {/* Subtitle */}
      <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-medium text-center tracking-tight mt-2">
        I create stuff sometimes.
      </h2>

      {/* Paragraph */}
      <p className="md:text-lg text-gray-400 text-base font-normal text-center max-w-xl px-4 pt-4">
        I'm a Fullstack Developer, focused on building high-impact, large-scale applications. I enjoy creating seamless digital experiences from frontend design to backend infrastructure.
      </p>

      {/* Button Group */}
      <div className="mt-8 pt-4 flex flex-wrap justify-center gap-4 sm:gap-6">
        
        {/* 2. DESKTOP TRIGGER (Say Hi!) */}
        <div className="relative hidden sm:block">
          <button
            ref={desktopButtonRef} // Attach ref for click outside
            onClick={handleMenuToggle}
            className={`flex items-center px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg font-semibold border-2 border-teal-400 text-white rounded-md shadow-lg transition duration-300 ${
              openMenu ? 'bg-teal-500' : 'bg-teal-600 hover:bg-teal-500'
            }`}
          >
            <FaEnvelope className="mr-3" />
            Say Hi!
          </button>
        </div>
        
        {/* 3. UNIFIED DROPDOWN MENU */}
       
        
        {/* Secondary CTA (Download Resume) */}
        <a
          href="/your-resume.pdf"
          download
          className='flex items-center px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg font-normal border-2 border-teal-400 text-teal-200 bg-transparent rounded-md hover:bg-teal-900/50 transition duration-300'
        >
          <FaDownload className="mr-3" /> 
          Download Resume
        </a>
      </div>

      {/* Explore Button with Arrow - at the bottom */}
      <motion.div
        className="absolute bottom-10 sm:bottom-20 z-0" 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <button
          onClick={handleExploreScroll}
          className="flex flex-col items-center text-teal-400 hover:text-teal-300 transition duration-300 group"
        >
          <span className="text-sm font-medium mb-2 tracking-wider">EXPLORE</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaArrowDown className="text-2xl group-hover:text-3xl transition-all duration-300" />
          </motion.div>
        </button>
      </motion.div>
    </div>
  );
}