import Header from "../../components/Header"
import expertises from "../../asset/Header/expertises.png"
import Expertise from "../../components/Expertise"
const Expertises = () =>{
    return (
        <div>
            <Header title="Un large panel d'expertises" text="Le réseau H10 vous accompagne ! Découvrez dès maintenant toutes nos missions." image={expertises} />
            <div class="w-11/12 lg:w-10/12 text-center mx-auto">
                {/* TABLE CHOICE */}
                <div class="text-darkblue text-3xl font-semibold capitalize duration-200 active:text-black active:underline  focus:text-black focus:underline">
                    test
                </div>
                {/* TABLE CONTENT*/}
                <div class="bg-gray rounded-2xl text-start">
                <Expertise title="test" description="description" />
                </div>
            </div>
        </div>
    )
}

export default Expertises