type FilterButtonsProps = {
  categories: string[];
  filter: string;
  setFilter: (cat: string) => void;
};

export function FilterButtons({ categories, filter, setFilter }: FilterButtonsProps) {
  return (
    <div className="flex justify-center gap-4 mb-12 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setFilter(cat)}
          className={`px-5 py-2 rounded-full font-medium transition
            ${filter === cat
              ? "bg-indigo-600 text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
        >
          {cat === "e-commerce"
            ? "Site e-commerce"
            : cat === "vitrine"
            ? "Site vitrine"
            : cat === "design"
            ? "Design graphique"
            : cat === "marketing"
            ? "Marketing digital"
            : "Tous"}
        </button>
      ))}
    </div>
  );
}
