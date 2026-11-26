import { createClient } from '@supabase/supabase-js';


// Las claves vienen de .env.local (VITE las pone en import.meta.env)
export const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_KEY
)