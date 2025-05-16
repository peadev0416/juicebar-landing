import { useState, useEffect } from 'react';
import { FaPhone, FaCalendarCheck } from 'react-icons/fa';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const textColor = scrolled ? 'text-gray-800' : 'text-white';
  const hoverColor = 'hover:text-green-500';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-white border-b border-gray-200 shadow-sm'
        : 'bg-transparent border-b border-transparent'
        }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img src="/assets/images/logo.png" alt="logo" className="h-8" loading="lazy" />
          <span className={`text-xl font-bold text-green-600`}>JuiceBar</span>
        </a>

        {/* Toggle Button (Mobile) */}
        <button
          className={`lg:hidden focus:outline-none ${textColor} ${hoverColor} transition-colors cursor-pointer`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5 bg-current mb-1 transition-all"></span>
          <span className="block w-6 h-0.5 bg-current mb-1 transition-all"></span>
          <span className="block w-6 h-0.5 bg-current transition-all"></span>
        </button>


        {/* Desktop Navigation */}
        <ul className={`hidden lg:flex flex-1 justify-center space-x-6 font-medium ${textColor}`}>
          <li><a href="#hero" className={`${hoverColor}`}>Home</a></li>
          <li><a href="#about" className={`${hoverColor}`}>About Us</a></li>
          <li><a href="#menu" className={`${hoverColor}`}>Menu</a></li>
          <li><a href="#benefits" className={`${hoverColor}`}>Why Choose Us</a></li>
          <li><a href="#testimonials" className={`${hoverColor}`}>Reviews</a></li>
          <li><a href="#newsletter" className={`${hoverColor}`}>Get 10% Off</a></li>
          <li><a href="#contact" className={`${hoverColor}`}>Contact</a></li>
        </ul>

        {/* Right CTA (Desktop) */}
        <div className={`hidden lg:flex items-center space-x-4 ${textColor}`}>
          <a
            href="#contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full flex items-center space-x-2"
          >
            <FaCalendarCheck />
            <span>Order Now</span>
          </a>
          <div className="flex items-center space-x-2 text-sm">
            <FaPhone className="text-green-500 transform -scale-x-100" size={20} />
            <div>
              <strong className="block text-sm font-semibold">Call Us</strong>
              <span>+39 02 1234 5678</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`lg:hidden px-4 py-4 shadow-lg space-y-4 transition-all duration-300 ${scrolled
            ? 'bg-white text-gray-800'
            : 'bg-black bg-opacity-90 text-white backdrop-blur-sm'
            }`}
        >
          <a href="#hero" onClick={() => setMenuOpen(false)} className="block hover:text-green-500 transition-colors">Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="block hover:text-green-500 transition-colors">About Us</a>
          <a href="#menu" onClick={() => setMenuOpen(false)} className="block hover:text-green-500 transition-colors">Menu</a>
          <a href="#benefits" onClick={() => setMenuOpen(false)} className="block hover:text-green-500 transition-colors">Why Choose Us</a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)} className="block hover:text-green-500 transition-colors">Reviews</a>
          <a href="#newsletter" onClick={() => setMenuOpen(false)} className="block hover:text-green-500 transition-colors">Get 10% Off</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block hover:text-green-500 transition-colors">Contact</a>
          <a
            href="#contact"
            className="block bg-orange-500 text-white px-4 py-2 rounded-full text-center hover:bg-orange-600 transition"
          >
            Order Now
          </a>
        </div>
      )}
    </header>
  );
}
