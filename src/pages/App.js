import { Outlet, Route, Routes } from "react-router-dom"
import { Fragment } from "react";
import Accueil from "./Accueil"
import Footer from "../components/Footer";


const Layout = () => {
  return(
    <Fragment>
      <Footer />
    </Fragment>
  )
}

const LayoutIndex = () => {
  return(
    <Fragment>
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
      </Route>
    </Routes>
  )
}

const App = () => {
  return (
    <div className="App lg:text-xl text-lg lg:font-medium font-normal relative overflow-x-hidden">
      <Content />
    </div>
  );
}

export default App;
