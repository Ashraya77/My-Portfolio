import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaArrowDown, FaTimes, FaLinkedin, FaGithub, FaInstagram, FaStackOverflow, FaGlobe } from 'react-icons/fa';

export default function Intro() {
  const text = "hi, Ashraya here.";
  const [displayText, setDisplayText] = useState("");
  // openMenu controls the visibility of the mobile dropdown menu only
  const [openMenu, setOpenMenu] = useState(false);
  
  // Ref for the mobile dropdown menu container
  const menuRef = useRef(null); 
  
  // --- Social Link Data (for clean mapping) ---
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/aashray-roka-808158384/', icon: FaLinkedin, color: 'hover:text-blue-400' },
    { name: 'GitHub', href: 'https://github.com/Ashraya77', icon: FaGithub, color: 'hover:text-gray-400' },
    { name: 'Stack Overflow', href: 'https://stackoverflow.com/users/your-id', icon: FaStackOverflow, color: 'hover:text-orange-500' },
    { name: 'Website', href: 'https://your-portfolio-site.com', icon: FaGlobe, color: 'hover:text-purple-400' },
    { name: 'Instagram', href: 'https://instagram.com/aashrayya', icon: FaInstagram, color: 'hover:text-pink-400' },
  ];
  
  // Gmail/Email link for the main CTA
  const gmailLink = 'mailto:aashray851@email.com';

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
  
 

  const handleExploreScroll = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };
  
  // Function to open/close the mobile menu

  // Define Framer Motion variants for the dropdown menu
  const menuVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.2 } },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <div className='min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4 sm:p-8 font-sans relative overflow-hidden z-10'>
     

      {/* 2. VERTICAL SOCIAL BAR (Left, fixed, desktop only, increased spacing) */}
      <motion.div
        className="hidden lg:flex flex-col items-center fixed left-0 top-0 bottom-0 m-auto w-16 h-96 justify-center z-30 pl-8" 
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        {/* Increased space-y-8 for more vertical spacing */}
        <div className="space-y-12 "> 
          {socialLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`text-gray-500 transition duration-300 px-5 ${link.color}`}
              aria-label={link.name}
            >
              <link.icon className="text-2xl" />
            </a>
          ))}
        </div>
  
      </motion.div>
      
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
      <div className="flex items-center mt-40 sm:mt-52 md:mt-32 lg:mt-20 z-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          {displayText}
        </h1>
        <span className='text-4xl sm:text-5xl md:text-6xl text-teal-400 animate-pulse ml-1'>
          |
        </span>
      </div>

      {/* Subtitle */}
      <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-medium text-center tracking-tight mt-2">
        I bring fullstack ideas to life.
      </h2>

      {/* Paragraph */}
      <p className="md:text-lg text-gray-300 text-base font-light text-center max-w-xl px-4 pt-4">
        I'm a **Fullstack Developer**, focused on building high-impact, large-scale applications. I enjoy creating seamless digital experiences from frontend design to backend infrastructure.
      </p>

      {/* Button Group */}
      <div className="mt-8 pt-4 flex flex-wrap justify-center gap-4 sm:gap-6 z-20">
        
        {/* Direct EMAIL CTA (Say Hi!) */}
        <a
          href={gmailLink} // Direct mailto link
          className='flex items-center px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg font-semibold border-2 border-teal-400 text-white rounded-md shadow-lg transition duration-300 bg-teal-600 hover:bg-teal-500'
        >
          <FaEnvelope className="mr-3" />
          Say Hi!
        </a>
        
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
      
      {/* 4. MOBILE DROPDOWN MENU (Only shows "Close" message) */}
      <motion.div
        id="mobile-social-menu"
        ref={menuRef}
        className={`absolute bg-slate-800 p-4 rounded-lg shadow-2xl z-40 w-48 transition-opacity duration-200 sm:hidden ${
          openMenu ? 'block' : 'hidden'
        } top-16 left-4`} 
        initial="hidden"
        animate={openMenu ? "visible" : "hidden"}
        variants={menuVariants}
        onClick={() => setOpenMenu(false)} // Closes on click anywhere inside
      >
        {/* Simplified mobile menu content */}
        <p className="text-gray-400 text-sm text-center">
            Social links are available on desktop, or access them directly via the links below!
        </p>
        <p className="text-teal-400 text-center mt-2 font-medium">
            <FaTimes className="inline mr-1" /> Tap to Close
        </p>
      </motion.div>


      {/* Explore Button with Arrow - at the bottom */}
      <motion.div
        className="absolute bottom-18  z-0 hidden sm:block" 
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