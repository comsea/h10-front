import Header from "../../components/Header"
import Banderole from "../../components/Banderole "
import mentions from "../../asset/Header/mentions.png"

const Mentions = () => {
    return (
        <div>
            <Header title="Mentions légales" text="Consultez cette section pour connaître nos obligations légales et nos politiques liées à l'utilisation de ce site." image={mentions} />
            <Banderole />
            <div class="w-11/12 flex flex-col font-normal lg:w-10/12 py-12 mx-auto">
                <h2 class="text-xl font-bold mb-2">Propriétaire</h2>
                <p>
                    Réseau H10, Siège sociale situé au 6 Boulevard des écossais, 08200 Sedan
                </p>

                <h2 class="text-xl font-bold my-2">Conception et réalisation</h2>
                <p>
                    Agence de Communication COMSEA - Site Internet : <a href="http://www.comsea.fr" class="text-blue-600" target="_blank">www.comsea.fr</a> - Email : <a href="mailto:contact@comsea.fr" class="text-blue-600">contact@comsea.fr</a>
                </p>

                <h2 class="text-xl font-bold my-2">Responsable de publication</h2>
                <p>
                    Sébastien DRAPIER - <a href="mailto:contact@reseauh10.fr" class="text-blue-600">contact@reseauh10.fr</a>
                </p>

                <h2 class="text-xl font-bold my-2">Hébergeur</h2>
                <p>
                    Le site H10.fr est hébergé par la société :
                    OVH, 2 RUE KELLERMANN 59100 ROUBAIX
                </p>

                <h2 class="text-xl font-bold my-2">Propriété Intellectuelle</h2>
                <p>
                    Le présent site Internet pris dans sa globalité et chacun des éléments qui le composent pris indépendamment, notamment les programmes et développements spécifiques et les contenus incluant des données, textes, images fixes ou animées, logotypes, sons, graphiques, fichiers, sont la propriété exclusive du responsable de la publication, du créateur du site Internet ou de tiers qui lui ont concédé une licence. Toute représentation totale ou partielle du site ou de l’un des éléments qui le composent sans l’autorisation expresse du titulaire des droits de propriété intellectuelle est interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
                </p>

                <h2 class="text-xl font-bold my-2">Nous contacter</h2>
                <p>
                    Par email : <a href="mailto:contact@reseauh10.fr" class="text-blue-600">contact@reseauh10.fr</a>
                </p>
            </div>
        </div>
    )
}

export default Mentions