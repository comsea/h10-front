import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { TextField, ThemeProvider, createTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { LoadingButton } from "@mui/lab"

const theme = createTheme({
    palette: {
        primary:{
            main: '#184E65',
            secondary: '#FFFFFF',
            contrastText: '#FFFFFF'
        }
    }
})

export const EditAdminExpertises = () => {
    const {id} = useParams()
    let [isLoading, setIsLoading] = useState(true)
    const [expert, setExpert] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
      };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
      };

    useEffect(() => {
        fetch(`https://127.0.0.1:8001/api/expertises/${id}`)
        .then((response) => {
            response = response.json()
            response.then((result) => {
                setExpert(result)
                setIsLoading(false)
            })})
    }, [])

     const modifierEntite = () => {
        const url = `https://127.0.0.1:8001/api/editExpertise/${id}`;
    
        fetch(url, {
          method: 'PATCH', // Utilisez PUT pour la modification, ou PATCH si cela convient mieux à votre cas
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: title,
            description: description,
          }), // Envoyez les nouvelles données
        })
          .then((response) => {
            if (response.ok) {
              console.log('Entité modifiée avec succès');
            } else {
              console.error('Erreur lors de la modification de l\'entité');
            }
          })
          .catch((error) => {
            console.error('Erreur réseau :', error);
          });
      }; 

    console.log(description)

    return(
        <div className="w-full h-screen flex justify-center items-center bg-darkblue">
            <div className="bg-[#fafafa] w-[95%] h-[88%] p-6 rounded-3xl flex flex-col justify-start items-center space-y-6">
                <h1 className='text-6xl font-bold'>Modifier Expertise : {expert.title}</h1>
                <div className='w-[90%] flex flex-col items-start space-y-6'>
                    <Link to={'/admin/adminExpertises'} className="bg-darkblue text-white rounded px-6 py-1">Retour</Link>
                    <ThemeProvider theme={theme} className="w-full">
                        <Box className="space-y-5 w-full" component="form" autoComplete="off" onSubmit={modifierEntite}>
                            <TextField id="outlined" label="Titre" value={title} onChange={handleTitleChange} placeholder="Titre" variant="outlined" type="text" className="w-full" />
                            <TextField id="outlined-basic" label="Description" value={description} onChange={handleDescriptionChange} placeholder="Description" variant="outlined" type="text" multiline minRows={3} className="w-full" />    
                            <LoadingButton
                                variant="contained"
                                type="submit"
                                color="primary"
                            >
                                Modifier
                            </LoadingButton>
                        </Box>
                    </ThemeProvider>        
                </div>
            </div>
        </div>
    )
}