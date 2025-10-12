import { createContext, useContext, type ReactNode } from "react";

export type Projet = {
  id: number;
  type: string;
  title: string;
  image: string;
};

import projet1 from "../Assets/images/realisation3.png";
import projet2 from "../Assets/images/realisation1.png";
import projet3 from "../Assets/images/projet3.jpg";
import projet4 from "../Assets/images/projet4.jpg";
import projet5 from "../Assets/images/realisation2.png";

// Données centralisées
const projetsData: Projet[] = [
  { id: 1, type: "e-commerce", title: "Shopify Para", image: projet1 },
  { id: 2, type: "vitrine", title: "Site Entreprise", image: projet2 },
  { id: 3, type: "design", title: "Logo Branding", image: projet3 },
  { id: 4, type: "marketing", title: "Campagne Instagram", image: projet4 },
  { id: 5, type: "e-commerce", title: "E-boutique Mode", image: projet5 },
];

// Création du contexte
const PortfolioContext = createContext<{ projets: Projet[] }>({ projets: [] });

// Provider
export function PortfolioProvider({ children }: { children: ReactNode }) {
  return (
    <PortfolioContext.Provider value={{ projets: projetsData }}>
      {children}
    </PortfolioContext.Provider>
  );
}

// Hook pour accéder facilement aux projets
export const usePortfolio = () => useContext(PortfolioContext);
