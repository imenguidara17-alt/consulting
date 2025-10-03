
import { FaBullseye, FaEye, FaLightbulb } from "react-icons/fa";
import { InfoCard } from "./infocard";

export function MissionVisionPhilosophie() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <InfoCard
          icon={<FaBullseye />}
          title="Mission"
          description="Offrir des solutions marketing créatives et efficaces qui aident
          les entreprises à atteindre leurs objectifs et à renforcer leur
          relation avec leurs clients."
        />

        <InfoCard
          icon={<FaEye />}
          title="Vision"
          description="Devenir une agence de référence dans le domaine du marketing
          stratégique, reconnue pour son innovation et son impact durable."
        />

        <InfoCard
          icon={<FaLightbulb />}
          title="Philosophie"
          description="Placer la créativité, la collaboration et la transparence au
          cœur de chaque projet pour bâtir des relations solides et durables."
        />
      </div>
    </section>
  );
}
