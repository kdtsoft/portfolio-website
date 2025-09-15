import { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll"; // ✅ react-scroll
import logo from "../assets/images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "Technologies", to: "technologies" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, href: "https://linkedin.com", color: "hover:text-blue-500" },
    { icon: <FaGithub />, href: "https://github.com", color: "hover:text-gray-400" },
    { icon: <FaFacebook />, href: "https://facebook.com", color: "hover:text-blue-600" },
    { icon: <FaYoutube />, href: "https://youtube.com", color: "hover:text-red-500" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Background */}
      <div class="absolute bottom-0 left-0 right-0 top-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-50">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="home" smooth={true} duration={500}>
            <img src={logo} alt="Logo" className="w-28 cursor-pointer" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-lg font-medium text-white">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70} // navbar height adjust
                className="hover:text-blue-400 transition cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex gap-4 text-xl text-white">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={social.color}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 shadow-md px-4 py-4 z-50 relative">
          <div className="flex flex-col gap-4 text-lg font-medium text-white">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="hover:text-blue-400 transition cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-4 text-xl pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={social.color}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
