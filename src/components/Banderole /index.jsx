import fizalys from "../../asset/Cabinets/fizalys.svg"
import actualys from "../../asset/Cabinets/actualys.svg"
import cwa from "../../asset/Cabinets/cwa.svg"
import ficom from "../../asset/Cabinets/ficom.svg"
import hmc from "../../asset/Cabinets/hmc.svg"

const Banderole = () => {
    return(
        <div class="flex space-x-16 w-fit mx-auto">
            <img src={fizalys} alt="Logo du cabinet d'experts comptables fizalys"/>
            <img src={hmc} alt="Logo du cabinet d'experts comptables hmc"/>
            <img src={ficom} alt="Logo du cabinet d'experts comptables ficom"/>
            <img src={actualys} alt="Logo du cabinet d'experts comptables actualys"/>
            <img src={cwa} alt="Logo du cabinet d'experts comptables cwa"/>
        </div>
    )
}
export default Banderole