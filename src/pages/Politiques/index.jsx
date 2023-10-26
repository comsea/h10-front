import Header from "../../components/Header"
import Banderole from "../../components/Banderole "
import politiques from "../../asset/Header/politiques.png"

const Politiques = () => {
    return (
        <div>
            <Header title="Politique de Confidentialité" text="Comprenez comment nous collectons, utilisons et protégeons vos informations personnelles en consultant notre politique de confidentialité." image={politiques} />
            <Banderole />
            <div class="w-11/12 flex flex-col font-normal lg:w-10/12 py-12 mx-auto">
                <p>Mise à jour : 25 Octobre 2023</p>

                <h2 class="text-xl font-bold mt-4">Introduction</h2>
                <p>
                    Merci d'utiliser le site web du réseau H10. Nous sommes déterminés à protéger votre vie privée et à maintenir la sécurité de vos informations personnelles. Cette politique de confidentialité vise à expliquer clairement comment nous collectons, utilisons et partageons vos données.
                </p>

                <h2 class="text-xl font-bold mt-4">1. Consentement</h2>
                <p>
                    En visitant notre site web et en utilisant nos services, vous acceptez cette politique de confidentialité. Vous reconnaissez avoir pris connaissance de son contenu et comprenez comment vos données personnelles seront traitées conformément à cette politique.
                </p>

                <h2 class="text-xl font-bold mt-4">2. Quelles Informations Nous Collectons</h2>
                <p>
                    Nous ne collectons que les informations personnelles nécessaires, telles que votre nom, votre adresse e-mail, votre adresse postale, et d'autres données qui nous aident à vous identifier. Nous collectons ces informations lorsque vous nous les fournissez ou lorsque cela est permis par la loi.
                </p>

                <h2 class="text-xl font-bold mt-4">3. Pourquoi Nous Collectons Vos Données</h2>
                <p>
                    Nous collectons vos données pour les raisons suivantes :
                </p>
                <ul>
                    <li>Pour fournir nos services</li>
                    <li>Pour améliorer nos services</li>
                    <li>Pour protéger votre vie privée</li>
                    <li>Pour satisfaire aux obligations légales</li>
                </ul>

                <h2 class="text-xl font-bold mt-4">4. Comment Nous Obtient Votre Consentement</h2>
                <p>
                    Nous cherchons à obtenir votre consentement de manière explicite chaque fois que cela est possible. Vous pouvez nous donner votre consentement en cochant une case, en cliquant sur un bouton, ou en nous fournissant des informations personnelles. Nous vous expliquerons toujours pourquoi nous avons besoin de ces informations.
                </p>

                <h2 class="text-xl font-bold mt-4">5. Vos Droits</h2>
                <p>
                    Vous avez le droit de demander l'accès à vos informations personnelles pour vérification et de demander des corrections si elles sont incorrectes. Si vous avez des questions sur vos données personnelles, contactez-nous (voir les coordonnées ci-dessous).
                </p>

                <h2 class="text-xl font-bold mt-4">6. Sécurité de Vos Données</h2>
                <p>
                    Nous prenons la sécurité de vos données au sérieux. Nous utilisons des pratiques de sécurité de l'industrie pour protéger vos informations. Cependant, gardez à l'esprit que la sécurité totale sur Internet n'est pas garantie.
                </p>

                <h2 class="text-xl font-bold mt-4">7. Partage des Informations</h2>
                <p>
                    Nous ne partageons pas vos données avec des tiers, sauf avec votre consentement ou lorsque la loi l'exige.
                </p>

                <h2 class="text-xl font-bold mt-4">8. Cookies et Technologies Similaires</h2>
                <p>
                    Nous utilisons des cookies pour améliorer votre expérience sur notre site. Vous pouvez gérer vos préférences de cookies en modifiant les paramètres de votre navigateur.
                </p>

                <h2 class="text-xl font-bold mt-4">9. Conservation des Données</h2>
                <p>
                    Nous conservons vos données uniquement aussi longtemps que nécessaire pour les finalités pour lesquelles elles ont été collectées. Après cette période, nous les détruisons.
                </p>

                <h2 class="text-xl font-bold mt-4">10. Contact</h2>
                <p>
                    Pour toute question, commentaire ou réclamation concernant notre politique de confidentialité, veuillez contacter notre responsable de la conformité :
                </p>
                <p>Nom : Teddy Homenet</p>
                <p>Adresse : 8 rue de l'Artisanat, Charleville-Mezières, 08000</p>
                <p>Téléphone : 03.72.61.80.00</p>
                <p>Courriel : contact@comsea.fr</p>
            </div>
        </div>
    )
}

export default Politiques