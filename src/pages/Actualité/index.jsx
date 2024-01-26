import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import Header from "../../components/Header";
import Banderole from "../../components/Banderole ";
import axios from 'axios';
import { Helmet } from "react-helmet";

export const Actualité = () => {
    const {id} = useParams()
    let [postState, setPostState] = useState([])
    let [galeries, setGaleries] = useState([])
    let [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        fetch(`https://api.reseauh10.fr/api/actualites/${id}`)
        .then((response) => {
            response = response.json()
            response.then((result) => {
                setPostState(result)
                setIsLoading(false)
            })})
    }, [])

    useEffect(() => {
        fetch(`https://api.reseauh10.fr/api/images`)
        .then((response) => {
            response = response.json()
            response.then((result) => {
                setGaleries(result['hydra:member'])
                setIsLoading(false)
            })})
    }, [])

    return(
        <div>
            <Helmet>
                <meta property="og:title" content={postState.title} />
                <meta property="og:description" content={'Venez découvrir le nouvel article du Réseau H10' }  />
                <meta property="og:image" content={"https://api.reseauh10.fr/build/images/"+postState.image} />
                <meta property="og:url" content={'https://www.reseauh10.fr/actualite/'+postState.id || 'https://www.reseauh10.fr/actualites'} />
                <meta property="og:type" content="article" />
                <link rel="canonical" href={"https://www.reseauh10.fr/actualite/"+postState.id} />
            </Helmet>
            <Header title={postState.title} text={"Découvrez l'article ci-dessous : "+postState.title} image={"https://api.reseauh10.fr/build/images/"+postState.image} />
            <Banderole />
            <div className="w-11/12 mb-12 mx-auto lg:w-10/12 flex flex-col justify-start items-start">
                <p className="mb-10 text-justify" dangerouslySetInnerHTML={{ __html: postState.description }} />
                <h2 className="lg:text-4xl text-3xl font-bold text-darkblue mb-10">Galerie photo</h2>
                <div className="w-full grid lg:grid-cols-4 grid-cols-1 gap-10">
                    {isLoading ? "Chargement en cours" : galeries.map(galerie => (
                        <img src={postState.gallery === "/api/images/"+galerie.id ? "Image en cours de chargement" : "https://api.reseauh10.fr/build/images/"+galerie.path } alt="" />
                    ))}
                </div>
            </div>
        </div>
    )
}