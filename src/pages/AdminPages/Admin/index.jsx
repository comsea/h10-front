import logo from '../../../asset/logo.png'

export const Admin = () => {
    return(
        <div className="w-full h-screen flex justify-center items-center bg-darkblue">
            <div className="bg-white w-[95%] h-[88%] p-6 rounded-3xl flex flex-col justify-center items-center space-y-10">
                <p className='text-5xl font-semibold w-1/2 text-center'>Bienvenue sur le panel administrateur du site réseauh10.fr</p>
                <img src={logo} alt="Logo" className='w-[20%]' />
            </div>
        </div>
    )
}