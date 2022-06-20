import Image from 'next/image'
import Layout from "../components/Layout";
import Styles from '../styles/Nosotros.module.css'


const Nosotros = () => {
    return(
      <Layout pagina='nosotros'>
         <main className="contenedor">
          
           <h2 className="heading">Nosotros</h2>
         
           <div className={Styles.contenido}>
              
               <Image layout='responsive' width={600} height={450} src="/img/nosotros.jpg" alt="imagen nosotros" />
            
             <div>
                <p>Vestibulum sit amet odio lacinia, vulputate tortor et, rhoncus justo.
                   Donec iaculis cursus dictum.
                   Curabitur rutrum pharetra vulputate.
                    Proin aliquet turpis ultrices purus eleifend ullamcorper.
                   Etiam fermentum felis eu nisl porttitor facilisis.
                    Morbi et mauris eget quam pretium ultrices.
                     Sed fringilla ipsum urna, vitae porttitor risus suscipit euismod.
                     Interdum et malesuada fames ac ante ipsum primis in faucibus.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                   Aenean vel euismod lectus, ac elementum nulla.
                    </p>
                     <p>
                     Vestibulum sit amet odio lacinia, vulputate tortor et, rhoncus justo.
                   Donec iaculis cursus dictum.
                   Curabitur rutrum pharetra vulputate.
                    Proin aliquet turpis ultrices purus eleifend ullamcorper.
                   Etiam fermentum felis eu nisl porttitor facilisis.
                    Morbi et mauris eget quam pretium ultrices.
                     inibus leo mattis.
                    
                     </p>
             </div>
           </div>

         </main>
      </Layout>
    )
}


export default Nosotros;