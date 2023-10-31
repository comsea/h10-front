import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

export const SeeAdminExpertises = () => {
    const {id} = useParams()
    let [isLoading, setIsLoading] = useState(true)
    const [expert, setExpert] = useState([])
    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        fetch(`https://127.0.0.1:8001/api/expertises/${id}`)
        .then((response) => {
            response = response.json()
            response.then((result) => {
                setExpert(result)
                setIsLoading(false)
            })})
    }, [])

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    return(
        <div className="w-full h-screen flex justify-center items-center bg-darkblue">
            <div className="bg-[#fafafa] w-[95%] h-[88%] p-6 rounded-3xl flex flex-col justify-start items-center space-y-6">
                <h1 className='text-6xl font-bold'>Expertise : {expert.title}</h1>
                <div className='w-[90%] flex flex-col items-start space-y-6'>
                    <Link to={'/admin/adminExpertises'} className="bg-darkblue text-white rounded px-6 py-1">Retour</Link>
                    <Accordion expanded={expanded === 'panel'+expert.description} onChange={handleChange('panel'+expert.description)} className='rounded-xl w-full' key={expert.description}>
                        <AccordionSummary
                            expandIcon={<ExpandCircleDownIcon className='text-darkblue' />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            className=''
                        >
                            <p className='text-darkblue font-bold p-1 text-xl'>Description</p>
                        </AccordionSummary>
                        <AccordionDetails className='flex font-normal flex-col space-y-3'>
                            <p className="text-[#7C929B]" dangerouslySetInnerHTML={{ __html: expert.description }} />
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}