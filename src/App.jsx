import Cabecera from './components/Cabecera.jsx'
import Portada from './components/Portada.jsx'
import Carta from './components/Carta.jsx'
import Horario from './components/Horario.jsx'
import Pie from './components/Pie.jsx'

function App() {
  return (
  <>
   <Cabecera />  
    <main>
      <Portada
      titulo="Café La Placeta"
      subtitulo="Tu cafetería de barrio: café de especialidad, desayunos y bollería casera."
      />
      <Carta />
      <Horario />   
    </main>
    <Pie />
    </>
  )
}

export default App