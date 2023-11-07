import bg from "../../asset/bg-hda.png"

const Header = (headerProps) => {
    return(
        <div className="w-full relative text-white flex justify-center 2xl:mb-44 lg:mb-16">
            <img src={bg} alt="Background Header Accueil" className="absolute object-cover -z-50 h-full w-full object-top" />
            <div className="pt-40 w-10/12 lg:pb-28 pb-16 flex justify-between">
                <div className="w-full lg:w-[45%] flex flex-col lg:items-start items-center space-y-8 text-center lg:text-start">
                    <h1 className="2xl:text-7xl lg:text-5xl text-4xl font-bold">{headerProps.title}</h1>
                    <p className="2xl:text-2xl text-lg text-[#C3D5DC]">{headerProps.text}</p>
                </div>  
                <div className="w-[50%] relative hidden lg:flex justify-center items-start">
                    <img src={headerProps.image} alt="Header" className="absolute 2xl:w-[70%] w-[90%] rounded-t-full max-h-[400px] object-cover object-center 2xl:-bottom-[200px] lg:-bottom-[150px]" />
                </div> 
            </div>
        </div>
    )
}

export default Header