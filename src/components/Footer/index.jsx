import bg from "../../asset/bg-footer.png"
import logo from "../../asset/logob.png"

const Footer = () => {
    return(
        <div className="w-full h-full relative py-10 px-8 text-white flex justify-center items-centerx">
            <img src={bg} alt="Background Footer" className="absolute top-0 left-0 object-cover -z-10 w-full h-full" />
            <div className="flex flex-col justify-center items-center w-11/12 space-y-10">
                <div className="w-5/6 grid grid-cols-4 gap-x-8">
                    <div className="w-full flex justify-center items-center">
                        <img src={logo} alt="Logo Blanc" className="w-[200px]" />
                    </div>
                    <div className="w-full flex flex-col items-start justify-start space-y-4">
                        <p className="font-medium">Expertises</p>
                        <div className="w-full grid grid-cols-2 text-[#C3D5DC] text-sm gap-4">
                            <p>Création d'entreprise</p>
                            <p>Audit</p>
                            <p>Gestion de patrimoine</p>
                            <p>Conseils</p>
                            <p>Droits des sociétes</p>
                            <p>Fiscalité</p>
                            <p>Gestion sociale & paye</p>
                            <p>Comptabilités</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-start justify-start space-y-4">
                        <p className="font-medium">Qui sommes-nous ?</p>
                        <p className="font-medium">Metions légales</p>
                        <p className="font-medium">Politiques de confidentialité</p>
                        <p className="text-[#C3D5DC] text-sm">Modifier les cookies</p>
                    </div>
                    <div className="w-full flex flex-col items-start justify-start space-y-4">
                        <p className="font-medium">Réseaux sociaux</p>
                    </div>
                </div>
                <div className="flex text-center justify-center items-center text-[#C3D5DC] text-sm w-5/6">
                    <p>H10 réseau - Réseau d’expert-comptable dans l’Ainse, les Ardennes et la Marne - 06 06 06 06 06 – Siège sociale situé au 6 Boulevard des écossais, 08200 Sedan</p>
                </div>
                <div className="flex text-center justify-center items-center text-sm w-5/6">
                    <p>Tout droits réserves © 2023 Copyright: COMSEA</p>
                </div>
            </div>
        </div>
    )
}

export default Footer