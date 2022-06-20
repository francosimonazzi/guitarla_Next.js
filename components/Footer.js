import Link from 'next/link'
import Styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={Styles.footer}>
            <div className={`contenedor ${Styles.contenido}`}>
                <nav className={Styles.navegacion}>
                <Link href="/">inicio</Link>
                    <Link href="/nosotros">nosotros</Link>
                    <Link href="/blog">blog</Link>
                    <Link href="/tienda">tienda</Link>
                </nav>
                <p className={Styles.copyright}>Todos los derechos reservados</p>

            </div>
        </footer>
    )
}


export default Footer;