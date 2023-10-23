import React, { useState, useEffect } from 'react';
import Header from "../../components/Header"
import expert from "../../asset/Header/expertises.png"
import Expertise from "../../components/Expertise"
import Banderole from "../../components/Banderole "
import { Tab, TabPanel, Tabs, TabsList } from "@mui/base"

const Expertises = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [expertises, setExpetises] = useState(null)
    const [activeElement, setActiveElement] = useState(null)

    useEffect(() => {
        fetch("http://localhost:1337/api/expertises?populate=*",
        {
            method: "GET",
            headers: {
                'Accept': 'Application/json'
            }
        })
        .then(res => res.json())
        .then(res => {
            setExpetises(res.data)
            setIsLoading(false)
            console.log(res.data)
        })
    }, [])

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
                <Tabs defaultValue={1}>
                    <TabsList>
                        {isLoading ? 'Pas encore d\'actualité' : expertises.map(expertise =>
                            <Tab value={expertise.attributes.id} key={expertise.attributes.id}>
                                <a href={`#${expertise.attributes.title}`}>
                                <div 
                                    className={`${
                                        expertise.attributes.title === activeElement
                                        ? "souligne text-darkblue font-semibold capitalize duration-200 mx-3 hover:text-black hover:underline"
                                        : "text-darkblue font-semibold capitalize duration-200 mx-3 hover:text-black hover:underline"
                                    }`}
                                    onClick={() => handleElementClick(expertise.attributes.title)}
                                >
                                    {expertise.attributes.title}
                                </div>
                                </a>
                            </Tab>
                        )}
                    </TabsList>
                    {isLoading ? 'Pas encore d\'actualité' : expertises.map(expertise =>
                        <TabPanel value={expertise.attributes.id} className="bg-gray rounded-2xl text-start" id={expertise.attributes.title}>
                            <div class="w-11/12 mx-auto py-10 2xl:py-20 lg:py-12 my-20">
                                <h3 className='text-4xl 2xl:text-5xl text-darkblue font-semibold uppercase'>{expertise.attributes.title}</h3>
                                <p className="mt-4" dangerouslySetInnerHTML={{ __html: expertise.attributes.description }} />
                            </div>
                        </TabPanel>
                    )}
                </Tabs>
            </div>
        </div>
    )
}

export default Expertises