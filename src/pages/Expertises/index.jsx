import React, { useState, useEffect } from 'react';
import Header from "../../components/Header"
import expert from "../../asset/Header/expertises.png"
import Expertise from "../../components/Expertise"
import Banderole from "../../components/Banderole "
import { Tab, TabPanel, Tabs, TabsList } from "@mui/base"
import fleche from "../../asset/Svg/fleche.svg"
import { useParams } from 'react-router-dom';

const Expertises = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [activeElement, setActiveElement] = useState(1)
    const [experts, setExperts] = useState([])

    useEffect(() => {
        fetch('https://127.0.0.1:8001/api/expertises')
        .then((response) => {
            response = response.json()
            response.then((result) => {
                setExperts(result['hydra:member'])
                setIsLoading(false)
            })})
    }, [])

    console.log(experts)

    const handleElementClick = (elementId) => {
        if (elementId === activeElement) {
            setActiveElement(null)
        } else {
            setActiveElement(elementId)
        }
    }

    
    return (
        <div>
            <Header title="Un large panel d'expertises" text="Le réseau H10 vous accompagne ! Découvrez dès maintenant toutes nos missions." image={expert} />
            <Banderole />
            <div class="w-11/12 lg:w-10/12 text-center mx-auto">
                <Tabs defaultValue={activeElement}>
                    <TabsList>
                        {isLoading ? 'Pas d\'expertises disponnibles pour le moment' : experts.map(expert =>
                            <Tab value={expert.id} key={expert.id}>
                                <a href={`#${expert.title}`}>
                                <div 
                                    className={`${
                                        expert.title === activeElement
                                        ? "souligne text-darkblue font-semibold capitalize duration-200 mx-3 hover:text-black hover:underline"
                                        : "text-darkblue font-semibold capitalize duration-200 mx-3 hover:text-black hover:underline"
                                    }`}
                                    onClick={() => handleElementClick(expert.title)}
                                >
                                    {expert.title}
                                </div>
                                </a>
                            </Tab>
                        )}
                    </TabsList>
                    {isLoading ? 'Pas d\'expertises disponnibles pour le moment' : experts.map(expert =>
                        <TabPanel value={expert.id} className="bg-gray rounded-2xl text-start" id={expert.title}>
                            <div class="w-11/12 mx-auto py-10 2xl:py-20 lg:py-12 my-20">
                                <h3 className='text-3xl 2xl:text-4xl text-darkblue font-semibold uppercase'>{expert.title}</h3>
                                <p className="mt-4 font-normal" dangerouslySetInnerHTML={{ __html: expert.description }} />
                            </div>
                        </TabPanel>
                    )}
                </Tabs>
            </div>
        </div>
    )
}

export default Expertises