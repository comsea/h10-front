import Header from "../../components/Header";
import engagement from "../../asset/Header/engagement.png";
import étoile from "../../asset/Engagement/Etoile_Charleville.png";
import trajectoire from "../../asset/Engagement/Trajectoires-Olympiques.png";
import fleche from "../../asset/Svg/fleche.svg";
import bienêtre from "../../asset/Engagement/bien-etre.png";
import environnement from "../../asset/Engagement/environnemental.png";
import territorial from "../../asset/Engagement/territorial.png";
import Banderole from "../../components/Banderole ";

const Engagement = () =>{
    return (
        <div>
            <Header title="Différents engagements RSE" text="Le réseau H10 est acteur de son territoire, dans une démarche sociétale." image={engagement}/>
            <Banderole />
            <div class="w-11/12 lg:w-10/12 mx-auto font-normal text-center lg:text-start 2xl:text-2xl text-lg">
                <h1 class="text-3xl text-darkblue 2xl:text-5xl mb-6 font-semibold">Sponsoring <span class="text-black">et partenariats</span></h1>
                <p>Défendant les valeurs véhiculées par le sport - esprit d’équipe, entraide, équité, inclusion, dépassement de soi, respect, le réseau H10 soutient plusieurs petits clubs sportifs locaux et des associations sportives régionales. Parmi les plus connus :</p>
                <div class="my-6 flex flex-col-reverse lg:flex-row items-center text-start">
                    <div class ="flex items-start mr-10">
                        <img src={fleche} alt="icon de flèche pour montrer le texte qui suit" class="w-8 mr-6" />
                        <p><span class="font-semibold">Trajectoires Olympiques</span> : le réseau H10 est engagé auprès de l’association Trajectoires Olympiques qui promeut et finance des jeunes sportifs ardennais, toutes pratiques confondues, afin qu’ils atteignent le plus haut niveau international.</p>
                    </div>
                    <img src={trajectoire} class=" mb-6 lg:mb-0 lg:w-1/5" alt="Logo du club Trajectoire Olympique" />
                </div>
                <div class="my-6 flex flex-col lg:flex-row items-center text-start">
                    <img src={étoile} class=" mb-6 lg:mb-0 lg:w-1/8" alt="Logo du club Ardennes Étoile" />
                    <div class ="flex items-start ml-10">
                        <img src={fleche} alt="icon de flèche pour montrer le texte qui suit" class="w-8 mr-6" />
                        <p>Le club de Basket de Charleville-Mézières <span class="font-semibold">L’Étoile</span>  qui, rappelons-le, possède le plus haut palmarès sportif de haut niveau dans les Ardennes.</p>
                    </div>
                </div>
                <p class="text-center mb-32 mt-9">Présent lors de nombreuses manifestations, le réseau H10 participe à son échelle au rayonnement et à la démocratisation des pratiques sportives pour tous.</p>
                {/* TERRITORIAL */}
                <div class="flex items-center flex-col lg:flex-row mb-32">
                    <div class ="lg:w-2/3">
                        <h3 class="text-3xl text-darkblue 2xl:text-5xl mb-6 font-semibold">Agir <span class="text-black">sur son territoire</span></h3>
                        <p>Intégré au maillage social et économique, H10 est actif et engagé sur son territoire d’intervention (Ardennes, Aisne, Marne). Les cabinets du réseau et ses quelques 100 collaborateurs participent régulièrement à des actions de solidarité auprès d’associations locales, comme les collectes de vêtements Solicœur organisées au bénéfice des plus démunis. Ils s’organisent pour permettre régulièrement aux donneurs de sang de se réunir le temps d’une collecte.
                        <br/><br/>Le réseau H10 encourage le développement et l’accessibilité à tous de la culture dans sa région. Il est mécène d’artistes et défend la liberté de créer de manière générale, en faisant un parallèle entre le monde de l’art et celui de l’entreprenariat.
                        </p>
                    </div>
                    <div class="lg:w-1/3 my-6 lg:my-0 px-5">
                        <div class="bg-gray duration-200 items-center rounded-t-full">
                            <img src={territorial} class="mx-auto w-2/3 lg:pt-6 2xl:pt-16" alt="Illustration réprensentant le territoire" />
                        </div>
                    </div>
                </div>
                {/* ENVIRONNEMENTAL */}
                <div class="flex items-center flex-col lg:flex-row-reverse mb-32">
                    <div class ="lg:w-2/3">
                        <h3 class="text-3xl text-darkblue 2xl:text-5xl mb-6 font-semibold">Démarche <span class="text-black">environnementale</span></h3>
                        <p>Soucieux de l’avenir de notre planète, le réseau H10 se préoccupe de son impact environnemental. Il a mis en place un ensemble de bonnes pratiques écoresponsables quotidiennes en termes de dématérialisation des documents, gestion des consommables et des équipements, transports, économie d’énergie, tri des déchets. Le réseau a fait le choix, par exemple, de rouler prioritairement en véhicule électrique en s’équipant d’un parc de voitures électriques. Il utilise majoritairement du papier recyclé, a remplacé les gobelets jetables par des tasses à café lavables, encourage le tri sélectif, choisi ses fournisseurs de consommables en fonction de leur démarche écologique (impressions notamment).
                        <br/><br/>En constante évolution, notre démarche environnementale est par ailleurs un véritable terrain d’expérimentation qui nous permet de conseiller au mieux nos clients sur les actions à mettre en œuvre et les résultats attendus. À la clé, une réduction carbone mais également de coûts pour l’entreprise, en préférant des produits et des services durables. C’est ainsi que stratégie RSE rime avec compétitivité et que le réseau H10 inscrit l’environnement au cœur du raisonnement comptable des sociétés qu’il accompagne.
                        </p>
                    </div>
                    <div class="lg:w-1/3 my-6 lg:my-0 px-5 ">
                        <div class="bg-gray duration-200 items-center rounded-t-full">
                            <img src={environnement} class="mx-auto w-2/3 lg:pt-6 2xl:pt-16" alt="Illustration réprensentant l'environnement" />
                        </div>
                    </div>
                </div>
                {/* BIEN ÊTRE */}
                <div class="flex items-center flex-col lg:flex-row mb-32">
                    <div class ="lg:w-2/3">
                        <h3 class="text-3xl text-darkblue 2xl:text-5xl mb-6 font-semibold">Bien-être <span class="text-black">en entreprise</span></h3>
                        <p>Le rythme de travail des cabinets d’experts-comptables est intense. Très tôt, le réseau H10 a inscrit au cœur de sa stratégie la notion de bien-être en entreprise. Les enjeux sont multiples : meilleure disponibilité pour les clients, amélioration de la productivité, facilité de recrutement. Les actions mises en place par les cabinets sont couronnées de succès :</p>
                        <div class="flex mt-10">
                            <img src={fleche} alt="Icon de flêche pour pointer vers le texte qui suit" class="w-8 mr-6" />
                            <p>Aménagement des horaires</p>
                        </div>
                        <div class="flex mt-4">
                            <img src={fleche} alt="Icon de flêche pour pointer vers le texte qui suit" class="w-8 mr-6" />
                            <p>Répartition des tâches et du temps de travail</p>
                        </div>
                        <div class="flex mt-4">
                            <img src={fleche} alt="Icon de flêche pour pointer vers le texte qui suit" class="w-8 mr-6" />
                            <p>Modernisation des espaces de travail</p>
                        </div>
                        <div class="flex mt-4">
                            <img src={fleche} alt="Icon de flêche pour pointer vers le texte qui suit" class="w-8 mr-6" />
                            <p>Flexibilité spacio-temporelle</p>
                        </div>
                        <div class="flex mt-4">
                            <img src={fleche} alt="Icon de flêche pour pointer vers le texte qui suit" class="w-8 mr-6" />
                            <p>Rémunération motivante</p>
                        </div> 
                        <div class="flex mt-4 mb-10 items-start">
                            <img src={fleche} alt="Icon de flêche pour pointer vers le texte qui suit" class="w-8 mr-6" />
                            <p>Écoute émotionnelle des équipes qui se retrouvent régulièrement pour des journées de team-building et participent ensemble aux événements de la région</p>
                        </div>
                        <p>Composé d’experts-comptables jeunes et dynamiques, le réseau H10 casse les codes et balaie l’image poussiéreuse de l’expert-comptable âgé croulant sous les dossiers et condamné à gratter le papier derrière son bureau. Le réseau H10 présente clairement un attrait double : pour les (futurs) clients et les (futurs) collaborateurs !</p>
                    </div>
                    <div class="lg:w-1/3 my-6 lg:my-0 px-5">
                        <div class="bg-gray duration-200 items-center rounded-t-full">
                            <img src={bienêtre} class="mx-auto w-2/3 lg:pt-6 2xl:pt-16" alt="Illustration réprensentant le bien-être" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Engagement