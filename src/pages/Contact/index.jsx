import Header from "../../components/Header"
import contact from "../../asset/Header/contact.png"
import location from "../../asset/Svg/location.svg"
import femme from "../../asset/Svg/femme.svg"
import avion from "../../asset/avion.png"
import Banderole from "../../components/Banderole "
import { Link } from "react-router-dom"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        acceptTerms: false,
      });
      const [file, setFile] = useState(null)
      const [isSubmitting, setIsSubmitting] = useState(false);

      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === 'checkbox' ? checked : value;
    
        setFormData({
          ...formData,
          [name]: fieldValue,
        });
      };

      const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true)
        try {
          await axios.post('https://api.reseauh10.fr/form', formData);
          toast.success('Message envoyé avec succès!');
        } catch (error) {
          toast.error('Erreur lors de l\'envoi du message', error);
        } finally {
            setIsSubmitting(false)
        }
      };
    
      console.log(formData)

    return(
        <div>
            <Helmet>
                <title>Contactez-nous ! | Réseaux H10</title>
            </Helmet>
            <Header title="Contactez-nous à tout moment" text="Nos équipes sont à votre écoute et vous garantissent une réponse rapide." image={contact} />
            <Banderole />
            <ToastContainer />
            <div class="w-11/12 lg:w-10/12 flex flex-col-reverse xl:flex-row shadow-xl mx-auto rounded-2xl mb-10">
                <div class="xl:w-2/5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2580.227947879768!2d4.941962776825223!3d49.706510171459605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ea6ef7ad7ff60d%3A0xbbc5308d96c93a97!2s6%20Bd%20des%20%C3%89cossais%2C%2008200%20Sedan!5e0!3m2!1sfr!2sfr!4v1697016824912!5m2!1sfr!2sfr" class="w-full h-full rounded-b-2xl xl:rounded-l-2xl border-none" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="xl:w-3/5 p-4 lg:p-16">
                    <h3 class="text-darkblue font-semibold text-3xl lg:text-4xl mb-6 text-justify">Rencontrer nos clients est une étape essentielle dans la construction de nos relations de travail.</h3>
                        <div class="flex items-start mb-6 ">
                            <img src={location} alt="icon représentation la localisation du réseau H10" class="mr-4"/>
                            <div class ="flex flex-col">
                                <p>6 Boulevard des écossais,
                                08200 Sedan</p>
                                <a href="https://maps.app.goo.gl/ajFgLnLw44KFG21U7" target="_blank" class="text-darkblue">Voir l’itinéraire →</a>
                            </div>
                        </div>
                        <div class="flex items-start mb-6 ">
                            <img src={femme} alt="icon représentation la localisation du réseau H10" class="mr-4"/>
                            <div class ="flex flex-col">
                                <p>03.24.29.80.81</p>
                                <a href="tel:0324298081" class="text-darkblue">Nous appeler →</a>
                            </div>
                        </div>
                        
                        
                    {/* faire traitement from */}
                    <form onSubmit={handleSubmit} class="lg:space-y-4 font-normal text-xl">
                        <div class="space-y-1">
                            <label for="lastName" ></label>
                            <input type="text" id="lastName" name="lastName" onChange={handleChange} value={formData.lastName} placeholder="Nom *" class="w-full  bg-gray2 active:border-blue rounded-lg px-8 py-4"/>
                        </div>
                        <div class="space-y-1">
                            <label for="firstName" ></label>
                            <input type="text" id="firstName" name="firstName" onChange={handleChange} value={formData.firstName} placeholder="Prénom *" class="w-full  bg-gray2 active:border-blue rounded-lg px-8 py-4"/>
                        </div>
                        <div class="space-y-1">
                            <label for="email" ></label>
                            <input type="email" id="email" name="email" onChange={handleChange} value={formData.email} placeholder="email@exemple.fr *" class="w-full lg:w-1/2 bg-gray2 rounded-lg px-8 py-4"/>
                            <label for="phone" ></label>
                            <input type="phone" id="phone" name="phone" onChange={handleChange} value={formData.phone} placeholder="Téléphone *" class="w-full lg:w-[49%] lg:ml-1  bg-gray2 rounded-lg px-8 py-4"/>
                        </div>
                        <div class="space-y-1">
                            <label for="subject" ></label>
                            <input type="text" id="subject" name="subject" onChange={handleChange} value={formData.subject} placeholder="Sujet *" class="w-full  bg-gray2 active:border-blue rounded-lg px-8 py-4"/>
                        </div>
                        <div class="space-y-1">
                            <label for="message" ></label>
                            <textarea id="message" name="message" onChange={handleChange} value={formData.message} rows="4" placeholder="Votre message...*" class="w-full  bg-gray2 rounded-lg px-8 py-4"></textarea>
                        </div>
                        <div class="space-y-1">
                            <label for="conditions" class="flex items-center">
                                <input type="checkbox" id="acceptTerms" name="acceptTerms" onChange={handleChange} value={formData.acceptTerms} class="bg-gray2 accent-blue rounded-lg px-3 py-3" />
                                <span class="ml-2 text-sm">Accepter les conditions d'utilisation <Link to="/politiques" className="hover:text-red-600">*</Link></span>
                            </label>
                        </div>
                        <div class="w-full flex justify-center lg:justify-end">
                            <button type="submit" class="bg-darkblue hover:text-darkblue flex items-center text-white font-normal lg:py-4 py-2 px-8 rounded-lg hover:bg-blue transition duration-300">
                            <img src={avion} alt="icon pour envoyer le formulaire" class="mr-3" disabled={isSubmitting} />{isSubmitting ? "Envoi en cours..." : "Envoyer"}</button>
                        </div>    
                    </form>
                </div>
            </div>
        </div>
    
    )
}

export default Contact