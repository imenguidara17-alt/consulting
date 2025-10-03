type HeroSectionProps = {
  background: string;
  title: string;
  description: string;
};

export function HeroSection({ background, title, description }: HeroSectionProps) {
  return (
    <section className="relative w-full h-[500px] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-gray-800/50 to-transparent"></div>
      <div className="relative z-10 h-full flex items-center px-8 md:px-20">
        <div className="max-w-xl text-left text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-200 drop-shadow-md">{description}</p>
        </div>
      </div>
    </section>
  );
}
