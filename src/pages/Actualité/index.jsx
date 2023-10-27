import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import Header from "../../components/Header";
import Banderole from "../../components/Banderole ";

export const Actualité = () => {
    const {id} = useParams()
    let [postState, setPostState] = useState(null)
    let [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:1337/api/actualites/${id}?populate=*`, 
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

    return(
        <div>
            <Header title={isLoading ? postState.data.attributes.title : "Chargement..."} text={isLoading ? "Décrouvrez l'actualité : "+postState.data.attributes.title : "Chargement..."} image={isLoading ? "http://localhost:1337"+postState.data.attributes.image.data.attributes.url : "Chargement"} />
            <Banderole />
            <div class="w-11/12 mb-12 mx-auto lg:w-10/12 flex flex-col justify-start items-start">
                {isLoading ? <p className="mb-10" dangerouslySetInnerHTML={{ __html: postState.data.attributes.description }} /> : "Loading..."}
                <h2 className="lg:text-4xl text-3xl font-bold text-darkblue mb-10">Galerie photo</h2>
                <div className="w-full grid lg:grid-cols-4 grid-cols-1 gap-10">
                    {isLoading ? postState.data.attributes.gallery.data.map(image => 
                        <img src={"http://localhost:1337"+image.attributes.url} className="w-full max-h-[50vh] object-cover border-b-2 border-white" />
                    ) : "Loading..."}
                </div>
            </div>
        </div>
    )
}