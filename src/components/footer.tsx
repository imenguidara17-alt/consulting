import { FaFacebook, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-indigo-600 text-white mt-16">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-16">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold">
            Marketing<span className="text-yellow-300">Consult</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            Nous aidons les entreprises à booster leur visibilité et à atteindre leurs objectifs
            grâce à des stratégies de marketing digital innovantes, du design créatif et des solutions adaptées.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col justify-between">
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-yellow-300">Accueil</Link></li>
            <li><Link to="/Apropos" className="hover:text-yellow-300">À propos</Link></li>
            <li><Link to="/portfolio" className="hover:text-yellow-300">Portfolio</Link></li>
            <li><Link to="/blog" className="hover:text-yellow-300">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>
          </ul>
        </div>

        {/* Contact + Réseaux sociaux */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>📍 Tunis, Tunisie</li>
              <li>📞 +216 12 345 678</li>
              <li>✉ contact@marketingconsult.com</li>
              <li>🕒 Lun - Ven : 9h - 18h</li>
            </ul>
          </div>
          <div className="flex gap-6 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} className="hover:text-indigo-400 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} className="hover:text-indigo-400 transition" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={24} className="hover:text-indigo-400 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className="hover:text-indigo-400 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20 mt-8 py-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} MarketingConsult – Tous droits réservés
        </p>
      </div>
    </footer>
  );
}

export default Footer;
