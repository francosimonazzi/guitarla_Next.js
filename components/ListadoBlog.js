import Entrada from "./Entrada";
import Styles from '../styles/Blog.module.css'

const ListadoBlog =  ({entradas}) => {
    return(
        <>
        <h2 className="heading">Blog</h2>

        <div className={Styles.blog}>
            {entradas.map(entrada => (
                <Entrada 
                    key={entrada.id}
                    entrada={entrada}
                />
            ))}
        </div>
        </>
    )
}


export default ListadoBlog;