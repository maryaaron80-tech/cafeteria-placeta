const horarios = [
    { dias: "Lunes a viernes", horas: "7:30 - 20:00" },
    { dias: "Sábados", horas: "8:30 - 14:00" },
    { dias: "Domingos y festivos", horas: "Cerrado" }
]

function Horario() {
    return (
        <section id="horario" className="seccion">
            <h2>Horario</h2>
            <ul className="lista-horario">
                {horarios.map((h) => (
                    <li key={h.dias}>
                        <span>{h.dias}</span>
                        <strong>{h.horas}</strong>
                    </li>
                ))}
            </ul>
            <p>Plaça Major, 5 · Manresa</p>
        </section>
    )
}

export default Horario