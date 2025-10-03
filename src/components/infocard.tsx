import React from "react";

type InfoCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export function InfoCard({ icon, title, description }: InfoCardProps) {
  return (
    <div className="bg-blue-900 rounded-2xl shadow-lg p-8 flex flex-col gap-4 hover:scale-105 transition-transform duration-500">
      <div className="flex items-center gap-3">
        <span className="text-white text-3xl">{icon}</span>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-blue-100 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
