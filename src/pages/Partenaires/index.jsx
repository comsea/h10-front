import React, { useState, useEffect } from 'react';
import Header from "../../components/Header"
import partenaires from "../../asset/Header/partenaires.png"
import ficom from "../../asset/Cabinets/couleur/ficom.svg"
import actualys from "../../asset/Cabinets/couleur/actualys.svg"
import fizalys from "../../asset/Cabinets/couleur/fizalys.svg"
import cwa from "../../asset/Cabinets/couleur/cwa.svg"
import hmc from "../../asset/Cabinets/couleur/hmc.svg"
import Cabinet from "../../components/Cabinet"
import Banderole from "../../components/Banderole "
import { Tab, TabPanel, Tabs, TabsList } from '@mui/base';
import phone from "../../asset/Svg/phone.svg"
import web from "../../asset/Svg/website.svg"
import map from "../../asset/Svg/maps.svg"
import { HashLink as Link } from "react-router-hash-link"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const Partenaires = () => {
    const {id} = useParams()
    const [staticId, setStaticId] = useState(id);

    useEffect(() => {
        setStaticId(id); // This ensures that staticId remains the same as id
      }, [id]);
    const [isLoading, setIsLoading] = useState(true)
    const [isLoading2, setIsLoading2] = useState(true)
    const [cabinets, setCabinets] = useState([])
    const [adresses, setAdresses] = useState([])
    const [activeElement, setActiveElement] = useState(id)

    useEffect(() => {
        fetch(`https://api.reseauh10.fr/api/cabinets`)
        .then((response) => {
            response = response.json()
            response.then((result) => {
                setCabinets(result['hydra:member'])
                setIsLoading(false)
            })})
    }, [])

    useEffect(() => {
        fetch(`https://api.reseauh10.fr/api/adresses`)
        .then((response) => {
            response = response.json()
            response.then((result) => {
                setAdresses(result['hydra:member'])
                setIsLoading(false)
            })})
    }, [])

    const handleElementClick = (elementId) => {
        if (elementId === activeElement) {
            setActiveElement(null)
        } else {
            setActiveElement(elementId)
        }
    }

    console.log(adresses, cabinets)

    return(
        <div>
            <Helmet>
                <title>Les cabinets partenaires ! | Réseau H10</title>
            </Helmet>
            <Header title="Un réseau en partenariat" text="H10 regroupe 5 cabinets d'expertise-comptable et plus de 100 collaborateurs." image={partenaires}/>
            <Banderole />
            <div class="w-11/12 lg:w-10/12 text-center mx-auto">
                <Tabs defaultValue={activeElement}>
                    <TabsList className="bg-gray px-4 py-2 rounded-3xl flex flex-row flex-wrap justify-center items-center">
                        {isLoading ? 'Chargement en cours' : cabinets.map(cabinet => (
                            <Tab value={cabinet.name} className='2xl:w-[25%] w-[23%] m-5 h-full' key={cabinet.name}>
                                <a href={`#${cabinet.name}`}>
                                <div
                                    className={`${
                                        cabinet.name === activeElement
                                        ? "active hover:bg-blue w-full duration-200 flex items-center justify-center rounded-t-full 2xl:min-h-[350px] lg:min-h-[200px] min-h-[100px] md:min-h-[200px]"
                                        : "hover:bg-blue w-full duration-200 flex items-center justify-center rounded-t-full 2xl:min-h-[350px] lg:min-h-[200px] min-h-[100px] md:min-h-[200px]"
                                    }`}
                                    onClick={() => handleElementClick(cabinet.name)}
                                >
                                    <img src={"https://api.reseauh10.fr/build/images/"+cabinet.logo} />
                                </div>
                                </a>
                            </Tab>
                        ))}
                    </TabsList>
                    {isLoading ? 'Pas de cabinets disponnibles pour le moment' : cabinets.map(cabinet =>
                    
                    
                    <TabPanel value={cabinet.name} className="bg-gray rounded-2xl text-start" id={cabinet.name}>
                        <div class="w-11/12 mx-auto py-10 2xl:py-20 lg:py-12 my-20">
                            <h3 class="text-darkblue font-semibold text-4xl 2xl:text-5xl mb-4 2xl:mb-8">{cabinet.name}</h3>
                            <p class="2xl:text-xl text-lg font-normal 2xl:mb-12 mb-8 text-justify" dangerouslySetInnerHTML={{ __html: cabinet.description }} />
                            {isLoading ? "Chargement en cours" : adresses.map(adresse => (
                                adresse.cabinet === "/api/cabinets/"+cabinet.id ?
                                 <>
                                    <h4 class="text-darkblue fontx-semibold text-3xl 2xl:text-4xl mb-4 lg:mb-8">{adresse.name}</h4>
                                    <div class="underline underline-offset-8 2xl:text-2xl text-lg font-normal text-darkblue mb-12">
                                        <div class="flex items-center">
                                            <img src={map} alt="icone pour indiquer le lieu" class="mr-4 w-6" />
                                            <Link to={adresse.googlemaps} target="_blank">{adresse.address}</Link>
                                        </div>
                                        <div class="flex items-center my-6">
                                            <img src={phone} alt="icone pour indiquer le numéro de téléphone" class="mr-4 w-6" />
                                            <Link to={'tel:'+adresse.phone} target="_blank">{adresse.phone}</Link>
                                        </div>
                                        <div class="flex items-center">
                                            <img src={web} alt="icone pour indiquer le lien du site web" class="mr-4 w-6" />
                                            <Link to={"https://"+adresse.website} target="_blank">{adresse.website}</Link>
                                        </div>
                                    </div>
                                </>
                                  : ""
                            ))}
                        </div>
                    </TabPanel>
                    )}
                </Tabs>

                {/* REDIRECTION PAGE CONTACT */}
                <p class="text-lg text-darkblue mb-20">Envie de rejoindre notre réseau de partenaires ? <Link to="/contact" class="underline" href="/contact">Contactez-nous dès maintenant</Link></p>

            </div>
            
        </div>
    );
    
}

export default Partenaires