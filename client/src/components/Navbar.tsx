import { useState } from "react";
import { Github, Linkedin, Mail, Twitter, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#intro" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

// Define social links for mobile menu
const socialLinks = [
  { 
    icon: Github, 
    href: "https://github.com/Ashraya77", 
    target: "_blank", 
    rel: "noopener noreferrer",
    name: "Github"
  },
  { 
    icon: Linkedin, 
    href: "https://linkedin.com/Ashraya", 
    target: "_blank", 
    rel: "noopener noreferrer",
    name: "Linkedin"
  },
  { 
    icon: Twitter, 
    href: "https://twitter.com", 
    target: "_blank", 
    rel: "noopener noreferrer",
    name: "Twitter"
  },
  { 
    icon: Mail, 
    href: "mailto:aashray851@email.com",
    target: "_self", // Mailto links typically don't need a new tab
    rel: "",
    name: "Mail"
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-900 py-4 sticky top-0 z-50 shadow-lg md:px-32">
      {/* CHANGED: Using 'justify-between' for explicit left/right alignment 
        and keeping the original 'justify-around' logic with 'justify-around' 
        for a similar spacing effect, while ensuring Brand and Links are in separate groups.
      */}
      <div className="flex items-center justify-around px-4 md:px-0"> 
        
        {/* --- LEFT: Brand Name --- */}
        <div className="flex items-center">
          
          {/* Brand Name: ASHRAYA */}
          <div className="text-xl font-extrabold tracking-wider">
            <span className="text-teal-400">A</span>
            <span className="text-white">SHRAYA</span>
          </div>
        </div>

        {/* --- RIGHT: Desktop Nav Links & Mobile Menu Button --- */}
        <div className="flex items-center gap-5"> 
            
          {/* Desktop Nav Links */}
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

          {/* Mobile Menu Button */}
          <button
            className="text-gray-300 md:mr-0"
            onClick={() => setOpen(!open)}
          >
            <span className="md:hidden">
              {open ? <X size={28} /> : <Menu size={28} />}
            </span>
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN (No change) --- */}
      <div
        className={`md:hidden flex flex-col gap-4 mt-4 overflow-hidden transition-all duration-300 px-8 ${
          open ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        {/* Navigation Links */}
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

        {/* Say Hi Section (Social Links on Mobile) */}
        <div className="pt-2 border-t border-slate-700 mt-2">
            <h3 className="text-sm font-bold text-teal-200 mb-3">Say Hi 👋</h3>
            <div className="flex gap-5 justify-start">
                {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                        <a 
                            key={social.name}
                            href={social.href} 
                            target={social.target} 
                            rel={social.rel}
                            onClick={() => setOpen(false)}
                            className="text-gray-300 hover:text-teal-200 transition-colors duration-300"
                        >
                            <Icon size={24} />
                        </a>
                    );
                })}
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;