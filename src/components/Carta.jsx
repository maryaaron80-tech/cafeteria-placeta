import carta from '../datos/carta.js'
import Producto from './Producto.jsx'

function Carta() {
    return (
        <section id="carta" className="seccion">
            <h2>Nuestra carta</h2>
            <ul className="lista-carta">
                {carta.map((item) => (
                  <Producto
                    key={item.id}
                    nombre={item.nombre}
                    descripcion={item.descripcion}
                    precio={item.precio}
                />
                ))}
            </ul>
        </section>
    )
}

export default Carta 