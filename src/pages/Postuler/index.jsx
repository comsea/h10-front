import Header from "../../components/Header"
import postuler from "../../asset/Header/postuler.png"
import past from "../../asset/Svg/past.svg";
import before from "../../asset/Svg/before.svg";
import test from "../../asset/test-actu.png";
import avion from "../../asset/avion.png"
import cv from "../../asset/Svg/cv.svg"

const Postuler = () => {
    return (
        <div>
            <Header title="Nos offres d’emploi" text="Envie de rejoindre l'aventure H10 ? Consultez nos offres d'emploi ! Si aucune ne correspond à vos attentes, n'hésitez pas à nous soumettre une candidature spontanée ! Toutes sont étudiées." image={postuler} />
            <div class="w-11/12 lg:w-10/12 mx-auto">
                <div class="flex flex-col lg:flex-row justify-between mb-12">
                    <div class="text-white flex mx-auto lg:mx-0 text-xl">
                        <p class="font-semibold lg:px-7 lg:py-4 px-4 py-2 rounded-l-lg bg-darkblue border-r-2 h-full mr-[0,5px] border-white">Cabinet</p>
                        <div class="font-normal flex lg:px-7 lg:py-4 px-4 py-2 rounded-r-lg bg-darkblue h-full ">
                            <p>Tous les cabinets</p>
                            <svg class='w-4 ml-4' viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.44919 1.42196C5.74509 -0.473987 2.98219 -0.473987 1.27808 1.42196C-0.426026 3.31791 -0.426027 6.39185 1.27808 8.2878L18.7326 27.7073C19.551 28.6178 20.6609 29.1293 21.8182 29.1293C22.9755 29.1293 24.0854 28.6178 24.9037 27.7073L42.3583 8.2878C44.0624 6.39185 44.0624 3.31791 42.3583 1.42196C40.6542 -0.473985 37.8913 -0.473986 36.1872 1.42196L21.8182 17.4086L7.44919 1.42196Z" fill="white"/>
                            </svg>
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
                {/* OFFRE D'EMPLOI */}
                <div class="grid grid-cols-1 text-2xl lg:text-3xl grid-rows-4 gap-y-7  lg:grid-cols-2 lg:grid-rows-2 lg:gap-4">
                    {/* faire boucle emploie */}
                    <div class="rounded-3xl shadow-2xl">
                        <img src={test} alt="test" class=" w-full rounded-t-3xl" />
                        <div class="mx-6 py-2">
                            <p class="text-darkblue font-normal">Cabinet FIZALYS</p>
                            <p class="text-3xl lg:text-4xl tracking-widest font-bold capitalize mt-2 mb-4">intitulé du post</p>
                            <p class="font-normal  mb-7">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat</p>
                            <div class="justify-between flex-col lg:flex-row font-normal flex">
                                <p class="text-darkblue font-thin">XX/XX/XXXX</p>
                                <p>Voir l’offre d’emploi →</p>
                            </div>
                        </div>
                    </div>
                 
                </div>
                {/* faire pagination */}
                <div class="flex justify-end space-x-1 mb-12">
                    <div class="w-4 h-4 rounded-full bg-darkblue"></div>
                    <div class="w-4 h-4 rounded-full bg-blue"></div>
                    <div class="w-4 h-4 rounded-full bg-blue"></div>
                    <div class="w-4 h-4 rounded-full bg-blue"></div>
                </div>

                {/* POSTULER FROM */}
                <div class="text-center">
                    <h3 class="text-3xl text-darkblue lg:text-4xl mb-6 ">Envie de postuler à une offre d’emploi ? 
                    <br/>Remplissez dès maintenant notre formulaire de candidature.</h3>
                    <p class="text-bluegray mb-4">Le réseau h10 est impatient d’avoir de nouveaux membres dans ses équipes,
                    <br/>n’hésitez pas à postuler si vous voulez rejoindre l’aventure !</p>
                    
                    {/* faire traitement from */}
                    <form action="" method="POST" class="lg:space-y-4 font-normal lg:w-3/5 mb-20 mx-auto text-xl">
                        <div class="space-y-1">
                            <label for="nom" ></label>
                            <input type="text" id="nom" name="nom" placeholder="Prénom Nom *" class="w-full  bg-gray2 active:border-blue rounded-lg px-8 py-4"/>
                        </div>
                        <div class="space-y-1">
                            <label for="email" ></label>
                            <input type="email" id="email" name="email" placeholder="prenom@nom.fr *" class="w-full lg:w-1/2 bg-gray2 rounded-lg px-8 py-4"/>
                            <label for="phone" ></label>
                            <input type="phone" id="phone" name="phone" placeholder="Téléphone *" class="w-full lg:w-[49%] lg:ml-1 bg-gray2 rounded-lg px-8 py-4"/>
                        </div>
                        <div class="space-y-1">
                            <label for="message" ></label>
                            <textarea id="message" name="message" rows="4" placeholder="Votre message...*" class="w-full  bg-gray2 rounded-lg px-8 py-4"></textarea>
                        </div>
                        <div class="space-y-1 mb-10 lg:mb-0">
                            <label for="post" class="mr-4">Je souhaite postuler pour (factultatif) :</label>
                            <select name="post" id="post" placeholder="Sélectionnez le post à pourvoir*" class=" border border-gray2 text-bluegray bg-white rounded-lg px-4 py-4">
                                <option value="" disabled selected>Sélectionnez le post à pourvoir</option>
                                <option value="option1">Option 1</option>
                            </select>
                        </div>
                        <div class="space-y-1">
                            <label for="cv" class=" border border-gray2  text-bluegray bg-white rounded-lg lg:rounded-none lg:rounded-l-lg px-4 py-4">Veuillez insérer votre CV*</label>
                            <input type="file" name="cv" id="cv" class=" border border-gray2 text-bluegray bg-gray2 text-sm lg:text-xl rounded-lg lg:rounded-none lg:rounded-r-lg px-4 py-3" placeholder="{cv}Sélectionner un fichier"/>
                        </div>
                        <p class="text-sm font-normal my-12 text-bluegray">*Curriculum Vitae, si vous n’en possédez pas votre candidature ne sera pas envoyée</p>
                        <div class="w-full flex justify-center">
                            <button type="submit" class="bg-darkblue flex items-center text-white font-normal py-4 px-8 rounded-lg hover:bg-blue transition duration-300">
                            <img src={avion} alt="icon pour envoyer le formulaire" class="mr-3" />Envoyer ma candidature</button>
                        </div>    
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default Postuler