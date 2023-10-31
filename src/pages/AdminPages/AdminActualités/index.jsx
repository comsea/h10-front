import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
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

const style = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

export const AdminActualités = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [actus, setActus] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [profil, setProfil] = useState("")


    useEffect(() => {
        fetch('https://127.0.0.1:8001/api/actualites')
        .then((response) => {
            response = response.json()
            response.then((result) => {
                setActus(result['hydra:member'])
                setIsLoading(false)
            })})
    }, [])

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
      };
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
      };
    const handleProfilChange = (event) => {
        setProfil(event.target.value);
      };

    return(
        <div className="w-full h-screen flex justify-center items-center bg-darkblue">
            <div className="bg-[#fafafa] w-[95%] h-[88%] p-6 rounded-3xl flex flex-col justify-start items-center space-y-6">
                <h1 className='text-6xl font-bold'>Actualités</h1>
                <div className='w-[90%] flex justify-end'>
                    <ThemeProvider theme={theme}>
                            <Button variant="contained" onClick={handleOpen}>Nouvelle Actualité</Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style} className="space-y-5" component="form" autoComplete="off">
                                    <h2 className='text-2xl font-semibold'>Ajouter une actualités</h2>
                                    <TextField required id="outlined-basic" label="Titre" value={title} onChange={handleTitleChange} placeholder="Titre" variant="outlined" type="text" className="w-full" />
                                    <TextField required id="outlined-basic" label="Description" value={description} onChange={handleDescriptionChange} placeholder="Description" variant="outlined" type="text" multiline minRows={3} className="w-full" />
                                    <TextField required id="outlined-basic" value={profil} onChange={handleProfilChange} variant="outlined" type="file" className="w-full" />
                                    <LoadingButton
                                        variant="contained"
                                        type="submit"
                                        color="primary"
                                        >
                                        Ajouter
                                    </LoadingButton>
                                </Box>
                            </Modal>
                        </ThemeProvider>
                </div>
            </div>
        </div>
    )
}