import { Link } from "react-router-dom"
import bg from "../../asset/bg-hda.png"
import header from "../../asset/header.png"

const HeaderAccueil = () => {
    return(
        <div className="w-full relative text-white flex justify-center 2xl:mb-32 lg:mb-16">
            <img src={bg} alt="Background Header Accueil" className="absolute object-cover -z-50 h-full w-full object-top" />
            <div className="pt-40 w-10/12 2xl:pb-10 pb-16 flex justify-between">
                <div className="w-full lg:w-[36%] flex flex-col lg:items-start items-center 2xl:space-y-8 space-y-3 text-center lg:text-start">
                    <h1 className="2xl:text-8xl text-6xl font-bold">Réseau d'expertise comptable</h1>
                    <p className="2xl:text-2xl text-lg text-[#C3D5DC] text-justify">Présent dans les Ardennes, la Marne et l'Aisne.</p>
                    <p className=" text-justify">Nous accompagnons les dirigeants dans toutes les décisions qui engagent l'avenir financier de leur société et les particuliers dans la gestion de leur patrimoine privé.</p>
                    <Link to="presentation" className="text-sm text-[#C3D5DC]">En savoir plus →</Link>
                    <div className="grid grid-cols-4 gap-x-2 text-center w-full">
                        <div className="flex flex-col items-center space-y-2">
                            <p className="font-bold 2xl:text-5xl text-3xl text-[#C3D5DC]">1</p>
                            <p>Réseau</p>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <p className="font-bold 2xl:text-5xl text-3xl text-[#C3D5DC]">5</p>
                            <p>Cabinets</p>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <p className="font-bold 2xl:text-5xl text-3xl text-[#C3D5DC]">11</p>
                            <p>Experts-comptables</p>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <p className="font-bold 2xl:text-5xl text-3xl text-[#C3D5DC]">+ 100</p>
                            <p>Collaborateurs</p>
                        </div>
                    </div>
                </div>  
                <div className="w-[60%] relative hidden lg:flex justify-center items-start">
                    <img src={header} alt="Header" className="absolute xl:w-[80%] w-[95%]" />
                </div> 
            </div>
        </div>
    )
}

export default HeaderAccueil