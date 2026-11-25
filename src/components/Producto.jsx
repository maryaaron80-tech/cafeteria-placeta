function Producto({ nombre, descripcion, precio }) {
    return (
        <li className="producto">
            <div>
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
            </div>
            <span className="precio">{precio.toFixed(2).replace(".",",")} €</span>
        </li>
    )
}

export default Producto