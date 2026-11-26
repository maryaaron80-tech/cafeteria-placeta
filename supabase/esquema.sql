-- Mensaje del formulario de contacto
create table mensajes_contacto (
  id bigint generated always as identity primary key,
  nombre text not null check (char_length(nombre) between 2 and 100),
  email text not null check (email ~ '^\S+@\S+\.\S+$' and char_length(email) <=200),
  mensaje text not null check (char_length(mensaje) between 10 and 2000),
  creado_el timestamptz not null default now()
);


-- Seguridad activada
alter table mensajes_contacto enable row level security;


-- Cualquier visitante puede ENVIAR un mensaje...
create policy "Cualquiera puede enviar un mensaje"
on mensajes_contacto for insert
to anon, authenticated
with check (true);


-- ...peron no hay ninguna politica de lectura: desde la web nadie puede leerlos 




-- Permiso para que los visitantes de la web puedan insertar (solo insertar)
grant insert on table mensajes_contacto to anon, authenticated;