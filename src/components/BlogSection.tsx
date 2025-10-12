
import { useBlog } from "../context/BlogContext";

export const BlogSection = () => {
  const { articles } = useBlog();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="inline-block border-l-4 border-blue-600 pl-3 text-2xl md:text-4xl font-semibold text-gray-800 mb-6">
        Nos Articles 
      </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {articles.slice(0, 3).map((article, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-md overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
            >
              <div className="overflow-hidden h-56">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-semibold text-blue-600 uppercase mb-2 inline-block">
                  {article.category}
                </span>
                <h3 className="text-2xl font-semibold mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <a
                  href="#"
                  className="inline-block text-blue-600 font-medium hover:underline"
                >
                  Lire plus →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
