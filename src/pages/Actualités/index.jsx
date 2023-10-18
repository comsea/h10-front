import Header from "../../components/Header";
import actualités from "../../asset/Header/actualités.png"
import past from "../../asset/Svg/past.svg";
import before from "../../asset/Svg/before.svg";
import test from "../../asset/test-actu.png";
import down from "../../asset/Svg/down.svg"
import Banderole from "../../components/Banderole ";

const Actualités = () =>{
    return (
        <div>
            <Header title="Quoi de neuf chez H10 ?" text="Retrouvez ici les actualités de notre réseau et de précieuses informations sur les lois et réglementations en vigueur." image={actualités} />
            <Banderole />
            <div class="w-11/12 mx-auto lg:w-10/12">
                <div class="flex flex-col lg:flex-row justify-between mb-12">
                    <div class="text-darkblue flex mx-auto lg:mx-0 text-xl border border-darkblue rounded-lg ">
                        <p class="font-semibold lg:px-7 lg:py-4 px-4 py-2 rounded-l-lg border-darkblue border-r h-full mr-[0,5px] ">Trier par</p>
                        <div class="font-normal flex lg:px-7 lg:py-4 px-4 py-2 rounded-r-lg -darkblue h-full ">
                            <p>Le plus récent</p>
                            <img src={down} alt="" class="w-4 ml-4"/>
                        </div>
                    </div>
                    <div class="flex justify-end lg:justify-normal mt-6 lg:mt-0">
                        {/*faire pagination bouton past/before */}
                        <div class="bg-gray rounded-lg mr-1">
                            <img src={before} alt="icon pour voir la page précédente" class="lg:px-7 lg:py-4 px-4 py-2"/>
                        </div>
                        <div class="bg-white shadow-2xl rounded-lg">
                            <img src={past} alt="icon pour voir la page suivante" class="lg:px-7 lg:py-4 px-4 py-2" />
                        </div>
                    </div>
                </div>
                {/* GRID ACTUALITE */}
               
                <div class="grid-rows-6 grid-cols-3 gap-4 h-full text-2xl mb-12 text-blue font-normal hidden lg:grid">
                    <div id="item-0" class="bg-gray row-start-1 col-start-1 h-full row-end-3 col-end-2 rounded-3xl p-4">
                        <div class="justify-between flex flex-col">
                            <p>XX/XX/XX</p>
                            <div>
                                <p class="text-3xl font-semibold text-black lg:text-4xl mb-8 mt-96">Titre</p>
                                <a href="#" class="hover:text-bluegray duration-200">Voir l’article →</a>
                            </div>
                        </div>
                    </div>
                    <div id="item-1" class="bg-gray row-start-1 col-start-2 row-end-3 col-end-3 rounded-3xl p-10">1</div>
                    <div id="item-2" class="bg-darkblue row-start-1 col-start-3 row-end-2 col-end-4 rounded-3xl p-10">2</div>
                    <div id="item-3" class="bg-darkblue row-start-2 col-start-3 row-end-3 col-end-4 rounded-3xl p-10">3</div>
                    <div id="item-4" class="bg-darkblue row-start-3 col-start-1 row-end-4 col-end-2 rounded-3xl p-10">4</div>
                    <div id="item-5" class="bg-darkblue row-start-4 col-start-1 row-end-5 col-end-2 rounded-3xl p-10">5</div>
                    <div id="item-6" class="bg-gray row-start-3 col-start-2 row-end-5 col-end-4 rounded-3xl p-10">6</div>
                    <div id="item-7" class="bg-gray row-start-5 col-start-1 row-end-7 col-end-2 rounded-3xl p-10">7</div>
                    <div id="item-8" class="bg-darkblue row-start-5 col-start-2 row-end-6 col-end-4 rounded-3xl p-10">8</div>
                    <div id="item-9" class="bg-darkblue row-start-6 col-start-2 row-end-7 col-end-4 rounded-3xl p-10">9</div>
                </div>

                <div class="grid grid-rows-4 lg:hidden grid-cols-1 gap-4 h-full text-2xl mb-12 text-blue font-normal">
                    <div id="item-00" class="bg-gray row-start-1 col-start-1 h-full row-end-3 col-end-2 rounded-3xl p-4">
                        <div class="justify-between flex flex-col">
                            <p>XX/XX/XX</p>
                            <div>
                                <p class="text-3xl font-semibold text-black lg:text-4xl mb-8 mt-96">Titre</p>
                                <a href="#" class="hover:text-bluegray duration-200">Voir l’article →</a>
                            </div>
                        </div>
                    </div>
                    <div id="item-00" class="bg-gray row-start-1 col-start-1 h-full row-end-3 col-end-2 rounded-3xl p-4">
                        <div class="justify-between flex flex-col">
                            <p>XX/XX/XX</p>
                            <div>
                                <p class="text-3xl font-semibold text-black lg:text-4xl mb-8 mt-96">Titre</p>
                                <a href="#" class="hover:text-bluegray duration-200">Voir l’article →</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/*faire pagination */}
                <div class="flex justify-end space-x-1 mb-12">
                    <div class="w-4 h-4 rounded-full bg-darkblue"></div>
                    <div class="w-4 h-4 rounded-full bg-blue"></div>
                    <div class="w-4 h-4 rounded-full bg-blue"></div>
                    <div class="w-4 h-4 rounded-full bg-blue"></div>
                </div>
            </div>
            
        </div>
    )
}

export default Actualités