import Header from "../../components/Header"
import valeurs from "../../asset/Header/valeurs.png"
import Banderole from "../../components/Banderole "
import perso from "../../asset/Valeurs/perso.png"
import muta from "../../asset/Valeurs/muta.png"
import full from "../../asset/Valeurs/360.png"
import formation from "../../asset/Valeurs/formation.png"
import comptes from "../../asset/Valeurs/comptes.png"
import list from "../../asset/Valeurs/list.png"
import { Helmet } from 'react-helmet';

const Valeurs = () =>{
    return(
        <div>
            <Helmet>
                <title>Un réseau de valeur ! | Réseau H10</title>
            </Helmet>
            <Header title="Un réseau créateur de valeur" text="La synergie des compétences pour une prestation complète et sur-mesure." image={valeurs} />
            <Banderole />
            <div class="w-11/12 mx-auto font-normal text-center lg:text-start lg:w-10/12 2xl:text-2xl lg:text-base">
                <div class="flex items-center flex-col justify-between lg:flex-row mb-32">
                    <div class ="lg:w-2/3 space-y-6">
                        <h3 class="text-3xl 2xl:text-5xl mx-auto lg:mx-0 font-semibold w-[80%]"><span className="text-darkblue">Notre</span> accompagnement personnalisé</h3>
                        <p className="text-justify">Pour chaque client, le réseau H10 propose une approche pluridisciplinaire et un accompagnement personnalisé encadrés par une lettre de mission définissant précisément son intervention et ses honoraires.</p>
                        <p className="text-justify">Ses actions sont engagées dans le respect des valeurs communes d’humanité, de proximité et de confiance qui lient les cabinets du réseau H10.</p>
                        <p className="text-justify">Dans une vision moderne du métier d’expert-comptable, le réseau H10 anticipe les besoins de réactivité et de simplicité des entreprises par des solutions digitalisées et la mise en œuvre de missions élargies aux évolutions de notre époque comme la cyberprévention ou la transition écologique.</p>
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
                        <p className="text-justify">Par la mutualisation des compétences et des ressources de 5 cabinets d’expertise-comptable, le réseau H10 développe des capacités humaines, logistiques et informatiques équivalentes à celles des grandes structures comptables, tout en conservant l’indépendance de chaque cabinet pour le conseil de ses clients.</p>
                        <p className="text-justify">Organisé en pôles d’expertise et utilisant des logiciels de gestion transversaux, le réseau H10 facilite l’échange d’idées et d’informations dans le respect du code déontologique de la profession obligeant indépendance et confidentialité.</p>
                        <p className="text-justify">Comptant des Commissaires aux Comptes et un avocat fiscaliste parmi les équipes, l’ensemble des cabinets du réseau H10 bénéficient d’une expertise en audit légal et d’un conseil sur-mesure en droit fiscal et droit des sociétés.</p>
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
                        <p className="text-justify">En phase avec l’évolution de son métier d’expertise-comptable, le réseau H10 ne se cantonne plus seulement à des missions exécutives : il devient créateur de valeur ajoutée pour les entreprises. À cet égard, il a élaboré une gamme de services complète englobant l’ensemble des besoins des sociétés, dite « Full Services ».</p>
                        <p className="text-justify">Cette prestation sur-mesure est conçue à la suite d’un état des lieux précis de l’entreprise : stratégie, attentes et perspectives. Elle concerne à la fois des missions comptables, juridiques, fiscales ou sociales, mais aussi des missions de développement : formations, RSE, transition numérique, etc.</p>
                        <p className="text-justify">Cette démarche entend non seulement décharger le dirigeant de l’intégralité de ses contraintes administratives (y compris en matière de facturation et de recouvrement amiable des créances clients depuis la loi PACTE du 22 mai 2019), mais également favoriser la croissance de l’entreprise.</p>
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
                        <p className="text-justify">Créé en janvier 2024, H10 Formation est un organisme de formation déployé dans les Ardennes, l’Aisne et la Marne. Certifié Qualiopi, H10 Formation souhaite apporter une réponse, en local, aux enjeux de recrutement et de montée en compétences des collaborateurs, rencontrés par de nombreux chefs d’entreprise régionaux.</p>
                        <p className="text-justify">Grâce à notre réseau, H10 Formation bénéficie d’une compréhension de la stratégie des entreprises qui lui permet de construire une offre de formations en adéquation avec la réalité.</p>
                        <p className="text-justify">Nos formations couvrent les domaines allant du RH, au développement personnel en passant par le digital.</p>
                        <a href="https://h10formation.fr/" target="_blank" rel="noreferrer" className="text-justify text-darkblue hover:underline">Consulter le site internet</a>
                    </div>
                    <div class="lg:w-[30%] my-6 lg:my-0 flex justify-center items-center">
                        <div class="bg-gray duration-200 items-center rounded-t-full">
                            <img src={formation} class="mx-auto w-2/3 lg:pt-6 2xl:pt-16" alt="Illustration" />
                        </div>
                    </div>
                </div>

                <div class="flex items-center flex-col justify-between lg:flex-row mb-32">
                    <div class ="lg:w-2/3 space-y-6">
                        <h3 class="text-3xl 2xl:text-5xl font-semibold"><span className="text-darkblue">Notre société</span> de commissariat aux comptes</h3>
                        <p className="text-justify">Comfiducé est une société de « commissariat » aux comptes certifiant les comptes (consolidés ou non) de toutes tailles d’entreprises dans le cadre d’audits légaux.</p>
                        <p className="text-justify">Dépendant de la cour d’appel de Reims, nos Commissaires aux Comptes sont des professionnels indépendants, externes à l’entreprise, nommés par celle-ci pour une durée 6 ans (ou 3 dans le cas de la mission ALPE pour les petits groupes).</p>
                        <div className="w-full flex flex-col space-y-4">
                            <p className="text-justify">Un Commissaire aux Comptes intervient de façon permanente auprès de sociétés qui le mandate pour des missions bien définies :</p>
                            <div className="flex flex-col space-y-2 ml-8">
                                <div className="flex flex-row justify-start items-start space-x-4">
                                    <img src={list} alt="Ckeck" className="w-[20px] pt-2" />
                                    <p className="text-justify">Contrôle interne de la société</p>
                                </div>
                                <div className="flex flex-row justify-start items-start space-x-4">
                                    <img src={list} alt="Ckeck" className="w-[20px]" />
                                    <p className="text-justify">Régularité des opérations juridiques et fiscales</p>
                                </div>
                                <div className="flex flex-row justify-start items-start space-x-4">
                                    <img src={list} alt="Ckeck" className="w-[20px]" />
                                    <p className="text-justify">Rédaction d’un rapport des comptes annuels signalant les irrégularités, présenté en Assemblée Générale et déposé au greffe</p>
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