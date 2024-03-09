import { json } from "@sveltejs/kit";
import { supabase } from "$lib/supabaseClient";

export async function GET({ params }) {
  console.log("GET /api/games/category/" + params.category);
  const { data } = await supabase
    .from("games")
    .select()
    .eq("categories", params.category);
  return json(data);
}
