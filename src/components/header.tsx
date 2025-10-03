
import logo from"../Assets/images/logo.png";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-color- flex items-center gap-2">
          <img src={logo} className="w-10 h-10" alt="Logo" />
          <span style={{ color: "#006AEA" }}>Marketing</span>
          <span style={{ color: "#003265" }}>Consult</span>
        </div>

        {/* Menu */}
        <nav className="flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-indigo-600">
            Accueil
          </Link>
          <Link to="/Apropos" className="text-gray-700 hover:text-indigo-600">
            À propos
          </Link>
            <Link to="/Portfolio" className="text-gray-700 hover:text-indigo-600">
            Portfolio
          </Link>
          <Link to="/blog" className="text-gray-700 hover:text-indigo-600">
            Blog
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-indigo-600">
            Contact
          </Link>

          {/* Bouton CTA */}
          <Link
              to="/contact"
              className="ml-4 px-5 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
            >
              Demander un devis
          </Link>
        
        </nav>
      </div>
    </header>
  );
}

