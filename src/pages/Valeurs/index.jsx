import Header from "../../components/Header"
import valeurs from "../../asset/Header/valeurs.png"
import Banderole from "../../components/Banderole "
import perso from "../../asset/Valeurs/perso.png"
import muta from "../../asset/Valeurs/muta.png"
import full from "../../asset/Valeurs/360.png"
import formation from "../../asset/Valeurs/formation.png"
import comptes from "../../asset/Valeurs/comptes.png"
import list from "../../asset/Valeurs/list.png"

const Valeurs = () =>{
    return(
        <div>
            <Header title="Un réseau créateur de valeur" text="La synergie des compétences pour une prestation complète et sur-mesure." image={valeurs} />
            <Banderole />
            <div class="w-11/12 mx-auto font-normal text-center lg:text-start lg:w-10/12 2xl:text-2xl lg:text-base">
                <div class="flex items-center flex-col justify-between lg:flex-row mb-32">
                    <div class ="lg:w-2/3 space-y-6">
                        <h3 class="text-3xl 2xl:text-5xl mx-auto lg:mx-0 font-semibold w-[80%]"><span className="text-darkblue">Notre</span> accompagnement personnalisé</h3>
                        <p>Pour chaque client, le réseau H10 propose une approche pluridisciplinaire et un accompagnement personnalisé encadrés par une lettre de mission définissant précisément son intervention et ses honoraires.</p>
                        <p>Ses actions sont engagées dans le respect des valeurs communes d’humanité, de proximité et de confiance qui lient les cabinets du réseau H10.</p>
                        <p>Dans une vision moderne du métier d’expert-comptable, le réseau H10 anticipe les besoins de réactivité et de simplicité des entreprises par des solutions digitalisées et la mise en œuvre de missions élargies aux évolutions de notre époque comme la cyberprévention ou la transition écologique.</p>
                    </div>
                    <div class="lg:w-[30%] my-6 lg:my-0 flex justify-center items-center">
                        <div class="bg-gray duration-200 items-center rounded-t-full">
                            <img src={perso} class="mx-auto w-2/3 lg:pt-6 2xl:pt-16" alt="Illustration" />
                        </div>
                    </div>
                </div>

                <div class="flex items-center lg:text-end flex-col justify-between lg:flex-row-reverse mb-32">
                    <div class ="lg:w-2/3 flex justify-end flex-col items-end space-y-6">
                        <h3 class="text-3xl 2xl:text-5xl mx-auto lg:mx-0 font-semibold w-[80%]"><span className="text-darkblue">La mutualisation</span> des compétences techniques et humaines</h3>
                        <p className="lg:text-start">Par la mutualisation des compétences et des ressources de 6 cabinets d’expertise-comptable, le réseau H10 développe des capacités humaines, logistiques et informatiques équivalentes à celles des grandes structures comptables, tout en conservant l’indépendance de chaque cabinet pour le conseil de ses clients.</p>
                        <p className="lg:text-start">Organisé en pôles d’expertise et utilisant des logiciels de gestion transversaux, le réseau H10 facilite l’échange d’idées et d’informations dans le respect du code déontologique de la profession obligeant indépendance et confidentialité.</p>
                        <p className="lg:text-start">Comptant des Commissaires aux Comptes et un avocat fiscaliste parmi les équipes, l’ensemble des cabinets du réseau H10 bénéficient d’une expertise en audit légal et d’un conseil sur-mesure en droit fiscal et droit des sociétés.</p>
                    </div>
                    <div class="lg:w-[30%] my-6 lg:my-0 flex justify-center items-center">
                        <div class="bg-gray duration-200 items-center rounded-t-full">
                            <img src={muta} class="mx-auto w-2/3 lg:pt-6 2xl:pt-16" alt="Illustration" />
                        </div>
                    </div>
                </div>

                <div class="flex items-center flex-col justify-between lg:flex-row mb-32">
                    <div class ="lg:w-2/3 space-y-6">
                        <h3 class="text-3xl 2xl:text-5xl font-semibold"><span className="text-darkblue">Le Full service :</span> une offre 360°</h3>
                        <p>En phase avec l’évolution de son métier d’expertise-comptable, le réseau H10 ne se cantonne plus seulement à des missions exécutives : il devient créateur de valeur ajoutée pour les entreprises. À cet égard, il a élaboré une gamme de services complète englobant l’ensemble des besoins des sociétés, dite « Full Services ».</p>
                        <p>Cette prestation sur-mesure est conçue à la suite d’un état des lieux précis de l’entreprise : stratégie, attentes et perspectives. Elle concerne à la fois des missions comptables, juridiques, fiscales ou sociales, mais aussi des missions de développement : formations, RSE, transition numérique, etc.</p>
                        <p>Cette démarche entend non seulement décharger le dirigeant de l’intégralité de ses contraintes administratives (y compris en matière de facturation et de recouvrement amiable des créances clients depuis la loi PACTE du 22 mai 2019), mais également favoriser la croissance de l’entreprise.</p>
                    </div>
                    <div class="lg:w-[30%] my-6 lg:my-0 ">
                        <div class="bg-gray duration-200 flex justify-centeritems-center rounded-t-full">
                            <img src={full} class="mx-auto w-2/3 lg:pt-6 2xl:pt-16" alt="Illustration" />
                        </div>
                    </div>
                </div>

                <div class="flex items-center lg:text-end flex-col justify-between lg:flex-row-reverse mb-32">
                    <div class ="lg:w-2/3 flex justify-end flex-col items-end space-y-6">
                        <h3 class="text-3xl 2xl:text-5xl font-semibold mx-auto lg:mx-0 w-[80%]"><span className="text-darkblue">Notre</span> pôle de formation</h3>
                        <p className="lg:text-start">Baptisé E-Form@ction, le réseau H10 dispose d’un pôle de formation en comptabilité générale qui propose des modules pour aider les entreprises à gagner en autonomie et travailler plus efficacement avec leur expert-comptable.</p>
                        <p className="lg:text-start">Nous ne nous axons pas seulement sur la comptabilité mais aussi sur tous les domaines qui y sont liés tels que l’administratif et la logistique.</p>
                    </div>
                    <div class="lg:w-[30%] my-6 lg:my-0 flex justify-center items-center">
                        <div class="bg-gray duration-200 items-center rounded-t-full">
                            <img src={formation} class="mx-auto w-2/3 lg:pt-6 2xl:pt-16" alt="Illustration" />
                        </div>
                    </div>
                </div>

                <div class="flex items-center flex-col justify-between lg:flex-row mb-32">
                    <div class ="lg:w-2/3 space-y-6">
                        <h3 class="text-3xl 2xl:text-5xl font-semibold"><span className="text-darkblue">Notre société</span> de commissarit aux comptes</h3>
                        <p>Comfiducé est une société de commissariat aux comptes certifiant les comptes (consolidés ou non) de toutes tailles d’entreprises dans le cadre d’audits légaux.</p>
                        <p>Dépendant de la cour d’appel de Reims, nos Commissaires aux Comptes sont des professionnels indépendants, externes à l’entreprise, nommés par celle-ci pour une durée 6 ans (ou 3 dans le cas de la mission ALPE pour les petits groupes).</p>
                        <div className="w-full flex flex-col space-y-4">
                            <p>Un Commissaire aux Comptes intervient de façon permanente auprès de sociétés qui le mandate pour des missions bien définies :</p>
                            <div className="flex flex-col space-y-2 ml-8">
                                <div className="flex flex-row justify-start items-center space-x-4">
                                    <img src={list} alt="Ckeck" className="w-[20px]" />
                                    <p>Contrôle interne de la société</p>
                                </div>
                                <div className="flex flex-row justify-start items-center space-x-4">
                                    <img src={list} alt="Ckeck" className="w-[20px]" />
                                    <p>Régularité des opérations juridiques et fiscales</p>
                                </div>
                                <div className="flex flex-row justify-start items-center space-x-4">
                                    <img src={list} alt="Ckeck" className="w-[20px]" />
                                    <p>Rédaction d’un rapport des comptes annuels signalant les irrégularités, présenté en Assemblée Générale et déposé au greffe</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-[30%] my-6 lg:my-0 ">
                        <div class="bg-gray duration-200 flex justify-centeritems-center rounded-t-full">
                            <img src={comptes} class="mx-auto w-2/3 lg:pt-6 2xl:pt-16" alt="Illustration" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Valeurs