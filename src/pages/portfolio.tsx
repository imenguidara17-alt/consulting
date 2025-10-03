import { useState } from "react";
import backgroundImage from"../Assets/images/portfolio.jpg";
import { FilterButtons } from "../components/FilterButtons";
import { ProjectCard } from "../components/ProjectCard";
import projet1 from "../Assets/images/realisation3.png"
import projet2 from "../Assets/images/realisation1.png"
import projet3 from "../Assets/images/projet3.jpg"
import projet4 from "../Assets/images/projet4.jpg"
import projet5 from "../Assets/images/realisation2.png"

const projets = [
  { id: 1, type: "e-commerce", title: "Shopify Para", image: projet1 },
  { id: 2, type: "vitrine", title: "Site Entreprise", image: projet2 },
  { id: 3, type: "design", title: "Logo Branding", image:projet3},
  { id: 4, type: "marketing", title: "Campagne Instagram", image:projet4 },
  { id: 5, type: "e-commerce", title: "E-boutique Mode", image: projet5},
];

const categories = ["tous", "e-commerce", "vitrine", "design", "marketing"];

export function PortfolioPage() {
   const [filter, setFilter] = useState("tous");

  const filteredProjects =
    filter === "tous" ? projets : projets.filter((p) => p.type === filter);
  return (
    <div className="bg-white min-h-screen">
      
      {/* Section immersive */}
       <section className="relative w-full h-[500px] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
        {/* Image en background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>
        {/* Dégradé superposé */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-gray-800/50 to-transparent"></div>
        {/* Contenu texte */}
        <div className="relative z-10 h-full flex items-center px-8 md:px-20">
            <div className="max-w-xl text-left text-white">
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
                Découvrez nos projets <br /> créatifs et innovants
                </h2>
                <p className="mt-4 text-lg text-gray-200 drop-shadow-md">
                <span className="text-yellow-400 font-semibold">Marketing Consult</span>{" "}
                a réalisé une variété de projets allant du design graphique aux sites e-commerce et vitrines, illustrant notre expertise et notre passion pour l’innovation.
                </p>
            </div>
        </div>
      </section>
      <div className="px-8 py-12">
        <FilterButtons categories={categories} filter={filter} setFilter={setFilter} />

        {/* Grille projets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProjects.map((p) => (
            <ProjectCard key={p.id} title={p.title} type={p.type} image={p.image} />
          ))}
        </div>
      </div> 
    </div>
  );
}
