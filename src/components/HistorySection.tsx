import { FaUsers } from "react-icons/fa";
import image1 from "../assets/images/about1.jpg";
import image2 from "../assets/images/about2.jpg";

export const HistorySection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      {/* colonne à gauche*/}
      <div className="grid grid-cols-2 gap-6">
        {/* 1er colonne */}
        <div className="flex flex-col gap-6">
          <div className="h-60 rounded-2xl shadow-md overflow-hidden">
            <img src={image1} alt="Notre agence" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="bg-blue-900 text-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold">+20</span>
            <p className="text-sm uppercase tracking-wide">Ans d'expérience</p>
          </div>
        </div>

        {/* 2ème colonne */}
        <div className="flex flex-col gap-6">
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col items-center justify-center">
            <FaUsers className="text-blue-600 text-3xl mb-2" />
            <span className="text-2xl font-bold text-gray-800">+1000</span>
            <p className="text-gray-600 text-sm">Clients satisfaits</p>
          </div>
          <div className="h-60 rounded-2xl shadow-md overflow-hidden">
            <img src={image2} alt="Travail en équipe" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>

      {/* Colonne à droite */}
      <div className="flex flex-col gap-6">
        <h2 className="text-4xl font-bold text-gray-800">Notre Histoire</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Depuis plus de deux décennies, notre agence accompagne les marques
          dans leur développement et leur différenciation. Animés par une
          vision tournée vers l’innovation et l’impact durable, nous œuvrons
          à créer des stratégies marketing qui rapprochent les entreprises de
          leurs clients et renforcent leur visibilité.
        </p>
      </div>
    </div>
  </section>
);
