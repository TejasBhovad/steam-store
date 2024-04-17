import { supabase } from "$lib/supabaseClient";
import { error } from "@sveltejs/kit";

export const load = async (event) => {
  const session = await event.locals.auth();
  if (!session?.user) throw error(401, "Unauthorized");

  const { data } = await supabase.from("games").select();
  return {
    games: data ?? [],
  };
};
