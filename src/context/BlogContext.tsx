// src/context/BlogContext.tsx
import  { createContext, useContext, type ReactNode } from "react";
import blog1 from "../Assets/images/blog1.jpeg";
import blog2 from "../Assets/images/blog2.jpg";
import blog3 from "../Assets/images/blog3.jpg";
import blog4 from "../Assets/images/blog4.png";
import blog5 from "../Assets/images/blog5.jpg";
import blog6 from "../Assets/images/blog6.jpg";

// Type de l'article
type Article = {
  image: string;
  category: string;
  title: string;
  description: string;
};

// Données des articles
const articlesData: Article[] = [
  {
    image: blog1,
    category: "E-Commerce",
    title: "Comment booster vos ventes en ligne en 2025",
    description:
      "Découvrez les stratégies innovantes pour optimiser votre boutique en ligne et améliorer votre conversion.",
  },
  {
    image: blog2,
    category: "Marketing Digital",
    title: "Les tendances marketing qui domineront cette année",
    description:
      "Analyse des nouvelles approches centrées sur l’expérience utilisateur et la data-driven stratégie.",
  },
  {
    image: blog3,
    category: "Design UX/UI",
    title: "Créer une expérience utilisateur irrésistible",
    description:
      "Apprenez comment le design centré sur l’humain peut transformer vos produits digitaux.",
  },
  {
    image: blog4 ,
    category: "Réseaux Sociaux",
    title: "Construire une communauté fidèle autour de votre marque",
    description:
      "Découvrez comment humaniser votre communication pour renforcer l’engagement sur les réseaux sociaux.",
  },
  {
    image: blog5,
    category: "Stratégie de Contenu",
    title: "Storytelling : le secret des marques à succès",
    description:
      "Apprenez à raconter votre histoire de manière authentique pour captiver et fidéliser votre audience.",
  },
  {
    image: blog6 ,
    category: "SEO & Référencement",
    title: "Optimiser votre site pour le référencement naturel",
    description:
      "Les meilleures pratiques pour améliorer votre visibilité sur Google et attirer un trafic qualifié.",
  },
];

// Création du contexte
const BlogContext = createContext<{ articles: Article[] }>({ articles: [] });

// Fonction BlogContext qui englobe le provider et le hook
export function Blog({ children }: { children: ReactNode }) {
  return (
    <BlogContext.Provider value={{ articles: articlesData }}>
      {children}
    </BlogContext.Provider>
  );
}

// Hook pour récupérer les articles
export const useBlog = () => useContext(BlogContext);
