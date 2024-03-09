import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("games").select();
  return {
    games: data ?? [],
  };
}
