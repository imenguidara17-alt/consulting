import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

export function ConsultingLayout() {
  return (
    <Fragment>
      {/* Header fixe */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Contenu avec marge pour éviter qu'il passe sous le header */}
      <main className="pt-24 px-6 md:px-12 min-h-screen bg-white">
        <Outlet />
      </main>

      {/* Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </Fragment>
  );
}
