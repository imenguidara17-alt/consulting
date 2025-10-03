import { RealisationCard } from "../components/realisationcard";
import realisation1 from "../Assets/images/realisation1.png";
import realisation2 from "../Assets/images/realisation2.png";
import realisation3 from "../Assets/images/realisation3.png";
import realisation4 from "../Assets/images/realisation4.png";

const realisations = [
  { id: 1, image: realisation1, title: "Site Entreprise" },
  { id: 2, image: realisation2, title: "E-Boutique Mode" },
  { id: 3, image: realisation3, title: "Shopify Para" },
  { id: 4, image: realisation4, title: "Cabinet Docteur" },
];

export const RealisationsSection = () => (
  <section className="py-16 bg-white">
    <div className="px-6 md:px-12">
      <h2 className="inline-block border-l-4 border-blue-600 pl-3 text-2xl md:text-4xl font-semibold text-gray-800 mb-6">
        Nos Réalisations
      </h2>
      <div className="mt-4 md:mt-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {realisations.map((real) => (
          <RealisationCard key={real.id} image={real.image} title={real.title} />
        ))}
      </div>
    </div>
  </section>
);
