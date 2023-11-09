import { Link } from "react-router-dom"
import logo from "../../asset/logob2.png"
import avion from "../../asset/avion.png"
import avionn from "../../asset/avionn.png"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [experts, setExperts] = useState([]);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const theme = createTheme({
        palette: {
          primary: {
            main: '#FF0000',
          },
          secondary: {
            main: '#FFFFFF',
          },
        },
      });

      useEffect(() => {
        fetch(`https://api.reseauh10.fr/api/expertises/1`)
        .then((response) => {
            response = response.json()
            response.then((result) => {
                setExperts(result)
                setIsLoading(false)
            })})
    }, [])

    console.log(experts)

    return(
        <div className="w-full py-10 flex justify-center items-center text-white absolute top-0 right-0 z-50 2xl:text-lg text-sm">
            <div className="w-[95%] lg:flex hidden justify-between items-center">
                <div className="w-[200px] flex justify-start">
                    <Link to="/">
                        <img src={logo} alt="Logo blanc 2" className="w-[120px]" />
                    </Link>
                </div>
                <div className="flex justify-center items-center xl:space-x-8 space-x-4 text-center">
                    <Link to="/">Accueil</Link>
                    <Link to="presentation">Présentation</Link>
                    <Link to="partenaires">Cabinets partenaires</Link>
                    <Link to="valeurs">Valeur ajoutée</Link>
                    <Link to={`/expertises/${experts.title}`}>Expertises</Link>
                    <Link to="actualites">Actualités</Link>
                    <Link to="engagement">Engagement RSE</Link>
                    <Link to="postuler">Postuler</Link>
                </div>
                <div className="w-[200px] flex justify-end items-end">
                    <Link to="contact" className="flex items-center space-x-2">
                        <img src={avion} alt="Avion en papier" className="w-[20px] h-[20px]" />
                        <p>Contact</p>
                    </Link>
                </div>
            </div>
            <div className="w-11/12 lg:hidden flex flex-row justify-between items-center">
                <Link to="/" className="w-[200px]">
                    <img src={logo} alt="logo" className="w-[100px]" />
                </Link>
                <div>
                    <ThemeProvider theme={theme}>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <MenuIcon color="secondary" />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                            color="primary"
                        >
                            <MenuItem onClick={handleClose}><Link to="/" className="w-full">Accueil</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to="/presentation" className="w-full">Présentation</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to="/partenaires" className="w-full">Cabinets partenaires</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to="/valeurs" className="w-full">Valeur ajoutée</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to={`/expertises/${experts.title}`} className="w-full">Expertises</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to="/actualites" className="w-full">Actualités</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to="engagement" className="w-full">Engagement RSE</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to="postuler" className="w-full">Postuler</Link></MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link to="contact" className="flex items-center space-x-2">
                                    <img src={avionn} alt="Avion en papier noir" className="w-[20px] h-[20px]" />
                                    <p>Contact</p>
                                </Link>
                            </MenuItem>
                        </Menu>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    )
}

export default Navbar