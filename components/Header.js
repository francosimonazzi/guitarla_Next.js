import Link from "next/link";
import Styles from '../styles/Header.module.css'
import Image from 'next/image'
import { useRouter } from "next/router";

const Header = ({guitarra}) => {

    const router = useRouter();
    return (
        <header className={Styles.header}>
            <div className="contenedor">
                <div className={Styles.barra}>
                    <Link href="/">
                        <a>
                   <Image width={400} height={100} src="/img/logo.svg" alt="imagen logo" />
                        </a>
                    </Link>
                 

                <nav className={Styles.navegacion}>
                    <Link href="/">inicio</Link>
                    <Link href="/nosotros">nosotros</Link>
                    <Link href="/blog">blog</Link>
                    <Link href="/tienda">tienda</Link>
                    <Link href="/carrito">
                        <a>
                            <Image layout="fixed" width={30} height={25} src='/img/carrito.png'
                            alt="imagen carrito" />
                        </a>
                    </Link>
                </nav>
                </div>
                {guitarra && (
                    <div className={Styles.modelo}>
                        <h2>Modelo {guitarra.nombre}</h2>
                        <p>{guitarra.descripcion}</p>
                        <p className={Styles.precio}>${guitarra.precio}</p>
                        <Link href={`/guitarras/${guitarra.url}`}>
                            <a className={Styles.enlace}>
                                Ver Producto
                            </a>
                        </Link>
                    </div>
                  )}
                </div>
                 <div className={Styles.guitarra} >
                {router.pathname === '/' && (
                    <Image layout="fixed" width={500} height={1200} src='/img/header_guitarra.png'
                    alt='imagen header guitarra'/>
                    )}
                  </div>
        </header>
    )
}


export default Header;