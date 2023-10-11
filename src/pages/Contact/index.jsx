import Header from "../../components/Header"
import contact from "../../asset/Header/contact.png"
import location from "../../asset/Svg/location.svg"
import tel from "../../asset/Svg/tel.svg"

const Contact = () => {

    return(
        <div>
            <Header title="Contactez-nous à tout moment" text="Nous vous laissons un formulaire de contact et nos coordonnées pour nous contacter." image={contact} />
            <div class="w-11/12 lg:w-10/12 flex flex-col-reverse lg:flex-row shadow-xl mx-auto rounded-2xl">
                <div class="lg:w-2/5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2580.227947879768!2d4.941962776825223!3d49.706510171459605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ea6ef7ad7ff60d%3A0xbbc5308d96c93a97!2s6%20Bd%20des%20%C3%89cossais%2C%2008200%20Sedan!5e0!3m2!1sfr!2sfr!4v1697016824912!5m2!1sfr!2sfr" class="w-full h-full rounded-l-2xl border-none" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="lg:w-3/5 p-16">
                    <h3 class="text-darkblue font-semibold text-3xl lg:text-4xl mb-6">Rencontrer nos clients est une étape essentielle dans la construction de nos relations de travail.s</h3>
                    <div class="flex items-start flex-col md:flex-row font-normal">
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
                </div>
            </div>
        </div>
    )
}

export default Contact