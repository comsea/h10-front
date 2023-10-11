import { Outlet, Route, Routes } from "react-router-dom"
import { Fragment } from "react";
import Accueil from "./Accueil"
import Footer from "../components/Footer";
import HeaderAccueil from "../components/HeaderAccueil";
import Navbar from "../components/Navbar";
import Presentation from "./Presentation";
import Banderole from "../components/Banderole ";
import Partenaires from "./Partenaires";
import Contact from "./Contact";

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
      </Route>
    </Routes>
  )
}

const App = () => {
  return (
    <div className="App lg:text-lg text-base lg:font-medium font-normal relative overflow-x-hidden">
      <Content />
    </div>
  );
}

export default App;
