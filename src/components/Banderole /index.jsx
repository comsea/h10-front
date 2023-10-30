import fizalys from "../../asset/Cabinets/fizalys.svg"
import actualys from "../../asset/Cabinets/actualys.svg"
import cwa from "../../asset/Cabinets/cwa.svg"
import ficom from "../../asset/Cabinets/ficom.svg"
import hmc from "../../asset/Cabinets/hmc.svg"

const Banderole = () => {
    return(
        <marquee direction="left">
            <div class="flex flex-row justify-between items-center w-[90%] my-8 mx-auto">
                <a href="https://fizalys.fr/" target="_blank"><img src={fizalys} alt="Logo du cabinet d'experts comptables fizalys" className="w-[15%]" /></a>
                <a href="https://hmcconseil.fr/" target="_blank"><img src={hmc} alt="Logo du cabinet d'experts comptables hmc" className="w-[15%]" /></a>
                <a href="https://ficom08.fr/" target="_blank"><img src={ficom} alt="Logo du cabinet d'experts comptables ficom" className="w-[15%]" /></a>
                <a href="https://actualys.fr/" target="_blank"><img src={actualys} alt="Logo du cabinet d'experts comptables actualys" className="w-[15%]" /></a>
                <a href="https://c-w-a.fr/" target="_blank"><img src={cwa} alt="Logo du cabinet d'experts comptables cwa" className="w-[15%]" /></a>
            </div>
        </marquee>

    )
}
export default Banderole