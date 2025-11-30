// Footer.jsx
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-slate-400 py-4 w-full mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {currentYear} Ashraya. Dedicated to building seamless web experiences.
        </p>
      </div>
    </footer>
  );
};

export default Footer;