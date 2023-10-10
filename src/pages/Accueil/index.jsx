import img from "../../asset/homepageh10.png"
import cross from "../../asset/Svg/cross.svg"

// const [button, setButton] = useState([]);

// let handleOpen = 0;

const Accueil = () => {
    return(
        <div class="lg:w-10/12 mx-auto">
            {/* NOS EXPERTISES */}
            <div class="flex justify-center my-16">
                <img src={img} alt="Image d'une comptable entrain de travailler" class="hidden w-1/2 p-4 h-auto lg:flex"/>
                <div class="text-center  lg:text-start lg:w-1/2">
                    <p class="text-darkblue font-extraligth text-2xl lg:text-4xl mb-2 lg:mb-4">Nos expertises</p>
                    <h3 class="text-3xl lg:text-5xl font-semibold">Découvrez nos différentes expertises.</h3>
                        {/* EXPERTISES */}
                    <div class="w-auto mx-1 mt-8 lg:mt-20">
                        <div class="shadow-2xl flex items-center justify-between p-4 rounded-xl bg-white">
                            <h6 class="text-darkblue text-2xl lg:text-3xl font-bold">Conseil</h6>
                            <button oneClick="" class="w-10 h-10 lg:w-14 lg:h-14 bg-ligthblue rounded-xl flex justify-center items-center"><img src={cross} class="w-4 h-auto" alt="icon de croix pour ouvrir les détails de l'expertise" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Accueil