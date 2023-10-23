import { Link } from "react-router-dom"
import logo from "../../asset/logob2.png"
import avion from "../../asset/avion.png"

const Navbar = () => {
    return(
        <div className="w-full py-10 flex justify-center items-center text-white absolute top-0 right-0 z-50">
            <div className="w-[95%] flex justify-between items-center">
                <div className="w-[200px] flex justify-start">
                    <Link to="/">
                        <img src={logo} alt="Logo blanc 2" className="w-[120px]" />
                    </Link>
                </div>
                <div className="flex justify-center items-center xl:space-x-8 space-x-4 text-center">
                    <Link to="/">Accueil</Link>
                    <Link to="presentation">Présentation</Link>
                    <Link to="partenaires">Cabinets partenaires</Link>
                    <Link to="valeurs">Valeur ajoutée</Link>
                    <Link to="expertises">Expertises</Link>
                    <Link to="actualites">Actualités</Link>
                    <Link to="engagement">Engagement RSE</Link>
                    <Link to="postuler">Postuler</Link>
                </div>
                <div className="w-[200px] flex justify-end items-end">
                    <Link to="contact" className="flex items-center space-x-2">
                        <img src={avion} alt="Avion en papier" className="w-[20px] h-[20px]" />
                        <p>Contact</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar