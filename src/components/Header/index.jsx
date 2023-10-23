import bg from "../../asset/bg-hda.png"

const Header = (headerProps) => {
    return(
        <div className="w-full relative text-white flex justify-center 2xl:mb-44 lg:mb-16">
            <img src={bg} alt="Background Header Accueil" className="absolute object-cover -z-50 h-full w-full object-top" />
            <div className="pt-40 w-10/12 2xl:pb-28 pb-16 flex justify-between">
                <div className="w-[35%] flex flex-col items-start space-y-8">
                    <h1 className="2xl:text-7xl text-5xl font-bold">{headerProps.title}</h1>
                    <p className="2xl:text-2xl text-lg text-[#C3D5DC]">{headerProps.text}</p>
                </div>  
                <div className="w-[60%] relative flex justify-center items-start">
                    <img src={headerProps.image} alt="Header" className="absolute 2xl:w-[70%] w-[80%] rounded-t-full max-h-[430px] object-cover object-center" />
                </div> 
            </div>
        </div>
    )
}

export default Header