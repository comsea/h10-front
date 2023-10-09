import bg from "../../asset/bg-hda.png"

const Header = (headerProps) => {
    return(
        <div className="w-full relative text-white flex justify-center mb-44">
            <img src={bg} alt="Background Header Accueil" className="absolute object-cover -z-50 h-full w-full object-top" />
            <div className="pt-40 w-10/12 pb-28 flex justify-between">
                <div className="w-[35%] flex flex-col items-start space-y-8">
                    <h1 className="text-7xl font-bold">{headerProps.title}</h1>
                    <p className="text-2xl text-[#C3D5DC]">{headerProps.text}</p>
                </div>  
                <div className="w-[60%] relative flex justify-center items-start">
                    <img src={headerProps.image} alt="Header" className="absolute w-[70%]" />
                </div> 
            </div>
        </div>
    )
}

export default Header