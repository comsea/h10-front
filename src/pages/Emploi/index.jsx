import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import Header from "../../components/Header";
import Banderole from "../../components/Banderole ";
import { Link } from "react-router-dom"

export const Emploi = () => {
    const {id} = useParams()
    let [postState, setPostState] = useState([])
    const [cabinets, setCabinets] = useState([])
    let [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetch(`https://api.reseauh10.fr/api/emplois/${id}`)
        .then((response) => {
            response = response.json()
            response.then((result) => {
                setPostState(result)
                setIsLoading(false)
            })})
    }, [])

    useEffect(() => {
        fetch(`https://api.reseauh10.fr/api/cabinets`)
        .then((response) => {
            response = response.json()
            response.then((result) => {
                setCabinets(result['hydra:member'])
                setIsLoading(false)
            })})
    }, [])

    console.log(cabinets)


    return(
        <div>
            <Header title={isLoading ? "Chargement..." : postState.title } text={isLoading ? "Chargement..." : "Décrouvrez l'offre d'emploi de "+postState.title} image={isLoading ? "Chargement" : "https://api.reseauh10.fr/build/images/"+postState.image} />
            <Banderole />
            <div class="w-11/12 mb-12 mx-auto lg:w-10/12 flex flex-col justify-start items-start">
                {isLoading ? "Chargment en cours" : cabinets.map(cabinet => (
                    postState.cabinet === "/api/cabinets/"+cabinet.id ?
                        <>
                            <p class="text-darkblue font-semibold 2xl:text-3xl text-2xl">Cabinet {cabinet.name}</p>
                        </>
                    : ""
                ))}
                <p className="mb-10 text-justify" dangerouslySetInnerHTML={{ __html: postState.description }} />
                <div class="text-center mx-auto">
                    <Link to="../postuler#form" class="bg-darkblue text-white px-6 py-3 rounded-xl duration-300 hover:bg-blue hover:text-darkblue">Postuler</Link>
                </div>
            </div>
        </div>
    )
}
