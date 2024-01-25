import React, { useState, useEffect } from 'react';
import past from "../../asset/Svg/past.svg";
import before from "../../asset/Svg/before.svg";
import img from "../../asset/homepageh10.png";
import cross from "../../asset/Svg/cross.svg";
import actu from "../../asset/test-actu.png";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import video from "../../asset/Video/video.mp4"
import ReactPlayer from 'react-player'

const Accueil = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [actualites, setActualites] = useState([])
    const [expanded, setExpanded] = useState(false)
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

      useEffect(() => {
        axios.get('https://api.reseauh10.fr/api/actualites')
          .then((response) => {
            const fetchedArticles = response.data['hydra:member'];
            const sortedArticles = fetchedArticles.slice().sort((a, b) => {
            const dateA = new Date(a.createdAt)
            const dateB = new Date(b.createdAt)
            return dateB - dateA
          })
          setActualites(sortedArticles)
            setIsLoading(false);
          })
          .catch((error) => {
            console.error(error);
            // Gérez les erreurs ici, si nécessaire
          });
      }, []);

    console.log(experts)

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    return(
        <div class="w-full mx-auto justify-center items-center flex flex-col">
            <Helmet>
                <title>Réseau H10 | Le réseau des experts-comptables !</title>
            </Helmet>
            {/* NOS ACTUALITÉS */}
                <div class="flex flex-col lg:flex-row text-center lg:text-start justify-between w-11/12 lg:w-10/12">
                    <div>
                        <p class="text-darkblue font-normal text-2xl xl:text-4xl mb-2 lg:mb-4">Nos dernières actualités</p>
                        <h2 class="text-3xl xl:text-5xl font-semibold">Que se passe-t-il dans le Réseau H10 <span class="text-darkblue">?</span></h2>
                    </div>
                </div>
                {/* SLIDER ACTU */}
                <div class="grid grid-cols-1 lg:grid-cols-3 grid-rows-1 text-darkblue font-normal text-lg xl:gap-16 gap-4 mt-6 w-11/12 lg:w-10/12">
                    {/* faire boucle actu */}
                        {isLoading ? 'Chargement en cours' : actualites.slice(0, 3).map(actualite => (
                            <div class="bg-white shadow-2xl rounded-3xl" key={actualite.id}>
                                <img src={"https://api.reseauh10.fr/build/images/" + actualite.image} alt="test actu" class="w-full rounded-t-3xl h-[250px] object-cover" />
                                <div class="ml-6 my-4 pr-2">
                                    <p>{(new Date(actualite.createdAt)).toLocaleDateString()}</p>
                                    <p class="font-semibold text-black text-2xl">{actualite.title}</p>
                                    <p className="line-clamp-3 text-[#7C929B] text-justify coupe" dangerouslySetInnerHTML={{ __html: actualite.description }} />
                                    <Link to={`/actualite/${actualite.id}`}>Voir l'article →</Link>
                                </div>
                            </div>
                        ))}
                 </div>
                <div className='w-11/12 lg:w-10/12 flex justify-center items-center my-10'>
                    <div className='bg-darkblue text-white py-2 px-8 text-2xl rounded-3xl'>
                        <Link to={'actualites'}>Voir plus d'actualités →</Link>
                    </div>
                </div>
            {/* VIDEO */}
            <div className='w-full flex justify-center items-center lg:py-12 py-6 bg-darkblue'>
                <ReactPlayer
                    url={video}
                    controls
                    width="70%"
                    height="100%"
                />
            </div>
            {/* NOS EXPERTISES */}
            <div class="flex justify-center my-16 w-11/12 lg:w-10/12">
                <div class="lg:flex hidden w-1/2 relative h-auto">
                    <div className='w-full'>
                    <img src={img} alt="Comptable entrain de travailler" class="w-full p-4 h-auto"/>
                    </div>
                </div>
                <div class="text-center lg:text-start px-4 lg:w-1/2">
                    <p class="text-darkblue font-extraligth text-2xl xl:text-4xl mb-2 lg:mb-4">Nos expertises</p>
                    <h2 class="text-3xl xl:text-5xl mb-10 font-semibold">Découvrez nos différentes expertises.</h2>
                        {/* EXPERTISES */}
                    <div className='w-full flex flex-col rounded-2xl py-4 space-y-2'>
                        
                        {isLoading ? 'Chargement en cours' : experts?.map(expert => (
                            <Accordion expanded={expanded === 'panel'+expert.id} onChange={handleChange('panel'+expert.id)} className='rounded-xl' key={expert.id}>
                                <AccordionSummary
                                    expandIcon={<ExpandCircleDownIcon className='text-darkblue' />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    className='text-start'
                                    >
                                    <h3 className='text-darkblue text-start font-bold 2xl:text-3xl lg:2xl p-1 xl:p-3 text-xl'>{expert.title}</h3>
                                </AccordionSummary>
                                <AccordionDetails className='flex font-normal flex-col space-y-3'>
                                    <p className="line-clamp-3 text-[#7C929B] text-justify coupe" dangerouslySetInnerHTML={{ __html: expert.description }} />
                                    <Link to={`/expertises/${expert.title}`} className='text-darkblue'>En savoir plus →</Link>
                                </AccordionDetails>
                            </Accordion>
                        )) }
                    
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Accueil