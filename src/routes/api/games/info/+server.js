import { json } from "@sveltejs/kit";
import { supabase } from "$lib/supabaseClient";
export async function POST({ request }) {
  const { game_id } = await request.json();
  console.log("POST /api/games/info" + game_id);
  console.log("game_id", game_id);
  const { data } = await supabase.from("games").select().eq("game_id", game_id);
  return json(data);
}
