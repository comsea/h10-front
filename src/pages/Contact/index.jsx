import Header from "../../components/Header"
import contact from "../../asset/Header/contact.png"
import location from "../../asset/Svg/location.svg"
import tel from "../../asset/Svg/tel.svg"
import avion from "../../asset/avion.png"


const Contact = () => {

    return(
        <div>
            <Header title="Contactez-nous à tout moment" text="Nos équipes sont à votre écoute et vous garantissent une réponse rapide." image={contact} />
            <div class="w-11/12 lg:w-10/12 flex flex-col-reverse xl:flex-row shadow-xl mx-auto rounded-2xl mb-10">
                <div class="xl:w-2/5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2580.227947879768!2d4.941962776825223!3d49.706510171459605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ea6ef7ad7ff60d%3A0xbbc5308d96c93a97!2s6%20Bd%20des%20%C3%89cossais%2C%2008200%20Sedan!5e0!3m2!1sfr!2sfr!4v1697016824912!5m2!1sfr!2sfr" class="w-full h-full rounded-b-2xl xl:rounded-l-2xl border-none" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="xl:w-3/5 p-4 lg:p-16">
                    <h3 class="text-darkblue font-semibold text-3xl lg:text-4xl mb-6">Rencontrer nos clients est une étape essentielle dans la construction de nos relations de travail.</h3>
                    <div class="flex items-start flex-col md:flex-row font-normal mb-6">
                        <div class="flex items-start md:w-1/2">
                            <img src={location} alt="icon représentation la localisation du réseau H10" class="mr-4"/>
                            <div class ="flex flex-col">
                                <p>6 Boulevard des écossais, <br/>
                                08200 Sedan</p>
                                <a href="https://maps.app.goo.gl/ajFgLnLw44KFG21U7" target="_blank" class="text-darkblue">Voir l’itinéraire →</a>
                            </div>
                        </div>
                        <div class="flex items-center md:w-1/2">
                            <img src={tel} alt="icon représentation le numéro de téléphone du réseau H10" class="mr-4"/>
                            <p>06 06 06 06 06</p>
                        </div>
                    </div>
                        
                    {/* faire traitement from */}
                    <form action="" method="POST" class="lg:space-y-4 font-normal text-xl">
                        <div class="space-y-1">
                            <label for="nom" ></label>
                            <input type="text" id="nom" name="nom" placeholder="Prénom Nom *" class="w-full  bg-gray2 active:border-blue rounded-lg px-8 py-4"/>
                        </div>
                        <div class="space-y-1">
                            <label for="email" ></label>
                            <input type="email" id="email" name="email" placeholder="prenom@nom.fr *" class="w-full lg:w-1/2 bg-gray2 rounded-lg px-8 py-4"/>
                            <label for="phone" ></label>
                            <input type="phone" id="phone" name="phone" placeholder="Téléphone *" class="w-full lg:w-[49%] lg:ml-1  bg-gray2 rounded-lg px-8 py-4"/>
                        </div>
                        <div class="space-y-1">
                            <label for="message" ></label>
                            <textarea id="message" name="message" rows="4" placeholder="Votre message...*" class="w-full  bg-gray2 rounded-lg px-8 py-4"></textarea>
                        </div>
                        <div class="w-full flex justify-center lg:justify-end">
                            <button type="submit" class="bg-darkblue flex items-center text-white font-normal py-4 px-8 rounded-lg hover:bg-blue transition duration-300">
                            <img src={avion} alt="icon pour envoyer le formulaire" class="mr-3" />Envoyer</button>
                        </div>    
                    </form>
                    
                </div>
            </div>
        </div>
    
    )
}

export default Contact