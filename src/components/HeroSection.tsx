import backgroundImage from "../Assets/images/section1.jpg";

export const HeroSection = () => (
  <section className="relative w-full h-[500px] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-gray-800/50 to-transparent"></div>
    <div className="relative z-10 h-full flex items-center px-8 md:px-20">
      <div className="max-w-xl text-left text-white">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
          Boostez votre visibilité, <br /> transformez vos idées.
        </h2>
        <p className="mt-4 text-lg text-gray-200 drop-shadow-md">
          <span className="text-yellow-400 font-semibold">Marketing Consult</span> vous accompagne avec des stratégies digitales modernes, du design créatif et des solutions adaptées.
        </p>
        <div className="mt-6">
          <a
            href="/Contact"
            className="inline-block px-8 py-3 bg-[#006AEA] text-white font-semibold rounded-full shadow-lg hover:bg-[#003265] hover:scale-105 transform transition"
          >
            Demander un devis
          </a>
        </div>
      </div>
    </div>
  </section>
);
