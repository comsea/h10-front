import Header from "../../components/Header"
import valeurs from "../../asset/Header/valeurs.png"

const Valeurs = () =>{
    return(
        <div>
            <Header title="Un réseau créateur de valeur" text="La synergie des compétences pour une prestation complète et sur-mesure." image={valeurs} />
            <div class="w-11/12 mx-auto font-normal text-center lg:text-start lg:w-10/12 text-2xl">
                <div class="flex items-center flex-col lg:flex-row mb-20">
                    <div class ="lg:w-2/3">
                        <h3 class="text-3xl text-darkblue lg:text-5xl mb-6 font-semibold">Titre</h3>
                        <p>Descrption</p>
                    </div>
                    <div class="lg:w-1/3 my-6 lg:my-0 ">
                        <div class="bg-gray duration-200 items-center rounded-t-full">
                            <img src="" class="mx-auto w-1/2 lg:pt-6 2xl:pt-16" alt="Illustration" />
                        </div>
                    </div>
                </div>

                <div class="flex items-center lg:text-end flex-col lg:flex-row-reverse mb-20">
                    <div class ="lg:w-2/3">
                        <h3 class="text-3xl text-darkblue lg:text-5xl mb-6 font-semibold">Titre</h3>
                        <p>Descrption</p>
                    </div>
                    <div class="lg:w-1/3 my-6 lg:my-0 ">
                        <div class="bg-gray duration-200 items-center rounded-t-full">
                            <img src="" class="mx-auto w-1/2 lg:pt-6 2xl:pt-16" alt="Illustration" />
                        </div>
                    </div>
                </div>

                <div class="flex items-center flex-col lg:flex-row mb-20">
                    <div class ="lg:w-2/3">
                        <h3 class="text-3xl text-darkblue lg:text-5xl mb-6 font-semibold">Titre</h3>
                        <p>Descrption</p>
                    </div>
                    <div class="lg:w-1/3 my-6 lg:my-0 ">
                        <div class="bg-gray duration-200 items-center rounded-t-full">
                            <img src="" class="mx-auto w-1/2 lg:pt-6 2xl:pt-16" alt="Illustration" />
                        </div>
                    </div>
                </div>

                <div class="flex items-center lg:text-end flex-col lg:flex-row-reverse mb-20">
                    <div class ="lg:w-2/3">
                        <h3 class="text-3xl text-darkblue lg:text-5xl mb-6 font-semibold">Titre</h3>
                        <p>Descrption</p>
                    </div>
                    <div class="lg:w-1/3 my-6 lg:my-0 ">
                        <div class="bg-gray duration-200 items-center rounded-t-full">
                            <img src="" class="mx-auto w-1/2 lg:pt-6 2xl:pt-16" alt="Illustration" />
                        </div>
                    </div>
                </div>

                <div class="flex items-center flex-col lg:flex-row mb-20">
                    <div class ="lg:w-2/3">
                        <h3 class="text-3xl text-darkblue lg:text-5xl mb-6 font-semibold">Titre</h3>
                        <p>Descrption</p>
                    </div>
                    <div class="lg:w-1/3 my-6 lg:my-0 ">
                        <div class="bg-gray duration-200 items-center rounded-t-full">
                            <img src="" class="mx-auto w-1/2 lg:pt-6 2xl:pt-16" alt="Illustration" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Valeurs