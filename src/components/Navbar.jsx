import { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
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
      <div className="absolute inset-0 bg-slate-950 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-50">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#home">
            <img src={logo} alt="Logo" className="w-28" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-lg font-medium text-white">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-blue-400 transition">
                {link.name}
              </a>
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
              <a
                key={link.name}
                href={link.href}
                className="hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
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
