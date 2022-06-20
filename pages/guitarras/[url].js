import Image from 'next/image'
import Layout from '../../components/Layout'
import Styles from '../../styles/Guitarra.module.css'
import { useState } from 'react'

const Producto = ({guitarra, agregarCarrito}) => {
    const [cantidad, setCantidad] = useState(1);
    const {descripcion, nombre, precio, imagen, id} = guitarra[0]

    const handleSubmit = e => {
        e.preventDefault()

        if(cantidad < 1){
            alert('Cantidad no valida')
            return
            
        }

        const guitarraSeleccionada ={
            id,
            imagen: imagen.url,
            nombre,
            precio,
            cantidad
        }

        agregarCarrito(guitarraSeleccionada)
    }
   
    return(
        <Layout
          pagina={`Guitarra ${nombre}`}
        >
        <div className={Styles.guitarra}>
        <Image layout='responsive' width={200} height={350} src={imagen.url}
        alt={`Imagen guitarra ${nombre}`} />
        <div className={Styles.contenido}>
            <h3>{nombre}</h3>
            <p className={Styles.descripcion}>{descripcion}</p>
            <p className={Styles.precio}>${precio}</p>

            <form className={Styles.formulario} onSubmit={handleSubmit}>

                <label>
                    Cantidad:
                </label>
               
                <select
                    value={cantidad}
                    onChange={e => setCantidad(parseInt(e.target.value))}
                >
                    <option value="0">-- Seleccione --</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <input
                    type="submit"
                    value="Agregar al carrito"
                    />
            </form>
        </div>
    </div>
    </Layout>
    )
}


export async function getServerSideProps({query: {url}}) {
    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
    const respuesta = await fetch(urlGuitarra)
    const guitarra = await respuesta.json()
    return {
        props: {
            guitarra: guitarra
        }
    }
}

export default Producto;