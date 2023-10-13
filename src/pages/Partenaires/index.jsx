import Header from "../../components/Header"
import partenaires from "../../asset/Header/partenaires.png"
import ficom from "../../asset/Cabinets/couleur/ficom.svg"
import actualys from "../../asset/Cabinets/couleur/actualys.svg"
import fizalys from "../../asset/Cabinets/couleur/fizalys.svg"
import cwa from "../../asset/Cabinets/couleur/cwa.svg"
import hmc from "../../asset/Cabinets/couleur/hmc.svg"
import { Link } from "react-router-dom"
import Cabinet from "../../components/Cabinet"

const Partenaires = () => {
    

    return(
        <div>
            <Header title="Un réseau en partenariat" text="H10 regroupe 6 cabinets d'expertise-comptables et plus de 100 collaborateurs." image={partenaires}/>
            <div class="w-11/12 lg:w-10/12 text-center mx-auto">
                {/* TABLE NAV */}
                <div class="bg-gray px-4 py-2 rounded-3xl">
                    <div class="w-4/5 mx-auto flex items-center">
                        <div class="hover:bg-blue w-1/3 duration-200 items-center rounded-t-full">
                            <img src={ficom} class="mx-auto w-80 py-10 hover:grayscale" alt="logo du cabinet ficom" />
                        </div>
                        <div class="hover:bg-blue w-1/3 duration-200 rounded-t-full lg:mx-12">
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
                <Cabinet title="titre" description="description" location="cabinet sedan" address="adresse" website="www" phone="06 06 06 06 06" />
                </div>

                {/* REDIRECTION PAGE CONTACT */}
                <p class="text-lg text-darkblue mb-20">Envie de rejoindre notre réseau de partenaires ? <a class="underline" href="/contact">Contacter nous dès maintenant</a></p>

            </div>
            
        </div>
    );
    
}

export default Partenaires