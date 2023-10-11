import Header from "../../components/Header"
import partenaires from "../../asset/Header/partenaires.png"
import ficom from "../../asset/Cabinets/couleur/ficom.svg"
import actualys from "../../asset/Cabinets/couleur/actualys.svg"
import fizalys from "../../asset/Cabinets/couleur/fizalys.svg"
import cwa from "../../asset/Cabinets/couleur/cwa.svg"
import hmc from "../../asset/Cabinets/couleur/hmc.svg"
import phone from "../../asset/Svg/phone.svg"
import web from "../../asset/Svg/website.svg"
import map from "../../asset/Svg/maps.svg"
import { Link } from "react-router-dom"


const Partenaires = () => {
    return(
        <div>
            <Header title="Un réseau en partenariat" text="Découvrez le réseau H10 ! Plus de 100 employés, dans cinq entreprises différentes." image={partenaires}/>
            <div class="w-11/12 lg:w-10/12 text-center mx-auto">
                {/* TABLE NAV */}
                <div class="bg-gray px-4 py-2 rounded-3xl">
                    <div class="w-4/5 mx-auto flex items-center">
                        <div class="hover:bg-blue w-1/3 duration-200 items-center rounded-t-full">
                            <img src={ficom} class="mx-auto w-80  hover:grayscale" alt="logo du cabinet ficom" />
                        </div>
                        <div class="hover:bg-blue w-1/3 duration-200 rounded-t-full mx-12">
                            <img src={actualys} class="mx-auto w-80 py-10 hover:grayscale" alt="logo du cabinet actualys" />
                        </div>
                        <div class="hover:bg-blue w-1/3 duration-200 rounded-t-full">
                            <img src={cwa} class="mx-auto py-10 w-80 hover:grayscale" alt="logo du cabinet cwa" />
                        </div>
                    </div>
                    <div class="w-4/5 mx-auto flex items-center">
                        <div class="hover:bg-blue w-1/2 duration-200 rounded-t-full">
                            <img src={fizalys} class="mx-auto py-10 hover:grayscale" alt="logo du cabinet fizalys" />
                        </div>
                        <div class="hover:bg-blue w-1/2 duration-200 rounded-t-full mx-12">
                            <img src={hmc} class="mx-auto py-10 hover:grayscale" alt="logo du cabinet hmc" />
                        </div>
                    </div>
                </div>

                {/* TABLE CONTENT*/}
                <div class="bg-gray rounded-2xl text-start">
                    <div class="w-11/12 mx-auto py-20 my-20">
                        <h3 class="text-darkblue font-semibold text-5xl mb-8">Cabinet</h3>
                        <p class="text-xl font-normal mb-6">Description</p>
                        <h4 class="text-darkblue font-semibold text-5xl mb-8">Cabinet Lieu</h4>
                        <div class="underline underline-offset-8 text-2xl font-normal text-darkblue">
                            <div class="flex items-center">
                                <img src={map} alt="icone pour indiquer le lieu" class="mr-4 w-6" />
                                <a href="#">Adresse</a>
                            </div>
                            <div class="flex items-center my-6">
                                <img src={phone} alt="icone pour indiquer le numéro de téléphone" class="mr-4 w-6" />
                                <a href="#">XX XX XX XX XX</a>
                            </div>
                            <div class="flex items-center">
                                <img src={web} alt="icone pour indiquer le lien du site web" class="mr-4 w-6" />
                                <a href="#">http;;;;;</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* REDIRECTION PAGE CONTACT */}
                <p class="text-lg text-darkblue mb-20">Envie de rejoindre notre réseau de partenaires ? <a class="underline" href="/contact">Contacter nous dès maintenant</a></p>

            </div>
        </div>
    )
}

export default Partenaires