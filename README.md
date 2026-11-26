# ☕ Café La Placeta

Landing page de una cafetería de barrio, hecha con **React** como práctica de un encargo real: debía verse bien en móvil, tener un formulario de contacto que funcione y estar publicada con una URL pública.

**🔗 Ver en vivo:** https://cafeteria-placeta.vercel.app

## Capturas

| Escritorio | Móvil |
|---|---|
| ![Vista de escritorio](docs/capturas/escritorio.png) | ![Vista de móvil](docs/capturas/movil.png) |

## Qué incluye

- **Portada** con llamada a la acción que lleva al formulario.
- **Carta** generada a partir de una lista de datos (`src/datos/carta.js`), sin repetir código.
- **Horario** y dirección.
- **Formulario de contacto** con validación y mensajes de error; los mensajes se guardan en Supabase.
- **Diseño adaptado a móvil** con media queries.

## Tecnologías

- React 19 + Vite
- Supabase (base de datos PostgreSQL)
- CSS propio, sin librerías
- Vercel (publicación automática con cada `git push`)

## Cómo ejecutarlo en tu ordenador

1. Clona el repositorio e instala las dependencias:
