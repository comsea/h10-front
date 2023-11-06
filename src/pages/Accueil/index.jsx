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

const Accueil = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [actualites, setActualites] = useState([])
    const [expanded, setExpanded] = useState(false)
    const [experts, setExperts] = useState([])

    console.log(experts)

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    return(
        <div class="w-11/12 lg:w-10/12 mx-auto">
            {/* NOS ACTUALITÉS */}
                <div class="flex flex-col lg:flex-row text-center lg:text-start justify-between">
                    <div>
                        <p class="text-darkblue font-normal text-2xl xl:text-4xl mb-2 lg:mb-4">Nos dernières actualités</p>
                        <h1 class="text-3xl xl:text-5xl font-semibold">Que se passe-t-il dans le Réseau H10 <span class="text-darkblue">?</span></h1>
                    </div>
                </div>
                {/* SLIDER ACTU */}
                <div class="grid grid-cols-1 lg:grid-cols-3 grid-rows-1 text-darkblue font-normal text-lg xl:gap-16 gap-4 mt-6">
                    {/* faire boucle actu */}
                    {/*
                        {isLoading ? 'Pas d\'actualités disponibles pour le moment' : actualites.slice(-3).map(actualite => (
                            <div class="bg-white shadow-2xl rounded-3xl" key={actualite.id}>
                                <img src={"http://localhost:1337" + actualite.attributes.image.data.attributes.url} alt="test actu" class="w-full rounded-t-3xl h-[250px] object-cover" />
                                <div class="ml-6 my-4 pr-2">
                                    <p>{(new Date(actualite.createdAt)).toLocaleDateString()}</p>
                                    <p class="font-semibold text-black text-2xl">{actualite.title}</p>
                                    <p className="line-clamp-3 text-[#7C929B]" dangerouslySetInnerHTML={{ __html: actualite.description }} />
                                    <Link to={`/actualite/${actualite.id}`}>Voir l'article →</Link>
                                </div>
                            </div>
                        ))}
                    */}
                </div>
                <div className='w-full flex justify-center items-center my-10'>
                    <div className='bg-darkblue text-white py-2 px-8 text-2xl rounded-3xl'>
                        <Link to={'actualites'}>Voir plus d'actualités →</Link>
                    </div>
                </div>
            {/* NOS EXPERTISES */}
            <div class="flex justify-center my-16">
                <div class="lg:flex hidden w-1/2">
                    <img src={img} alt="Comptable entrain de travailler" class="w-full p-4 "/>
                </div>
                <div class="text-center lg:text-start px-4 lg:w-1/2">
                    <p class="text-darkblue font-extraligth text-2xl xl:text-4xl mb-2 lg:mb-4">Nos expertises</p>
                    <h3 class="text-3xl xl:text-5xl mb-10 font-semibold">Découvrez nos différentes expertises.</h3>
                        {/* EXPERTISES */}
                    <div className='w-full flex flex-col rounded-2xl py-4 space-y-2'>
                        {/*
                        {isLoading ? 'Pas d\'expertises disponibles pour le moment' : experts?.map(expert => (
                            <Accordion expanded={expanded === 'panel'+expert.id} onChange={handleChange('panel'+expert.id)} className='rounded-xl' key={expert.id}>
                                <AccordionSummary
                                    expandIcon={<ExpandCircleDownIcon className='text-darkblue' />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    className=''
                                    >
                                    <p className='text-darkblue font-bold xl:text-3xl p-1 xl:p-3 text-xl'>{expert.title}</p>
                                </AccordionSummary>
                                <AccordionDetails className='flex font-normal flex-col space-y-3'>
                                    <p className="line-clamp-3 text-[#7C929B]" dangerouslySetInnerHTML={{ __html: expert.description }} />
                                    <Link to='expertises' className='text-darkblue'>En savoir plus →</Link>
                                </AccordionDetails>
                            </Accordion>
                        )) }
                        */}
                    </div>
                </div>
            </div>
            <div>
            {/* {apiData && apiData.map(item => (
                <div key={item.id}>
                <h2>{item.attributes.title}</h2>
                <p>{item.attributes.description}</p>
                </div>
            ))} */}
            </div>
        </div>
    )   
}

export default Accueil