
import Link from "next/link";
import Styles from "../styles/NoEncontrado.module.css";

const NoEncontrados = () => {
    return(
            <div className={Styles.no_encontrado}>
            <h1 className="heading">Pagina no encontrada</h1>
            <Link href="/">
                volver al inicio
            </Link>
            </div>
       
    )
}


export default NoEncontrados;