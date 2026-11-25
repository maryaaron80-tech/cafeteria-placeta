function Pie() {
    const anio = new Date().getFullYear()

    return (
        <footer className="pie">
            <p>© {anio} Café La Placeta · Hecho con cariño en el barrio</p>
        </footer>
    )
}

export default Pie