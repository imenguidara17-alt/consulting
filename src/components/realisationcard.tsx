import { Link } from "react-router-dom";
type RealisationProps={
    image:string
    title:string
}

export function RealisationCard({ image, title }: RealisationProps) {
  return (
    <div className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer">
      {/* Image*/}
      <img
        src={image}
        alt={title}
        className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* titre et bouton */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center">
        <h3 className="text-white text-xl font-bold mb-4">{title}</h3>
        <Link
          to="/portfolio"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Voir plus
        </Link>
      </div>
    </div>
  );
}

