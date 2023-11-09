import React, { useState, useEffect } from 'react';
import Header from "../../components/Header"
import expert from "../../asset/Header/expertises.png"
import Expertise from "../../components/Expertise"
import Banderole from "../../components/Banderole "
import { Tab, TabPanel, Tabs, TabsList } from "@mui/base"
import fleche from "../../asset/Svg/fleche.svg"
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Expertises = () => {
    const {id} = useParams()
    const [staticId, setStaticId] = useState(id);

    useEffect(() => {
        setStaticId(id); // This ensures that staticId remains the same as id
      }, [id]);

    const [isLoading, setIsLoading] = useState(true)
    const [activeElement, setActiveElement] = useState(id)
    const [activeElement2, setActiveElement2] = useState(1)
    const [experts, setExperts] = useState([])

    const numéro = id

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

    console.log(experts)

    const handleElementClick = (elementId) => {
        if (elementId === activeElement) {
            setActiveElement(null)
        } else {
            setActiveElement(elementId)
        }
    }

    const handleElementClick2 = (elementId) => {
        if (elementId === activeElement2) {
            setActiveElement2(null)
        } else {
            setActiveElement2(elementId)
        }
    }

    console.log(activeElement)
    console.log(activeElement2)
    console.log(staticId)
    
    return (
        <div>
            <Header title="Un large panel d'expertises" text="Le réseau H10 vous accompagne ! Découvrez dès maintenant toutes nos missions." image={expert} />
            <Banderole />
            <div class="w-11/12 lg:w-10/12 text-center mx-auto">
                <Tabs defaultValue={activeElement}>
                    <TabsList>
                        {isLoading ? 'Chargement en cours' : experts.map(expert =>
                            <Tab value={expert.title} key={expert.title}>
                                <a href={`#${expert.title}`}>
                                <div 
                                    className={`${
                                        expert.title === activeElement
                                        ? "souligne text-darkblue bg-gray py-2 px-6 rounded-2xl font-semibold duration-200 mx-6 my-2 hover:text-white hover:bg-darkblue"
                                        : "text-darkblue bg-gray py-2 px-6 rounded-2xl font-semibold duration-200 mx-6 my-2 hover:text-white hover:bg-darkblue"
                                    }`}
                                    onClick={() => handleElementClick(expert.title)}
                                >
                                    {expert.title}
                                </div>
                                </a>
                            </Tab>
                        )}
                    </TabsList>
                    {isLoading ? '' : experts.map(expert =>
                        <TabPanel value={expert.title} className="bg-gray rounded-2xl text-start" id={expert.title}>
                            <div class="w-11/12 mx-auto py-10 2xl:py-20 lg:py-12 my-20">
                                <h3 className='text-3xl 2xl:text-4xl text-darkblue font-semibold uppercase'>{expert.title}</h3>
                                <div className="mt-4 font-normal text-justify" dangerouslySetInnerHTML={{ __html: expert.description }}></div>
                            </div>
                        </TabPanel>
                    )}
                </Tabs>
            </div>
        </div>
    )
}

export default Expertises