import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme, TableBody } from '@mui/material';
import Button from '@mui/material/Button';
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

export const AdminEmployés = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [employes, setEmployes] = useState([])
    const [cabinets, setCabinets] = useState([])
    const [page, setPage] = useState(1)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        fetch('https://127.0.0.1:8001/api/employes')
        .then((response) => {
            response = response.json()
            response.then((result) => {
                setEmployes(result['hydra:member'])
                setIsLoading(false)
            })})
    }, [])

    useEffect(() => {
        fetch('https://127.0.0.1:8001/api/cabinets')
        .then((response) => {
            response = response.json()
            response.then((result) => {
                setCabinets(result['hydra:member'])
                setIsLoading(false)
            })})
    }, [])

    const supprimerEntite = (id) => {
        const confirmeSuppression = window.confirm('Êtes-vous sûr de vouloir supprimer cette entité ?');
    
        if (confirmeSuppression) {
          const url = `https://127.0.0.1:8001/api/employes/${id}`;
    
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

    let constantValue = 2;

    if (windowWidth > 1490) {
        constantValue = 6;
    } else if (windowWidth => 1024) {
        constantValue = 3;
    }
  
      const startIndex = (page - 1) * constantValue
      const endIndex = startIndex + constantValue

    console.log(cabinets)

    return(
        <div className="w-full h-screen flex justify-center items-center bg-darkblue">
            <div className="bg-[#fafafa] w-[95%] h-[88%] p-6 rounded-3xl flex flex-col justify-start items-center space-y-6">
                <h1 className='text-6xl font-bold'>Employés</h1>
                <div className='w-[90%] flex justify-end'>
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" onClick={handleOpen}>Nouvel Employés</Button>
                    </ThemeProvider>
                </div>
                <div className='w-[90%]'>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell align="center">Adresse Mail</TableCell>
                                    <TableCell align="center">Prénom</TableCell>
                                    <TableCell align='center'>Nom</TableCell>
                                    <TableCell align='center'>Job</TableCell>
                                    <TableCell align='center'>Image</TableCell>
                                    <TableCell align='center'>Cabinet</TableCell>
                                    <TableCell align="center">Voir</TableCell>
                                    <TableCell align="center">Modifier</TableCell>
                                    <TableCell align="center">Supprimer</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {isLoading ? 'Pas d\'actualités disponibles pour le moment' : employes.slice(startIndex, endIndex).map(employe => (
                                    <TableRow>
                                        <TableCell align="center">{employe.id}</TableCell>
                                        <TableCell align="center">{employe.email}</TableCell>
                                        <TableCell align="center">{employe.firstname}</TableCell>
                                        <TableCell align="center">{employe.lastname}</TableCell>
                                        <TableCell align="center">{employe.job}</TableCell>
                                        <TableCell align="center"></TableCell>
                                        <TableCell align="center">{isLoading ? "" : cabinets.map(cabinet => (
                                            <>
                                                {employe.cabinet === "/api/cabinets/"+cabinet.id ? cabinet.name : ""}
                                            </>
                                        ))}
                                        </TableCell>
                                        <TableCell align="center">
                                            <Link to={`/admin/seeAdminEmployes/${employe.id}`}>
                                                <VisibilityIcon />
                                            </Link>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Link to={`/admin/editAdminExpertises/${employe.id}`}>
                                                <ModeEditIcon />
                                            </Link>
                                        </TableCell>
                                        <TableCell align="center">
                                            <DeleteIcon onClick={() => supprimerEntite(employe.id)} className='cursor-pointer' />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    )
}