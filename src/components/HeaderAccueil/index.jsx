import { Link } from "react-router-dom"
import bg from "../../asset/bg-hda.png"
import header from "../../asset/header.png"

const HeaderAccueil = () => {
    return(
        <div className="w-full relative text-white flex justify-center mb-44">
            <img src={bg} alt="Background Header Accueil" className="absolute object-cover -z-50 h-full w-full object-top" />
            <div className="pt-40 w-10/12 pb-28 flex justify-between">
                <div className="w-1/3 flex flex-col items-start space-y-8">
                    <h1 className="text-8xl font-bold">Réseau d'expertise comptable</h1>
                    <p className="text-2xl text-[#C3D5DC]">Présent dans les Ardennes, la Marne et l'Aisne.</p>
                    <p>Nous accompagnons les dirigeants dans toutes les décisions qui engagent l’avenir financier de leur organisation.</p>
                    <Link to="/" className="text-sm text-[#C3D5DC]">En savoir plus →</Link>
                    <div className="grid grid-cols-3 gap-x-2 text-center">
                        <div className="flex flex-col items-center space-y-2">
                            <p className="font-bold text-5xl text-[#C3D5DC]">1</p>
                            <p>Réseau</p>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <p className="font-bold text-5xl text-[#C3D5DC]">5</p>
                            <p>Cabinets</p>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <p className="font-bold text-5xl text-[#C3D5DC]">11</p>
                            <p>Experts-comptables</p>
                        </div>
                    </div>
                </div>  
                <div className="w-[60%] relative flex justify-center items-start">
                    <img src={header} alt="Header" className="absolute w-[80%]" />
                </div> 
            </div>
        </div>
    )
}

export default HeaderAccueil