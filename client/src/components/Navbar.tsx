import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#intro' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' }
];

const Navbar = () => {
  return (
    <nav className="bg-#1e1e1e py-4 flex items-center justify-between sticky top-0 z-50 shadow-lg px-120">
      <div className="flex gap-3">
       {navLinks.map((link) => (
          <a 
            key={link.name}
            href={link.href} 
            className="text-purple-200 hover:text-white transition-colors duration-300 text-sm font-bold"
          >
            {link.name}
          </a>
        ))}
      </div>
      
      <div className="flex gap-4">
        <a 
          href="https://github.com/Ashraya77" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-purple-300 hover:text-white transition-colors duration-300"
        >
          <Github size={20} />
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-purple-300 hover:text-white transition-colors duration-300"
        >
          <Linkedin size={20} />
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-purple-300 hover:text-white transition-colors duration-300"
        >
          <Twitter size={20} />
        </a>
        <a 
          href="mailto:your@email.com"
          className="text-purple-300 hover:text-white transition-colors duration-300"
        >
          <Mail size={20} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;