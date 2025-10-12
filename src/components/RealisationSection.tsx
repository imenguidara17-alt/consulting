import { usePortfolio } from "../context/PortfolioContext";
import { Link } from "react-router-dom";

export const RealisationsSection = () => {
  const { projets } = usePortfolio(); // récupération des projets depuis le contexte

  return (
    <section className="py-16 bg-white">
      <div className="px-6 md:px-12">
        <h2 className="inline-block border-l-4 border-blue-600 pl-3 text-2xl md:text-4xl font-semibold text-gray-800 mb-6">
          Nos Réalisations
        </h2>

        <div className="mt-4 md:mt-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projets.slice(0, 3).map((projet) => (
            <div
              key={projet.id}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="overflow-hidden">
                <img
                  src={projet.image}
                  alt={projet.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-blue-600 font-medium uppercase tracking-wide">
                  {projet.type}
                </p>
                <h3 className="text-lg font-semibold text-gray-800 mt-1 group-hover:text-blue-600 transition-colors">
                  {projet.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* --- Bouton Voir plus --- */}
        <div className="mt-8 text-center">
          <Link
            to="/Portfolio"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Voir plus
          </Link>
        </div>
      </div>
    </section>
  );
};
