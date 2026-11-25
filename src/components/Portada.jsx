function Portada({ titulo, subtitulo}) {
    return (
        <section id="inicio" className="portada">
            <h1>{titulo}</h1>
            <p>{subtitulo}</p>
            <a href="#contacto" className="boton">Reserva o escríbenos</a>
        </section>
    )
}

export default Portada