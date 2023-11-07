import Header from "../../components/Header";
import actualités from "../../asset/Header/actualités.png"
import past from "../../asset/Svg/past.svg";
import before from "../../asset/Svg/before.svg";
import test from "../../asset/test-actu.png";
import down from "../../asset/Svg/down.svg"
import Banderole from "../../components/Banderole ";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import axios from 'axios';
import { Pagination, Stack, ThemeProvider, createTheme, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const itemsPerPage = 9

const theme = createTheme({
  palette: {
      primary:{
          main: '#184E65',
          secondary: '#FFFFFF',
          contrastText: '#FFFFFF'
      }
  }
}) 

const Actualités = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [actualites, setActualites] = useState([])
    const [page, setPage] = useState(1)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      axios.get('https://127.0.0.1:8000/api/actualites')
        .then((response) => {
          setActualites(response.data['hydra:member']);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          // Gérez les erreurs ici, si nécessaire
        });
    }, []);

    useEffect(() => {
        // Fonction de rappel pour mettre à jour la largeur de la fenêtre lorsque la taille de l'écran change
        const handleResize = () => {
          const newWidth = window.innerWidth;
          setWindowWidth(newWidth);
        };
    
        // Écoutez l'événement de redimensionnement de la fenêtre
        window.addEventListener('resize', handleResize);
    
        // Nettoyez l'écouteur d'événements lors du démontage du composant
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [])

    let constantValue = 3;

    if (windowWidth > 1490) {
          constantValue = 9;
    } else if (windowWidth => 1024) {
          constantValue = 6;
    }

    const handleChangePage = (event, value) => {
        setPage(value)
    }

    const startIndex = (page - 1) * constantValue
    const endIndex = startIndex + constantValue

  return (
    <div>
      <Header title="Quoi de neuf chez H10 ?" text="Retrouvez ici les actualités de notre réseau et de précieuses informations sur les lois et réglementations en vigueur." image={actualités} />
      <Banderole />
      <div className="w-11/12 mx-auto lg:w-10/12">
        {/* <div className="flex flex-col lg:flex-row justify-between mb-12">
            <div class="text-darkblue flex mx-auto lg:mx-0 text-xl border border-darkblue rounded-lg ">
                <p class="font-semibold lg:px-7 lg:py-4 px-4 py-2 rounded-l-lg border-darkblue border-r h-full mr-[0,5px] ">Trier par</p>
                <div class="font-normal flex lg:px-7 lg:py-4 px-4 py-2 rounded-r-lg -darkblue h-full ">
                    <p>Le plus récent</p>
                    <img src={down} alt="" class="w-4 ml-4"/>
                </div>
            </div>  
        </div> */}
        {/* GRID ACTUALITE */}
        <div className=" grid-cols-3 gap-4 h-full text-2xl mb-12 text-white font-normal hidden lg:grid">
          {isLoading ? "Pas d\'actualités disponnibles pour le moment" : actualites.slice(startIndex, endIndex).map((actualite) => (
            <div className="rounded-3xl h-[400px] relative">
              <div className="justify-between flex flex-col h-full">
                <p className="p-4">{(new Date(actualite.createdAt)).toLocaleDateString()}</p>
                <img src={"https://127.0.0.1:8000/build/images/" + actualite.image} alt="test actu" class="w-full rounded-3xl absolute h-full object-cover -z-50 bg-darkblue brightness-50" />
                <div className="p-4">
                  <p className="text-2xl font-semibold text-white lg:text-3xl mb-2">{actualite.title}</p>
                  <Link to={`/actualite/${actualite.id}`} class="hover:text-white duration-300">Voir l'article →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className='flex justify-center items-center my-8'>
                    <ThemeProvider theme={theme}>
                        <Stack spacing={2} justifyContent="center" py={1} px={4} className='bg-[#FFFFFF] shadow-2xl rounded-full'>
                            {isLoading ? 
                                "Pas d\'actualités disponnibles pour le moment"
                                : 
                            <Pagination 
                                count={Math.ceil(actualites.length / constantValue)}
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
  );
};

export default Actualités
