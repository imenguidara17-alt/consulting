import {BlogCard} from "../components/BlogCard";
import { useBlog } from "../context/BlogContext";

export function Blogpage() {
  const { articles } = useBlog(); // on récupère les articles depuis le contexte

  return (
    <section className="min-h-screen bg-white py-16 px-6 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-2">Notre Blog</h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Explorez nos derniers articles sur le marketing, la stratégie et l’innovation digitale.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <BlogCard key={index} {...article} />
        ))}
      </div>
    </section>
  );
}
