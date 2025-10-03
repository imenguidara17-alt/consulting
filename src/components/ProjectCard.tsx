type ProjectCardProps = {
  title: string;
  type: string;
  image: string;
};

export function ProjectCard({ title, type, image }: ProjectCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-500 capitalize">{type}</p>
      </div>
    </div>
  );
}
