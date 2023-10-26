import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import Header from "../../components/Header";
import Banderole from "../../components/Banderole ";
import { Link } from "react-router-dom"

export const Emploi = () => {
    const {id} = useParams()
    let [postState, setPostState] = useState(null)
    const [cabinets, setCabinets] = useState(null)
    let [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:1337/api/emplois/${id}?populate=*`, 
        {
            method: "GET",
            headers: {
                'Accept': 'Application/json'
            }
        })
        
        .then(res => res.json())
        .then(res => {
            setPostState(res)
            setIsLoading(true)
            console.log(res)
        })
    })

    useEffect(() => {
        fetch("http://localhost:1337/api/cabinets?populate=*",
        {
            method: "GET",
            headers: {
                'Accept': 'Application/json'
            }
        })
        .then(res => res.json())
        .then(res => {
            setCabinets(res.data)
            setIsLoading(false)
            console.log(res.data)
        })
    }, [])


    return(
        <div>
            <Header title={isLoading ? postState.data.attributes.title : "Chargement..."} text={isLoading ? "Décrouvrez l'offre d'emploi de "+postState.data.attributes.cabinet.data.attributes.name : "Chargement..."} image={isLoading ? "http://localhost:1337"+postState.data.attributes.image.data.attributes.url : "Chargement"} />
            <Banderole />
            <div class="w-11/12 mb-12 mx-auto lg:w-10/12 flex flex-col justify-start items-start">
                {isLoading ? <p className="mb-10" dangerouslySetInnerHTML={{ __html: postState.data.attributes.description }} /> : "Loading..."}
                <div class="text-center mx-auto">
                    <Link to="../postuler#form" class="bg-darkblue text-white px-6 py-3 rounded-xl duration-300 hover:bg-blue hover:text-darkblue">Postuler</Link>
                </div>
            </div>
        </div>
    )
}
