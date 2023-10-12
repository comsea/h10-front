import phone from "../../asset/Svg/phone.svg"
// import React, {useState, useEffect} from 'react'
import web from "../../asset/Svg/website.svg"
import map from "../../asset/Svg/maps.svg"
import { useEffect } from "react"

const Cabinet = (cabinetChoice) => {

//     const [isLoading, setIsLoading] = useState(true)
//     const [address, setAddress] = useState(null)

//     useEffect(()=>{
//      fetch('http./localhost:1337/api/adresses',
//         {
//             method: "GET",
//             headers: {
//                 'Accept': 'Application/json'
//             }
//         }) 
//      .then(res => res.json())
//      .then(response => {
//         setAddress(response)
//         setIsLoading(false)
//         })  
//     },[])

    return(
        <div class="w-11/12 mx-auto py-20 my-20">
            <h3 class="text-darkblue font-semibold text-5xl mb-8">{cabinetChoice.title}</h3>
            <p class="text-xl font-normal mb-6">{cabinetChoice.description}</p>
            <h4 class="text-darkblue font-semibold text-5xl mb-8">{cabinetChoice.location}</h4>
            <div class="underline underline-offset-8 text-2xl font-normal text-darkblue">
                <div class="flex items-center">
                    <img src={map} alt="icone pour indiquer le lieu" class="mr-4 w-6" />
                    <a href="#">{cabinetChoice.address}</a>
                </div>
                <div class="flex items-center my-6">
                    <img src={phone} alt="icone pour indiquer le numéro de téléphone" class="mr-4 w-6" />
                    <a href="#">{cabinetChoice.phone}</a>
                </div>
                <div class="flex items-center">
                    <img src={web} alt="icone pour indiquer le lien du site web" class="mr-4 w-6" />
                    <a href="#">{cabinetChoice.website}</a>
                </div>
            </div>
        </div>
    )
}

export default Cabinet