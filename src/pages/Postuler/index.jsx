import React, { useState, useEffect } from 'react';
import Header from "../../components/Header"
import postuler from "../../asset/Header/postuler.png"
import past from "../../asset/Svg/past.svg";
import before from "../../asset/Svg/before.svg";
import test from "../../asset/test-actu.png";
import avion from "../../asset/avion.png";
import cv from "../../asset/Svg/cv.svg";
import Banderole from "../../components/Banderole ";
import { Pagination, Stack, ThemeProvider, createTheme, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from "@emailjs/browser"

const itemsPerPage = 8

const theme = createTheme({
    palette: {
        primary:{
            main: '#184E65',
            secondary: '#FFFFFF',
            contrastText: '#FFFFFF'
        }
    }
})

const Postuler = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [emplois, setEmplois] = useState([])
    const [cabinets, setCabinets] = useState([])
    const [page, setPage] = useState(1)
    const [filter, setFilter] = useState('')
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        fetch(`https://api.reseauh10.fr/api/emplois`)
        .then((response) => {
            response = response.json()
            response.then((result) => {
                setEmplois(result['hydra:member'])
                setIsLoading(false)
            })})
    }, [])

    useEffect(() => {
        fetch(`https://api.reseauh10.fr/api/cabinets`)
        .then((response) => {
            response = response.json()
            response.then((result) => {
                setCabinets(result['hydra:member'])
                setIsLoading(false)
            })})
    }, [])

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

    let constantValue = 2;

    if (windowWidth > 1490) {
          constantValue = 8;
    } else if (windowWidth => 1024) {
          constantValue = 6;
    }

    const handleChangePage = (event, value) => {
        setPage(value)
    }

    console.log(emplois)

    const startIndex = (page - 1) * constantValue
    const endIndex = startIndex + constantValue

    const schema = yup
    .object({
        lastname: yup
            .string()
            .max(50)
            .required("Veuillez mettre votre nom"),
        firstname: yup
            .string()
            .max(50)
            .required("Veuillez mettre votre prénom"),
        mail: yup
            .string()
            .email("Veuillez mettre une adresse email valide")
            .max(255)
            .required("Veuillez mettre votre adresse email"),
        phone: yup
            .string()
            .max(10)
            .required("Veuillez mettre votre numéro de téléphone"),
        subject: yup
            .string()
            .max(255)
            .required("Veuillez mettre un sujet"),
        validate: yup
            .bool()
            .required("Veuillez accepter les conditions")
            .oneOf([true], "Veuillez accepter les conditions"),
        message: yup
            .string()
            .required("Veuillez mettre votre message"),
        attachment: yup
            .mixed()
            .test(
            "fileSize",
            "Le fichier est trop volumineux",
            (value) => {
                if (!value || value.length === 0) {
                    return true; // Champ facultatif, donc validation passée si vide
                }
                    return value[0].size <= 5242880; // Taille maximale de 5 Mo (en octets)
                }
            ),
    })
    .required()

    const [isSubmitting, setIsSubmitting] = useState(false);

    const { register, formState: {errors}, handleSubmit} = useForm({resolver: yupResolver(schema)})

      const onSubmit = (data, r) => {
        const templateID = "template_r3jo20n";
        const serviceID = "service_vp9gwm7";
        sendFeedback(serviceID, templateID, {
            lastname: data.lastname,
            firstname: data.firstname,
            mail: data.mail,
            phone: data.phone,
            subject: data.subject,
            message: data.message,
            attachment: data.attachment,
            reply_to: r.target.reset(),
        })
    }

    const sendFeedback = (serviceId, templateId, variables) => {
        emailjs
          .send(serviceId, templateId, variables, 'ZBYxTo1PMl5CYob6d')
          .then((res) => {
            setIsSubmitting(true)
            toast.success('Votre email a bien été envoyé')
            console.log('succes');
          })
          .catch((err) => {
            toast.error('Erreur lors de l\'envoi de votre email')
            console.error('Il y a une erreur')
          })
          .finally(() => {
            setIsSubmitting(false)
          })
      }


    return (
        <div>
            <Header title="Nos offres d’emploi" text="Envie de rejoindre l'aventure H10 ? Consultez nos offres d'emploi ! Si aucune ne correspond à vos attentes, n'hésitez pas à nous soumettre une candidature spontanée ! Toutes sont étudiées." image={postuler} />
            <Banderole />
            <ToastContainer className="text-lg" />
            <div class="w-11/12 lg:w-10/12 mx-auto">
                {/* OFFRE D'EMPLOI */}
                <div class="grid grid-cols-1 text-2xl lg:text-3xl 2xl:grid-cols-4 lg:grid-cols-3 lg:gap-8 my-12">
                    {/* faire boucle emploie */}
                    {isLoading ? 'Chargement en cours' : emplois.slice(startIndex, endIndex).map(emploi =>
                    <div className="rounded-3xl shadow-2xl flex flex-col justify-start">
                        <img src={"https://api.reseauh10.fr/build/images/" + emploi.image} alt="représentant l'emploi" class="w-full rounded-t-3xl" />
                        <div className="mx-4 py-4 flex flex-col justify-between items-start h-full">
                            <div>
                                {isLoading ? "Chargment en cours" : cabinets.map(cabinet => (
                                    emploi.cabinet === "/api/cabinets/"+cabinet.id ?
                                    <>
                                        <p class="text-darkblue font-normal 2xl:text-xl text-lg">Cabinet {cabinet.name}</p>
                                    </>
                                    : ""
                                ))}
                                <p class="text-2xl font-bold capitalize">{emploi.title}</p>
                            </div>
                            <div>
                                <p className="line-clamp-3 font-normal mb-5 2xl:text-xl text-base text-justify" dangerouslySetInnerHTML={{ __html: emploi.description }} />
                                <div class="w-full justify-between flex-col lg:flex-row font-normal flex 2xl:text-lg text-xs">
                                    <p class="text-darkblue font-thin">{emploi.date}</p>
                                    <Link to={`/emploi/${emploi.id}`}>Voir l'article →</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
                <div className='flex justify-center items-center my-8'>
                    <ThemeProvider theme={theme}>
                        <Stack spacing={2} justifyContent="center" py={1} px={4} className='bg-[#FFFFFF] shadow-2xl rounded-full'>
                            {isLoading ? 
                                <div>
                                    Chargement en cours
                                </div> 
                                : 
                            <Pagination 
                                count={Math.ceil(emplois.length / constantValue)}
                                page={page}
                                onChange={handleChangePage}
                                color='primary'                             
                            />
                            }
                        </Stack>
                    </ThemeProvider>
                </div>
                {/* POSTULER FROM */}
                <div class="text-center">
                    <h3 class="2xl:text-3xl text-2xl text-darkblue mb-6 " id='form'>Envie de postuler à une offre d’emploi ? 
                    <br/>Remplissez dès maintenant notre formulaire de candidature.</h3>
                    <p class="text-bluegray mb-4">Le réseau h10 est impatient d’avoir de nouveaux membres dans ses équipes,
                    <br/>n’hésitez pas à postuler si vous voulez rejoindre l’aventure !</p>
                    
                    {/* faire traitement from */}
                    <form onSubmit={handleSubmit(onSubmit)} class="lg:space-y-4 font-normal lg:w-3/5 mb-20 mx-auto text-xl">
                        <div class="space-y-1">
                            <label for="lastName" ></label>
                            <input type="text" id="lastName" name="lastName" {...register("lastname")} placeholder="Nom *" class="w-full  bg-gray2 active:border-blue rounded-lg px-8 py-4"/>
                            { errors.lastname && <p className="text-[#FF1D25]">{errors.lastname.message}</p>}
                        </div>
                        <div class="space-y-1">
                            <label for="firstName" ></label>
                            <input type="text" id="firstName" name="firstName" {...register("firstname")} placeholder="Prénom *" class="w-full  bg-gray2 active:border-blue rounded-lg px-8 py-4"/>
                            { errors.firstname && <p className="text-[#FF1D25]">{errors.firstname.message}</p>}
                        </div>
                        <div class="flex flex-row w-full justify-between"> 
                            <div className="flex flex-col space-y-1 w-[49%]"> 
                                <label for="email" ></label>
                                <input type="email" id="email" name="email" {...register("mail")} placeholder="prenom@nom.fr *" class="w-full bg-gray2 rounded-lg px-8 py-4"/>
                                { errors.mail && <p className="text-[#FF1D25]">{errors.mail.message}</p>}
                            </div>
                            <div className="flex flex-col space-y-1 w-[49%]"> 
                                <label for="phone" ></label>
                                <input type="phone" id="phone" name="phone" {...register("phone")} placeholder="Téléphone *" class="w-full lg:ml-1  bg-gray2 rounded-lg px-8 py-4"/>
                                { errors.phone && <p className="text-[#FF1D25]">{errors.phone.message}</p>}
                            </div>
                        </div>
                        <div class="space-y-1">
                            <label for="message" ></label>
                            <textarea id="message" name="message" rows="4" {...register("message")} placeholder="Votre message...*" class="w-full  bg-gray2 rounded-lg px-8 py-4"></textarea>
                            { errors.message && <p className="text-[#FF1D25]">{errors.message.message}</p>}
                        </div>
                        <div class="space-y-1 mb-10 lg:mb-0">
                            <label for="post" class="mr-4">Je souhaite postuler pour :</label>
                            <select name="post" id="post" placeholder="Sélectionnez le post à pourvoir*" class=" border border-gray2 text-bluegray bg-white rounded-lg px-4 py-4">
                                <option value="" disabled selected>Sélectionnez le post à pourvoir</option>
                                <option value="Candidature spontanée">Candidature spontanée</option>
                                {isLoading ? "Pas encore d\'offres d\'emplois" : emplois.map(emploi =>
                                    <option value={emploi.title} {...register("subject")}>{emploi.title} {isLoading ? "Chargment en cours" : cabinets.map(cabinet => (emploi.cabinet === "/api/cabinets/"+cabinet.id ? cabinet.name : "" ))}</option>
                                )}
                            </select>
                            { errors.subject && <p className="text-[#FF1D25]">{errors.subject.message}</p>}
                        </div>
                        <div className="space-y-1 flex flex-row justify-center items-center">
                            <label for="cv" class="w-[55%] border border-gray2  text-bluegray bg-white rounded-lg lg:rounded-none lg:rounded-l-lg px-4 py-4">Veuillez insérer votre CV (PDF uniquement)*</label>
                            <input
                                type="file"
                                id="cv"
                                name="cv"
                                {...register("attachment")}
                                accept=".pdf"
                                className="bg-gray2 rounded-r-lg px-8 py-4 h-full w-[45%]"
                            />
                            {errors.attachment && (
                                <p className="text-[#FF1D25]">{errors.attachment.message}</p>
                            )}
                        </div>
                        <p class="text-sm font-normal my-12 text-bluegray">*Curriculum Vitae, si vous n’en possédez pas votre candidature ne sera pas envoyée</p>
                        <div class="space-y-1 mb-10 lg:mb-0 flex justify-center">
                            <label for="conditions" class="flex items-center">
                                <input type="checkbox" id="conditions" name="conditions" {...register("validate")} class="bg-gray2 accent-blue rounded-lg px-3 py-3" />
                                <span class="ml-2 text-sm">Accepter les conditions d'utilisation <Link to="/politiques" className="hover:text-red-600">*</Link></span>
                                { errors.validate && <p className="text-[#FF1D25]">{errors.validate.message}</p>}
                            </label>
                        </div>
                        <div class="w-full flex justify-center">
                            <button type="submit" class="bg-darkblue flex items-center text-white font-normal py-4 px-8 rounded-lg hover:text-darkblue hover:bg-blue transition duration-300" disabled={isSubmitting}>
                            <img src={avion} alt="icon pour envoyer le formulaire" class="mr-3" />{isSubmitting ? "Envoie en cours..." : "Envoyer ma candidature"}</button>
                        </div>    
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default Postuler