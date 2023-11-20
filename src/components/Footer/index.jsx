import React, { useState, useEffect } from 'react';
import bg from "../../asset/bg-footer.png"
import logo from "../../asset/logob.png"
import facebook from "../../asset/Svg/facebook.svg"
import linkedin from "../../asset/Svg/linkedin.svg"
import { Link } from 'react-router-dom';
import axios from 'axios';

const Footer = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [experts, setExperts] = useState([])

    useEffect(() => {
        axios.get('https://api.reseauh10.fr/api/expertises')
          .then((response) => {
            setExperts(response.data['hydra:member']);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error(error);
            // Gérez les erreurs ici, si nécessaire
          });
      }, []);

    return(
        <div className="w-full h-full relative py-10 px-8 text-white flex justify-center items-center">
            <img src={bg} alt="Background Footer" className="absolute top-0 left-0 object-cover -z-10 w-full h-full" />
            <div className="flex flex-col justify-center items-center w-11/12 xl:space-y-10 space-y-4">
                <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-x-6">
                    <div className="w-full flex justify-center items-center">
                        <img src={logo} alt="Logo Blanc" className="w-[200px]" />
                    </div>
                    <div className="w-full flex flex-col text-center lg:text-start mt-8 lg:mt-0 xl:space-y-4 space-y-2">
                        <Link to="expertises" className="font-medium">Expertises</Link>
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 text-[#C3D5DC] justify-items-center lg:justify-items-start text-sm gap-2">
                            {isLoading ? 'Pas d\'expertises disponibles pour le moment' : experts.map(expert => (
                                <Link to={`/expertises/${expert.title}`} >{expert.title}</Link>
                            ))}
                        </div>
                    </div>
                    <div className="w-full flex flex-col text-center lg:text-start my-8 lg:my-0 xl:space-y-4 space-y-2">
                        <Link to="presentation" className="font-medium">Qui sommes-nous ?</Link>
                        <Link to="mentions" className="font-medium">Mentions légales</Link>
                        <Link to="politiques" className="font-medium">Politiques de confidentialité</Link>
                    </div>
                    <div className="w-full flex flex-col text-center lg:text-start xl:space-y-4 space-y-2">
                        <p className="font-medium">Réseaux sociaux</p>
                        <div className="flex mx-auto lg:mx-0">
                            <a href="https://www.facebook.com/reseau.h10" target="_blank">
                                <img src={facebook} alt="icon pour aller sur la page facebook du réseau h10"/>
                            </a>
                            <a href="https://www.linkedin.com/company/reseauh10/" target="_blank" className="ml-2">
                                <img src={linkedin} alt="icon pour aller sur le orofil linkedin du réseau h10"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex text-center justify-center items-center text-[#C3D5DC] text-sm w-5/6">
                    <p>H10 réseau – Réseau d’expertise comptable dans l’Aisne, les Ardennes et la Marne – Siège social situé au 6 Boulevard des écossais, 08200 Sedan</p>
                </div>
                <div className="flex text-center justify-center items-center text-sm w-5/6">
                    <p>Tout droits réservés © 2023 Copyright: COMSEA</p>
                </div>
            </div>
        </div>
    )
}

export default Footer