import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { TableBody, TextField } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Button from '@mui/material/Button';
import { Pagination, Stack, ThemeProvider, createTheme } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { LoadingButton } from "@mui/lab"
import { Link } from 'react-router-dom';

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

export const AdminExpertises = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [experts, setExperts] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [page, setPage] = useState(1)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        fetch('https://127.0.0.1:8001/api/expertises')
        .then((response) => {
            response = response.json()
            response.then((result) => {
                setExperts(result['hydra:member'])
                setIsLoading(false)
            })})
    }, [])

    console.log(experts)

    const supprimerEntite = (id) => {
        const confirmeSuppression = window.confirm('Êtes-vous sûr de vouloir supprimer cette entité ?');
    
        if (confirmeSuppression) {
          const url = `https://127.0.0.1:8001/api/expertises/${id}`;
    
          fetch(url, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((response) => {
              if (response.ok) {
                console.log('Entité supprimée avec succès');
                window.location.reload()
                // Mettez à jour votre interface utilisateur ou effectuez d'autres actions nécessaires ici
              } else {
                console.error('Erreur lors de la suppression de l\'entité');
              }
            })
            .catch((error) => {
              console.error('Erreur réseau :', error);
            });
        }
      };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
      };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
    
        try {
            const response = fetch('https://127.0.0.1:8001/api/createExpertise', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                description: description,
            })
            });
    
            if (response.ok) {
            console.log('Votre compte a été créé.');
            window.location.reload()
            } else {
            console.error('Problème de création de votre compte.');
            window.location.reload()
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la requête :', error)
        }
      };
    
      const handleChangePage = (event, value) => {
        setPage(value)
    }

      let constantValue = 2;

    if (windowWidth > 1490) {
        constantValue = 6;
    } else if (windowWidth => 1024) {
        constantValue = 3;
    }

    const startIndex = (page - 1) * constantValue
    const endIndex = startIndex + constantValue

    return(
        <div className="w-full h-screen flex justify-center items-center bg-darkblue">
            <div className="bg-[#fafafa] w-[95%] h-[88%] p-6 rounded-3xl flex flex-col justify-start items-center space-y-6">
                <h1 className='text-6xl font-bold'>Expertises</h1>
                <div className='w-[90%] flex justify-end'>
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" onClick={handleOpen}>Nouvelle Expertise</Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style} className="space-y-5" component="form" autoComplete="off" onSubmit={handleSubmit}>
                                <h2 className='text-2xl font-semibold'>Ajouter une expertise</h2>
                                <TextField required id="outlined-basic" label="Titre" value={title} onChange={handleTitleChange} placeholder="Titre" variant="outlined" type="text" className="w-full" />
                                <TextField required id="outlined-basic" label="Description" value={description} onChange={handleDescriptionChange} placeholder="Description" variant="outlined" type="text" multiline minRows={3} className="w-full" />
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
                <div className='w-[90%]'>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell align="center">Titre</TableCell>
                                    <TableCell align="center">Description</TableCell>
                                    <TableCell align="center">Voir</TableCell>
                                    <TableCell align="center">Modifier</TableCell>
                                    <TableCell align="center">Supprimer</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {isLoading ? 'Pas d\'expertises disponibles pour le moment' : experts.slice(startIndex, endIndex).map(expert => (
                                    <TableRow>
                                        <TableCell>{expert.id}</TableCell>
                                        <TableCell>{expert.title}</TableCell>
                                        <TableCell><p className="line-clamp-2" dangerouslySetInnerHTML={{ __html: expert.description }} /></TableCell>
                                        <TableCell align="center">
                                            <Link to={`/admin/seeAdminExpertises/${expert.id}`}>
                                                <VisibilityIcon />
                                            </Link>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Link to={`/admin/editAdminExpertises/${expert.id}`}>
                                                <ModeEditIcon />
                                            </Link>
                                        </TableCell>
                                        <TableCell align="center">
                                            <DeleteIcon onClick={() => supprimerEntite(expert.id)} className='cursor-pointer' />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div className='flex justify-center items-center mt-8'>
                        <ThemeProvider theme={theme}>
                            <Stack spacing={2} justifyContent="center" py={1} px={4} className='bg-white shadow-2xl rounded-full'>
                                {isLoading ? 
                                <div>
                                    Chargement en cours
                                </div> 
                                : 
                                <Pagination 
                                    count={Math.ceil(experts.length / constantValue)}
                                    page={page}
                                    onChange={handleChangePage}
                                    color='primary'
                                    
                                />
                                }
                            </Stack>
                        </ThemeProvider>
                </div>
            </div>
        </div>
    )
}