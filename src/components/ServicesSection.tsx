import { ServiceCard } from "../components/servicescard";
import { FaGlobe, FaShoppingCart, FaPaintBrush, FaBullhorn } from "react-icons/fa";

const services = [
  { title: "Site Vitrine", icon: FaGlobe, description: "Création de sites vitrines modernes et responsives." },
  { title: "Site E-commerce", icon: FaShoppingCart, description: "Développement de boutiques en ligne performantes." },
  { title: "Design Graphique", icon: FaPaintBrush, description: "Identité visuelle et créations graphiques uniques." },
  { title: "Marketing Digital", icon: FaBullhorn, description: "Stratégies digitales pour booster votre visibilité." },
];

export const ServicesSection = () => (
  <section className="bg-white py-12 px-6 md:px-12">
    <h2 className="inline-block border-l-4 border-blue-600 pl-3 text-2xl md:text-4xl font-semibold text-gray-900 mb-6">
      Nos Services
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:max-w-4xl mx-auto">
      {services.map((service, index) => (
        <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
      ))}
    </div>
  </section>
);
