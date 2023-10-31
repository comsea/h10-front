import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export const SeeAdminExpertises = () => {
    const {id} = useParams()
    let [isLoading, setIsLoading] = useState(true)
    const [expert, setExpert] = useState([])

    console.log(id)

    useEffect(() => {
        fetch(`https://127.0.0.1:8001/api/expertises/${id}`)
        .then((response) => {
            response = response.json()
            response.then((result) => {
                setExpert(result)
                setIsLoading(false)
            })})
    }, [])

    console.log(expert)

    return(
        <div className="w-full h-screen flex justify-center items-center bg-darkblue">
            <div className="bg-[#fafafa] w-[95%] h-[88%] p-6 rounded-3xl flex flex-col justify-start items-center space-y-6">
                <h1 className='text-6xl font-bold'>Expertise : {expert.title}</h1>
                <div className='w-[90%] flex flex-col items-start space-y-6'>
                    <Link to={'/admin/adminExpertises'} className="bg-darkblue text-white rounded px-6 py-1">Retour</Link>
                    <p dangerouslySetInnerHTML={{ __html: expert.description }} />
                </div>
            </div>
        </div>
    )
}