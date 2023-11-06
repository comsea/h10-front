import { Outlet, Route, Routes } from "react-router-dom"
import { Fragment } from "react";
import Accueil from "./Accueil";
import Partenaires from "./Partenaires";
import Contact from "./Contact";
import Presentation from "./Presentation";
import Engagement from "./Engagement";
import Postuler from "./Postuler";
import Actualités from "./Actualités";
import Footer from "../components/Footer";
import HeaderAccueil from "../components/HeaderAccueil";
import Navbar from "../components/Navbar";
import Banderole from "../components/Banderole ";
import Valeurs from "./Valeurs";
import Expertises from "./Expertises";
import Politiques from "./Politiques";
import { Emploi } from "./Emploi";
import Mentions from "./Mentions";
import { Actualité } from "./Actualité";
import { Admin } from "./AdminPages/Admin";
import { AdminNav } from "../components/AdminNav";
import { AdminExpertises } from "./AdminPages/AdminExpertises";
import { SeeAdminExpertises } from "./AdminPages/AdminExpertises/SeeAdminExpertises";
import { EditAdminExpertises } from "./AdminPages/AdminExpertises/EditAdminExpertises";
import { AdminActualités } from "./AdminPages/AdminActualités";
import { SeeAdminActualités } from "./AdminPages/AdminActualités/SeeAdminActualités";
import { AdminEmployés } from "./AdminPages/AdminEmployés";
import { SeeAdminEmployés } from "./AdminPages/AdminEmployés/SeeAdminEmployés";
import { AdminCabinets } from "./AdminPages/AdminCabinets";
import { SeeAdminCabinets } from "./AdminPages/AdminCabinets/SeeAdminCabinets";
import { AdminAdresses } from "./AdminPages/AdminAdresses";
import { SeeAdminAdresses } from "./AdminPages/AdminAdresses/SeeAdminAdresses";
import { AdminEmplois } from "./AdminPages/AdminEmplois";
import { SeeAdminEmplois } from "./AdminPages/AdminEmplois/SeeAdminEmplois";
import { Testing } from "./AdminPages/Testing";

const Layout = () => {
  return(
    <Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </Fragment>
  )
}

const LayoutIndex = () => {
  return(
    <Fragment>
      <Navbar />
      <HeaderAccueil />
      <Banderole />
      <Accueil />
      <Footer />
    </Fragment>
  )
}

const Content = () => {
  return(
    <Routes>
      <Route index element={<LayoutIndex />} />
      <Route path="/" element={<Layout />}>
        <Route path="presentation" element={<Presentation />}/>
        <Route path='partenaires' element={<Partenaires/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='engagement' element={<Engagement/>}/>
        <Route path='postuler' element={<Postuler/>}/>
        <Route path='actualites' element={<Actualités/>}/>
        <Route path='actualite/:id' element={<Actualité />}/>
        <Route path='valeurs' element={<Valeurs/>}/>
        <Route path='expertises' element={<Expertises/>}/>
        <Route path='politiques'element={<Politiques/>}/>
        <Route path='emploi/:id' element={<Emploi/>}/>
        <Route path='mentions' element={<Mentions/>}/>
      </Route>
    </Routes>
  )
}

const App = () => {
  return (
    <div className="App 2xl:text-2xl text-xl lg:font-medium font-normal relative overflow-x-hidden h-full">
      <Content />
    </div>
  );
}

export default App;
