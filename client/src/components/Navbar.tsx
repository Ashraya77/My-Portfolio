import { useState } from "react";
import { Github, Linkedin, Mail, Twitter, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#intro" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-900 py-4 sticky top-0 z-50 shadow-lg  md:px-32 ">
      <div className="flex items-center justify-around">
        
        {/* --- LEFT: Desktop Nav Links --- */}
        <div className="hidden md:flex gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-teal-200 transition-colors duration-300 text-sm font-bold"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* --- RIGHT: Social Links --- */}
        <div className="flex gap-4">
          <a href="https://github.com/Ashraya77" target="_blank" rel="noopener noreferrer"
             className="text-gray-300 hover:text-white transition-colors duration-300">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
             className="text-gray-300 hover:text-white transition-colors duration-300">
            <Linkedin size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
             className="text-gray-300 hover:text-white transition-colors duration-300">
            <Twitter size={20} />
          </a>
          <a href="mailto:aashray851@email.com"
             className="text-gray-300 hover:text-white transition-colors duration-300">
            <Mail size={20} />
          </a>
        </div>

        {/* --- Mobile Menu Button --- */}
        <button
          className="md:hidden text-gray-300 ml-3"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      <div
        className={`md:hidden flex flex-col gap-4 mt-4 overflow-hidden transition-all duration-300 ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-gray-300 hover:text-teal-200 transition-colors duration-300 text-sm font-bold"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
