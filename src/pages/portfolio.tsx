import { useState } from "react";
import backgroundImage from "../Assets/images/portfolio.jpg";
import { FilterButtons } from "../components/FilterButtons";
import { ProjectCard } from "../components/ProjectCard";
import { usePortfolio } from "../context/PortfolioContext"; // ✅ Import du contexte

// Catégories de filtres
const categories = ["tous", "e-commerce", "vitrine", "design", "marketing"];

export function PortfolioPage() {
  const [filter, setFilter] = useState("tous");
  const { projets } = usePortfolio(); // ✅ Récupération des projets depuis le contexte

  // Filtrage dynamique
  const filteredProjects =
    filter === "tous" ? projets : projets.filter((p) => p.type === filter);

  return (
    <div className="bg-white min-h-screen">
      {/* --- En-tête avec image et texte --- */}
      <section className="relative w-full h-[500px] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
        {/* Image de fond */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>

        {/* Dégradé sombre */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-gray-800/50 to-transparent"></div>

        {/* Contenu texte */}
        <div className="relative z-10 h-full flex items-center px-8 md:px-20">
          <div className="max-w-xl text-left text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
              Découvrez nos projets <br /> créatifs et innovants
            </h2>
            <p className="mt-4 text-lg text-gray-200 drop-shadow-md">
              <span className="text-yellow-400 font-semibold">Marketing Consult</span>{" "}
              a réalisé une variété de projets allant du design graphique aux sites
              e-commerce et vitrines, illustrant notre expertise et notre passion
              pour l’innovation.
            </p>
          </div>
        </div>
      </section>

      {/* --- Liste filtrable de projets --- */}
      <div className="px-8 py-12">
        {/* Boutons de filtrage */}
        <FilterButtons categories={categories} filter={filter} setFilter={setFilter} />

        {/* Grille de projets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {filteredProjects.map((p) => (
            <ProjectCard key={p.id} title={p.title} type={p.type} image={p.image} />
          ))}
        </div>
      </div>
    </div>
  );
}
