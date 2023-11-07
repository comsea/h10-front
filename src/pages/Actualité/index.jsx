import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import Header from "../../components/Header";
import Banderole from "../../components/Banderole ";
import axios from 'axios';

export const Actualité = () => {
    const {id} = useParams()
    let [postState, setPostState] = useState([])
    let [galeries, setGaleries] = useState([])
    let [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        fetch(`https://127.0.0.1:8000/api/actualites/${id}`)
        .then((response) => {
            response = response.json()
            response.then((result) => {
                setPostState(result)
                setIsLoading(false)
            })})
    }, [])

    useEffect(() => {
        fetch(`https://127.0.0.1:8000/api/images`)
        .then((response) => {
            response = response.json()
            response.then((result) => {
                setGaleries(result['hydra:member'])
                setIsLoading(false)
            })})
    }, [])

      console.log(postState)


    return(
        <div>
            <Header title={postState.title} text={"Découvrez l'article ci-dessous : "+postState.title} image={"https://127.0.0.1:8000/build/images/"+postState.image} />
            <Banderole />
            <div className="w-11/12 mb-12 mx-auto lg:w-10/12 flex flex-col justify-start items-start">
                <p className="mb-10" dangerouslySetInnerHTML={{ __html: postState.description }} />
                <h2 className="lg:text-4xl text-3xl font-bold text-darkblue mb-10">Galerie photo</h2>
                <div className="w-full grid lg:grid-cols-4 grid-cols-1 gap-10">
                    {isLoading ? "Chargement en cours" : galeries.map(galerie => (
                        <img src={postState.gallery === "/api/images/"+galerie.id ? "Image en cours de chargement" : "https://127.0.0.1:8000/build/images/"+galerie.path } alt="" />
                    ))}
                </div>
            </div>
        </div>
    )
}