 type BlogCardProps = {
  image: string;
  category: string;
  title: string;
  description: string;
};

export function BlogCard({ image, category, title, description }: BlogCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Contenu */}
      <div className="p-5 flex flex-col gap-3">
        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
          {category}
        </span>
        <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
