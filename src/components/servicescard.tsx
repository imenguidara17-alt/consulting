import type { IconType } from "react-icons";

type servicecardpropos={
    icon: IconType;
    title: string;
    description:string;
}
export function ServiceCard({ icon:Icon, title, description }:servicecardpropos) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
      <div className="text-4xl mb-4 text-blue-600 flex justify-center">
        <Icon/>
      </div>
      <h3 className="font-semibold text-lg mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
}