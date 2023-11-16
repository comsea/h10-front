import Header from "../../components/Header"
import contact from "../../asset/Header/contact.png"
import location from "../../asset/Svg/location.svg"
import avion from "../../asset/avion.png"
import Banderole from "../../components/Banderole "
import { Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from "@emailjs/browser"
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useCallback, useEffect, useState } from "react";

const Contact = () => {
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
                .required("Veuillez mettre votre message")
        })
        .required()
      const [isSubmitting, setIsSubmitting] = useState(false);

      const { register, formState: {errors}, handleSubmit} = useForm({resolver: yupResolver(schema)})

      const YourReCaptchaComponent = () => {
        const { executeRecaptcha } = useGoogleReCaptcha();
      
        // Create an event handler so you can call the verification on button click event or form submit
        const handleReCaptchaVerify = useCallback(async () => {
          if (!executeRecaptcha) {
            console.log('Execute recaptcha not yet available');
            return;
          }
      
          const token = await executeRecaptcha('yourAction');
          // Do whatever you want with the token
        }, [executeRecaptcha]);
      
        // You can use useEffect to trigger the verification as soon as the component being loaded
        useEffect(() => {
          handleReCaptchaVerify();
        }, [handleReCaptchaVerify]);
      };

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
            reply_to: r.target.reset(),
        })
    }

    const sendFeedback = (serviceId, templateId, variables) => {
        emailjs
          .send(serviceId, templateId, variables, 'ZBYxTo1PMl5CYob6d')
          .then((res) => {
            console.log('succes');
          })
          .catch((err) => console.error('Il y a une erreur'));
      }

    return(
        <div>
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
                        
                        
                    {/* faire traitement from */}
                    <form onSubmit={handleSubmit(onSubmit)} class="lg:space-y-4 font-normal text-xl">
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
                            <label for="subject" ></label>
                            <input type="text" id="subject" name="subject" {...register("subject")} placeholder="Sujet *" class="w-full  bg-gray2 active:border-blue rounded-lg px-8 py-4"/>
                            { errors.subject && <p className="text-[#FF1D25]">{errors.subject.message}</p>}
                        </div>
                        <div class="space-y-1">
                            <label for="message" ></label>
                            <textarea id="message" name="message" rows="4" {...register("message")} placeholder="Votre message...*" class="w-full  bg-gray2 rounded-lg px-8 py-4"></textarea>
                            { errors.message && <p className="text-[#FF1D25]">{errors.message.message}</p>}
                        </div>
                        <div class="space-y-1">
                            <label for="conditions" class="flex-col items-center">
                                <div className="flex flex-row">
                                    <input type="checkbox" id="acceptTerms" name="acceptTerms" {...register("validate")} class="bg-gray2 accent-blue rounded-lg px-3 py-3" />
                                    <span class="ml-2 text-sm">Accepter les conditions d'utilisation <Link to="/politiques" className="hover:text-red-600">*</Link></span>
                                </div>
                                { errors.validate && <p className="text-[#FF1D25]">{errors.validate.message}</p>}
                            </label>
                        </div>
                        <div class="w-full flex justify-center lg:justify-end">
                            <button type="submit" class="bg-darkblue hover:text-darkblue flex items-center text-white font-normal lg:py-4 py-2 px-8 rounded-lg hover:bg-blue transition duration-300">
                            <img src={avion} alt="icon pour envoyer le formulaire" class="mr-3" disabled={isSubmitting} />{isSubmitting ? "Envoie en cours..." : "Envoyer"}</button>
                        </div>    
                    </form>
                </div>
            </div>
        </div>
    
    )
}

export default Contact