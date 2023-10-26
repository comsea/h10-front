import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import Header from "../../components/Header";
import Banderole from "../../components/Banderole ";
import { Link } from "react-router-dom"

const Emploi = () => {
    const {id} = useParams()
    let [postState, setPostState] = useState(null)
    let [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:1337/api/emploi/${id}?populate=*`, 
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
            <Header title={isLoading ? postState.data.attributes.title : "Chargement..."} text={isLoading ? "Décrouvrez l'offre d'emploi : "+postState.data.attributes.title : "Chargement..."} image={isLoading ? "http://localhost:1337"+postState.data.attributes.image.data.attributes.url : "Chargement"} />
            <Banderole />
            <div class="w-11/12 mb-12 mx-auto lg:w-10/12 flex flex-col justify-start items-start">
                {isLoading ? <p className="mb-10" dangerouslySetInnerHTML={{ __html: postState.data.attributes.description }} /> : "Loading..."}
            </div>
            <Link to="postuler#form">Postuler</Link>
        </div>
    )
}
export default Emploi