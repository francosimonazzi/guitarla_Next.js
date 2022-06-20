import { formatearFecha } from "../helpers";
import Link from "next/link";
import Image from "next/image";
import Styles from "../styles/Entrada.module.css";

const Entrada = ({entrada}) => {
    const {titulo, resumen, imagen, published_at, id, url} = entrada;
    return (
        <article>

            <Image priority='true' layout="responsive" width={800} height={600} src={imagen.url}
             alt={`imagen blog ${titulo}`} />

            <div className={Styles.contenido}>
                 <h3>{titulo}</h3>
                 <p className={Styles.fecha}>{formatearFecha(published_at)}</p>
                <p className={Styles.resumen}>{resumen}</p>
                <Link href={`/blog/${url}`}>
                    <a className={Styles.enlace}>Leer más</a>
                </Link>
            </div>

        </article>
    )
}


export default Entrada;