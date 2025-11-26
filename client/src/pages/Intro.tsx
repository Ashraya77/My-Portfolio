import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    <div className='min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4 space-y-3 font-sans relative overflow-hidden'>
      
      {/* Coding/Laptop Animation */}
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

      {/* Button */}
      <div className="pt-10">
        <a
          href="mailto:aashray851@email.com"
          className='border-2 px-6 py-4 text-lg font-normal border-current text-teal-200 bg-transparent hover:bg-teal-800 transition duration-300'
        >
          <span className="mr-2">✉️</span> 
          Say hi!
        </a>
      </div>
    </div>
  );
}