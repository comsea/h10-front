import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { TextField, TableBody, Pagination, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { LoadingButton } from "@mui/lab"
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
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

export const AdminActualités = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [actus, setActus] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState(null)
    const [page, setPage] = useState(1)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        fetch('https://127.0.0.1:8001/api/actualites')
        .then((response) => {
            response = response.json()
            response.then((result) => {
                setActus(result['hydra:member'])
                setIsLoading(false)
            })})
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
    
        try {
          const formData = new FormData();
          formData.append('title', title);
          formData.append('description', description);
          formData.append('image', image);
    
          fetch('https://127.0.0.1:8001/api/createActualite', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: formData,
          })
            .then((response) => {
              if (response.ok) {
                console.log('Votre compte a été créé.');
              } else {
                console.error('Problème de création de votre compte.');
              }
            })
            .catch((error) => {
              console.error('Une erreur s\'est produite lors de la requête :', error);
            });
        } catch (error) {
          console.error('Une erreur s\'est produite lors de la requête :', error);
        }
      };

    const supprimerEntite = (id) => {
        const confirmeSuppression = window.confirm('Êtes-vous sûr de vouloir supprimer cette entité ?');
    
        if (confirmeSuppression) {
          const url = `https://127.0.0.1:8001/api/actualites/${id}`;
    
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
    const handleImageChange = (event) => {
        const imageFile = event.target.files[0]
        setImage(imageFile);
      };

    const handleChangePage = (event, value) => {
        setPage(value)
    }

    const uploadImage = () => {
        const fileInput = document.getElementById("fileInput");
        fileInput.click(); // Ouvre la boîte de dialogue de sélection de fichier
      };
    
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
                            <Box sx={style} className="space-y-5" autoComplete="off">
                                <h2 className='text-2xl font-semibold'>Ajouter une actualités</h2>
                                <form onSubmit={handleSubmit} className='flex flex-col w-full space-y-6'>
                                    <div className='w-full flex flex-col'>
                                        <label htmlFor="title">Titre :</label>
                                        <input
                                        type="text"
                                        id="title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className='border border-darkblue rounded py-1 px-2'
                                        />
                                    </div>
                                    <div className='w-full flex flex-col'>
                                        <label htmlFor="description">Description :</label>
                                        <textarea
                                        id="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className='border border-darkblue rounded py-1 px-2'
                                        rows="5" 
                                        />
                                    </div>
                                    <div className='w-full flex flex-col'>
                                        <label htmlFor="image">Image :</label>
                                        <input
                                            type="file"
                                            id="fileInput" // Identifiant du champ de fichier
                                            accept="*/*"
                                            onChange={handleImageChange}
                                            style={{ display: 'none' }} // Caché par défaut
                                        />
                                        <button type="button" onClick={uploadImage} className='bg-darkblue text-white px-6 py-1 rounded'>Télécharger une image</button>
                                    </div>
                                    <div className='w-full flex justify-center'>
                                        <button type="submit" className='bg-darkblue text-white px-6 py-1 rounded'>Envoyer</button>
                                    </div>
                                </form>
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
                                    <TableCell align='center'>Image</TableCell>
                                    <TableCell align='center'>Date de création</TableCell>
                                    <TableCell align='center'>Dernière modification</TableCell>
                                    <TableCell align="center">Voir</TableCell>
                                    <TableCell align="center">Modifier</TableCell>
                                    <TableCell align="center">Supprimer</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {isLoading ? 'Pas d\'actualités disponibles pour le moment' : actus.slice(startIndex, endIndex).map(actu => (
                                    <TableRow>
                                        <TableCell>{actu.id}</TableCell>
                                        <TableCell>{actu.title}</TableCell>
                                        <TableCell><p className="line-clamp-2" dangerouslySetInnerHTML={{ __html: actu.description }} /></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell>{(new Date(actu.createdAt)).toLocaleDateString()}</TableCell>
                                        <TableCell>{(new Date(actu.updatedAt)).toLocaleDateString()}</TableCell>
                                        <TableCell align="center">
                                            <Link to={`/admin/seeAdminActualites/${actu.id}`}>
                                                <VisibilityIcon />
                                            </Link>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Link to={`/admin/editAdminExpertises/${actu.id}`}>
                                                <ModeEditIcon />
                                            </Link>
                                        </TableCell>
                                        <TableCell align="center">
                                            <DeleteIcon onClick={() => supprimerEntite(actu.id)} className='cursor-pointer' />
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
                                    count={Math.ceil(actus.length / constantValue)}
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