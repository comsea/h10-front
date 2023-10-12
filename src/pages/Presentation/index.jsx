import Header from "../../components/Header";
import presentation from "../../asset/Header/presentation.png";
import logo from "../../asset/logo_h10.png";
import carte from "../../asset/carte.png";
import particulier from "../../asset/particluier.png";
import professionnel from "../../asset/professionnel.png";
import down from "../../asset/Svg/down.svg";
import mockup from "../../asset/mockup.png";
import proximite from "../../asset/proximité.png";
import independance from "../../asset/indépendance.png";
import security from "../../asset/security.png";
import past from "../../asset/Svg/past.svg"
import before from "../../asset/Svg/before.svg"
import test from "../../asset/test.png"

const Presentation = () => {
    
    return(
        <div>
            <Header title="Qui sommes-nous ?" text="Découvrez notre formidable équipe !" image={presentation} />
            <div class="w-11/12 mx-auto text-center items-center lg:text-start lg:w-10/12 flex flex-col lg:flex-row">
                <div class="font-thin lg:w-3/5 lg:mb-12">
                    <p class="text-darkblue font-normal text-2xl lg:text-4xl mb-2 lg:mb-4">Notre histoire</p>
                    <h1 class="text-3xl lg:text-5xl font-semibold">Qu'est ce que le <span class="text-darkblue">Réseau H10</span></h1>
                    <p class="mt-8 lg:mt-12">
                        Mutualisant les compétences complémentaires de plus de 100 collaborateurs, le réseau H10 bénéficie d’une <strong>expertise </strong> forte et unique en matière <strong>comptable, sociale, fiscale et juridique </strong> dans la région.
                        Ses domaines d’intervention concernent aussi bien les TPE (artisans, commerçants, professions libérales, agriculteurs, viticulteurs, industriels) que les PMI-PME ou les grands groupes, dans un objectif de développement régional, national voire international.
                    </p>
                    <p class="my-6">
                        Outre les démarches réglementaires des entreprises, le réseau H10 accompagne ses clients dans leur réflexion relative au contexte social et économique actuel, aux actualités inhérentes à la société, à <strong>l’optimisation des résultats</strong>, aux perspectives de déploiement. Il pioche dans les meilleures solutions proposées par chaque cabinet afin de proposer un conseil sur-mesure.
                    </p>
                    <p>
                        Conjuguant le dynamisme du réseau à l’agilité de cabinets indépendants, H10 est à l’avant-garde des évolutions du métier d’expert-comptable dans son fonctionnement et intègre naturellement les nouveaux process de digitalisation et de cybersécurité.
                    </p>
                </div>
                <div class="lg:w-2/5 flex justify-end lg:mb-0 mb-10">
                    <img src={logo} class="lg:w-2/3 h-auto" alt="Logo du Réseau H10" />
                </div>
            </div>

            {/* SECTEUR D'ACTIVITÉ */}
            <div class="bg-darkblue py-10 text-white w-full h-auto font-semibold text-center lg:text-start">
                <div class="w-11/12 lg:w-10/12 mx-auto flex items-center flex-col lg:flex-row-reverse">
                    <div class="lg:w-3/5 lg:pl-8 xl:pl-32">
                        <p class="text-blue font-normal text-2xl lg:text-4xl mb-2">Notre secteur d'activités</p>
                        <h3 class="text-3xl lg:text-5xl font-semibold mb-12">Où sommes-nous ?</h3>
                        <div class="lg:text-3xl text-xl xl:text-4xl uppercase tracking-widest">
                            <p class=""><span class="text-blue">7</span>Agence dans les Ardennes</p>
                            <p class="my-6"><span class="text-blue">3</span>Agence dans la Marne</p>
                            <p class=""><span class="text-blue">1</span>Agence dans l'Aisne</p>
                        </div>
                    </div>
                    <div class="lg:w-2/5 mx-auto ">
                        <img src={carte} alt="carte indiquant les différents cabinets d'experts comptable du réseau h10" />
                    </div>
                </div>
            </div>

            {/* CLIENTÈLE */}
            <div class="w-11/12 lg:w-10/12 text-black text-center mx-auto py-10">
                <p class="text-darkblue font-normal text-2xl lg:text-4xl mb-2">Notre clientèle</p>
                <h3 class="text-3xl lg:text-5xl font-semibold mb-12">À travers nos différents métiers, <span class="text-darkblue">H10 vous accompagne</span></h3>
                <div class="flex flex-col lg:flex-row">
                    <div class="flex flex-col lg:w-1/2 items-center">
                        <img src={particulier} alt="icon représentant un particulier" class="w-1/3"/>
                        <p class="uppercase tracking-widest text-2xl lg:text-4xl text-darkblue font-semibold my-2">Particulier</p>
                        <p class="font-normal text-xl xl:text-4xl mt-2 leading-relaxed">
                            Pour les particuliers dans leurs<br></br> obligations  fiscales et dans la  <br></br>gestion de leur patrimoine
                        </p>
                    </div>
                    <div class="flex flex-col lg:w-1/2 items-center mt-4 lg:mt-0">
                        <img src={professionnel} alt="icon représentant un particulier" class="w-1/3"/>
                        <p class="uppercase tracking-widest text-2xl lg:text-4xl text-darkblue font-semibold my-2">Professionnel</p>
                        <p class="font-normal text-xl xl:text-4xl mt-2 leading-relaxed mb-4">
                        Pour les professionnels dans leurs<br></br>obligations comptables, fiscales,<br></br>  juridiques et sociales. Il prodigue...
                        </p>
                        {/* faire drop down */}
                        <img src={down} class="w-4" alt="icon pour voir plus de texte" />
                    </div>
                </div>
            </div>

            {/* VALEURS ET RAISON D'ÊTRE */}
            <div class="bg-gray py-10">
                <div class="w-11/12 lg:w-10/12 mx-auto text-center lg:text-start">
                    <p class="text-darkblue font-normal text-2xl lg:text-4xl mb-2">Nos valeurs et raisons d'être</p>
                    <h3 class="text-3xl lg:text-5xl font-semibold mb-12">Quelles sont les <span class="text-darkblue"> valeurs </span> et <span class="text-darkblue"> raisons d'être</span>de Réseau H10 ?</h3>
                    <div class="w-9/12 mx-auto items-center flex flex-col lg:flex-row text-xl lg:text-2xl uppercase tracking-widest text-darkblue">
                        <div class="bg-white lg:w-1/3 rounded-t-full h-auto flex flex-col items-center justify-end pb-6">
                            <img src={proximite} class="w-1/2 mt-20 mb-6" alt="Illustration représentant la proximité" />
                            Proximité
                        </div>
                        <div class="bg-white lg:mx-16 lg:w-1/3 rounded-t-full h-auto flex flex-col items-center justify-end my-12 pb-6">
                            <img src={security} class="w-1/2 mt-20 mb-6" alt="Illustration représentant la sécurité" />
                            Sécurité
                        </div>
                        <div class="bg-white lg:w-1/3 rounded-t-full h-auto flex flex-col items-center justify-end pb-6">
                            <img src={independance} class="w-1/2 mt-20 mb-6" alt="Illustration représentant la proximité" />
                            Indépendance
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* ÉQUIPE */}
            <div class="bg-darkblue text-center">
                <div class="w-11/12 lg:w-10/12 text-white py-10 mx-auto">
                    <p class=" font-normal text-2xl lg:text-4xl mb-2">Notre équipe</p>
                    <h3 class="text-3xl lg:text-5xl font-semibold mb-8"><span class="text-blue">Découvrez l'entièreté</span>du réseau H10</h3>
                    <p class="lg:w-1/2 xl:1/3 2xl:w-3/5 mx-auto text-2xl">Composé d’une centaine de collaborateurs, le réseau H10 compte 
                        <i>11</i> experts-comptables dont 
                        <i>5</i> 
                        <span class="font-bold text-blue">Commissaires aux Comptes.</span> 
                        <br></br>Il emploie un  
                        <span class="font-bold text-blue">avocat fiscaliste</span> dédié 
                        <i> aux montages complexes et à l’accompagnement des contrôles fiscaux</i>, 
                        et des profils de juristes <i>qualifiés</i> en droits des sociétés.
                    </p>
                    {/* employé */}
                    <div class="flex justify-end mt-16 mb-10">
                        {/* pagination bouton past/before */}
                        <div class="bg-gray rounded-lg mr-1">
                            <img src={before} alt="icon pour voir la page précédente" class="px-7 py-4"/>
                        </div>
                        <div class="bg-white shadow-2xl rounded-lg">
                            <img src={past} alt="icon pour voir la page suivante" class="px-7 py-4"/>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 grid-rows-3 gap-3 text-start text-darkblue text-2xl font-normal">
                        {/* faire boucle employé */}
                        <div class="rounded-2xl bg-white">
                            <img src={test} alt="photo de l'employé TEST" class="w-full h-auto rounded-t-2xl" />
                            <div class="ml-5 my-5">
                                <p class="uppercase leading-normal font-semibold">PRENOM NOM</p>
                                <p>Entreprise</p>
                                <p>rôle dans l'entreprise</p>
                                <p>prénom@nom.fr</p>
                            </div>
                        </div>
                        
                    </div>
                    {/* pagination */}
                    <div class="flex justify-end space-x-1">
                        <div class="w-4 h-4 rounded-full bg-blue"></div>
                        <div class="w-4 h-4 rounded-full bg-white"></div>
                        <div class="w-4 h-4 rounded-full bg-white"></div>
                        <div class="w-4 h-4 rounded-full bg-white"></div>
                    </div>
                </div>
            </div>

            {/* UNION SECTION */}
            <div class="w-11/12 lg:w-7/12 mx-auto flex-col lg:flex-row flex text-center lg:text-start py-10">
                <div class="lg:w-2/5">
                    <p class="text-darkblue font-normal text-2xl lg:text-4xl mb-2">Notre visibilité</p>
                    <h3 class="text-3xl lg:text-5xl text-darkblue font-semibold mb-12">On parle de <span class="text-black">nous !</span></h3>
                    <p class="text-2xl font-normal mb-10 leading-relaxed lg:text-3xl">Retrouver dès maintenant l’article 
                        <br></br> de presse du journal 
                        <span class="text-red-600">l’Union </span>
                        <br></br>à propos de notre 
                        <span class="text-darkblue">réseau H10 </span>!
                    </p>
                    <a class="text-red-600 duration-200 trans hover:text-red-400" href="https://www.lunion.fr/id471709/article/2023-04-03/six-cabinets-dexpertise-comptable-de-laisne-de-la-marne-et-des-ardennes-sous-une" target="_blank">Voir l'article de l'Union →</a>
                </div>
                <div class="lg:w-3/5 mx-auto">
                    <img src={mockup} class=" mx-auto" alt="Image de l'article de l'union sur le réseau H10 sur un téléphone" />
                </div>
             </div>

        </div>
                    
        
    )
}

export default Presentation