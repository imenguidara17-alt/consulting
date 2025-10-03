import valeur1 from "../assets/images/valeur1.jpg";
import valeur2 from "../assets/images/valeur 2.jpg";
import valeur3 from "../assets/images/valeur3.jpg";
import { ValueCard } from "./valuecard";

const values = [
  { title: "Transparence", description: "Nous croyons en une communication claire et honnête avec nos clients, afin de bâtir des relations solides et durables.", image: valeur1 },
  { title: "Engagement", description: "Chaque projet est mené avec passion et détermination, pour garantir des résultats alignés aux objectifs fixés.", image: valeur2 },
  { title: "Efficacité", description: "Nous privilégions des solutions simples et performantes, pour maximiser l’impact tout en optimisant les ressources.", image: valeur3 },
];

export const ValuesSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      {/*images */}
      <div className="flex flex-col gap-6">
        {values.map((val, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-lg">
            <img src={val.image} alt={val.title} className="w-full h-48 object-cover" />
          </div>
        ))}
      </div>

      {/* valeurs */}
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold text-gray-900">Nos valeurs</h2>
        <div className="flex flex-col gap-6">
          {values.map((val, index) => (
            <ValueCard key={index} title={val.title} description={val.description} />
          ))}
        </div>
      </div>
    </div>
  </section>
);
