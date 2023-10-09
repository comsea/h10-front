import Header from "../../components/Header"
import presentation from "../../asset/Header/presentation.png"

const Presentation = () => {
    return(
        <div>
            <Header title="Qui sommes-nous ?" text="Découvrez notre formidable équipe !" image={presentation} />
        </div>
    )
}

export default Presentation