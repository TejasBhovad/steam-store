import { json } from "@sveltejs/kit";
import { supabase } from "$lib/supabaseClient";

export async function POST({ request }) {
  const { category } = await request.json();
  console.log("GET /api/games/category/" + category);
  const { data } = await supabase
    .from("games")
    .select()
    .contains("categories", [category]);
  return json(data);
}
