
import { ConsultingLayout } from "./Layouts/consulting";
import {Routes, Route } from "react-router";
import { AcceuilPage } from "./pages/acceuil";
import { AproposPage } from "./pages/apropos";
import { PortfolioPage } from "./pages/portfolio";
import { Blogpage } from "./pages/blog";
import { ContactPage } from "./pages/contact";
export function App() {

  return (
    <Routes>
      <Route element={<ConsultingLayout/>}>
        <Route path="/" element={<AcceuilPage/>}/>
        <Route path="/Apropos" element={<AproposPage/>}/>
        <Route path="/Portfolio" element={<PortfolioPage/>}/>
        <Route path="/Blog" element={<Blogpage/>}/>
        <Route path="/Contact" element={<ContactPage/>}/>
      </Route>
    </Routes>    
  )
}
export default App
