import React, { useState, useEffect } from 'react';
import past from "../../asset/Svg/past.svg";
import before from "../../asset/Svg/before.svg";
import img from "../../asset/homepageh10.png";
import cross from "../../asset/Svg/cross.svg";
import actu from "../../asset/test-actu.png";

const Accueil = () => {
//     const [apiData, setApiData] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:1337/api/expertises')
//       .then(response => response.json())
//       .then(data => {
//         const dataArray = Array.isArray(data) ? data : [data];
//         setApiData(dataArray);
//       })
    
//       .catch(error => {
//         // Gérez les erreurs ici
//       });
//   }, []);
    return(
        <div class="lg:w-10/12 mx-auto">
            {/* NOS ACTUALITÉS */}
                <div class="flex flex-col lg:flex-row text-center lg:text-start justify-between">
                    <div>
                        <p class="text-darkblue font-normal text-2xl lg:text-4xl mb-2 lg:mb-4">Nos dernières actualités</p>
                        <h1 class="text-3xl lg:text-5xl font-semibold">Que se passe-t-il dans le Réseau H10 <span class="text-darkblue">?</span></h1>
                    </div>
                    <div class="flex mt-16 mb-10">
                        {/*faire pagination bouton past/before */}
                        <div class="bg-gray rounded-lg mr-1">
                            <img src={before} alt="icon pour voir la page précédente" class="lg:px-7 lg:py-4 px-4 py-2"/>
                        </div>
                        <div class="bg-white shadow-2xl rounded-lg">
                            <img src={past} alt="icon pour voir la page suivante" class="lg:px-7 lg:py-4 px-4 py-2" />
                        </div>
                    </div>
                </div>
                {/* SLIDER ACTU */}
                <div class="grid grid-cols-1 lg:grid-cols-3 grid-rows-1 text-darkblue font-normal text-lg gap-3">
                    {/* faire boucle actu */}
                    <div class="bg-white shadow-2xl rounded-3xl ">
                        <img src={actu} alt="test actu" class="w-full rounded-t-3xl" />
                        <div class="ml-6 my-4">
                            <p>XX/XX/XX</p>
                            <p class="font-semibold text-black text-2xl">Mieux gérer ses impositions</p>
                            <p class="text-[#7C929B] py-3 leading-tight">L’approche du réseau H10 en matière d’expertise comptable repose sur ..</p>
                            <p>Voir l’article →</p>
                        </div>
                    </div>
                </div>
            {/* NOS EXPERTISES */}
            <div class="flex justify-center my-16">
                <img src={img} alt="Image d'une comptable entrain de travailler" class="hidden w-1/2 p-4 h-auto lg:flex"/>
                <div class="text-center  lg:text-start lg:w-1/2">
                    <p class="text-darkblue font-extraligth text-2xl lg:text-4xl mb-2 lg:mb-4">Nos expertises</p>
                    <h3 class="text-3xl lg:text-5xl font-semibold">Découvrez nos différentes expertises.</h3>
                        {/* EXPERTISES */}
                    <div class="w-auto mx-1 mt-8 lg:mt-20">
                        {/* faire boucle expertise */}
                        <div class="shadow-2xl flex items-center justify-between p-4 rounded-xl bg-white">
                            <h6 class="text-darkblue text-2xl lg:text-3xl font-bold">Conseil</h6>
                            {/* faire drop down */}
                            <button oneClick="" class="w-10 h-10 lg:w-14 lg:h-14 bg-ligthblue rounded-xl flex justify-center items-center"><img src={cross} class="w-4 h-auto" alt="icon de croix pour ouvrir les détails de l'expertise" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            {/* {apiData && apiData.map(item => (
                <div key={item.id}>
                <h2>{item.attributes.title}</h2>
                <p>{item.attributes.description}</p>
                </div>
            ))} */}
            </div>
        </div>
    )   
}

export default Accueil