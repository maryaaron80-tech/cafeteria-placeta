import { useState } from "react";

function Contacto() {
  // Estado: lo que el usuario escribe, los errores y si ya se envió
  const [datos, setDatos] = useState({ nombre: '', email: '', mensaje: '' })
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  //Cada vez que se escribe en un campo, se guarda en el estado
function cambiar(evento) {
    const { name, value } = evento.target
    setDatos({ ...datos, [name]: value })
}

  // Devuelve un objeto con los errores encontrados (vacio si todo está bien)
function validar() {
    const nuevos = {}
    if (datos.nombre.trim().length < 2) nuevos.nombre = 'Escribe tu nombre'
    if (!/^\S+@\S+\.\S+$/.test(datos.email)) nuevos.email = 'Escribe un email válido'
    if (datos.mensaje.trim().length < 10) nuevos.mensaje = 'El mensaje debe tener al menos 10 caracteres'
    return nuevos
}

function enviar(evento) {
    evento.preventDefault()
    const nuevos = validar()
    setErrores(nuevos)
    if (Object.keys(nuevos).length > 0) return

    // De momento solo simulamos el envio; en la fase 4 irá a Supabase
    setEnviado(true)
    setDatos({ nombre: '', email: '', mensaje: '' })
}

return (
    <section id="contacto" className="seccion">
        <h2>Contacto</h2>

        {enviado ? (
            <div className="aviso-ok">
                <p>¡Gracias por escribirnos! Te responderemos lo antes posible.</p>
                <button type="button" className="boton" onClick={() => setEnviado(false)}>
                    Enviar otro mensaje
                </button>
            </div>
        ) :(
            <form className="formulario" onSubmit={enviar} noValidate>
                <label>
                    Nombre
                    <input name="nombre" value={datos.nombre} onChange={cambiar} />
                    {errores.nombre && <span className="error">{errores.nombre}</span>}
                </label>

                <label>
                    Email
                    <input name="email" type="email" value={datos.email} onChange={cambiar} />
                    {errores.email && <span className="error">{errores.email}</span>}
                </label>

                <label>
                    Mensaje
                    <textarea name="mensaje" rows="5" value={datos.mensaje} onChange={cambiar} />
                    {errores.mensaje && <span className="error">{errores.mensaje}</span>}
                </label>

                <button type="submit" className="boton">Enviar</button>
            </form>
        )}
    </section>
    )
}
export default Contacto