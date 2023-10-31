import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

export const SeeAdminEmployés = () => {
    const {id} = useParams()
    let [isLoading, setIsLoading] = useState(true)
    const [employe, setEmploye] = useState([])
    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        fetch(`https://127.0.0.1:8001/api/employes/${id}`)
        .then((response) => {
            response = response.json()
            response.then((result) => {
                setEmploye(result)
                setIsLoading(false)
            })})
    }, [])

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    return(
        <div className="w-full h-screen flex justify-center items-center bg-darkblue">
            <div className="bg-[#fafafa] w-[95%] h-[88%] p-6 rounded-3xl flex flex-col justify-start items-center space-y-6">
                <h1 className='text-6xl font-bold'>Employés : {employe.email}</h1>
                <div className='w-[90%] flex flex-col items-start space-y-6'>
                    <Link to={'/admin/adminEmployes'} className="bg-darkblue text-white rounded px-6 py-1 mb-4">Retour</Link>
                </div>
            </div>
        </div>
    )
}