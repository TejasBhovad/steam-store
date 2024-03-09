import { json } from "@sveltejs/kit";
import { supabase } from "$lib/supabaseClient";

export async function GET() {
  console.log("GET /api/games");
  const { data } = await supabase.from("games").select();
  return json(data);
}

export async function POST({ request }) {
  const {
    name,
    developer,
    description,
    cover_image,
    images,
    categories,
    downloads,
    likes,
  } = await request.json();
  const { data, error } = await supabase.from("games").insert([
    {
      name,
      developer,
      description,
      cover_image,
      images,
      categories,
      downloads,
      likes,
    },
  ]);
  if (error) {
    return json({ error });
  }
  return json(data);
}
export async function PUT({ request }) {
  const {
    game_id,
    name,
    developer,
    description,
    cover_image,
    images,
    categories,
    downloads,
    likes,
  } = await request.json();
  const { data, error } = await supabase
    .from("games")
    .update({
      name,
      developer,
      description,
      cover_image,
      images,
      categories,
      downloads,
      likes,
    })
    .match({ game_id });
  if (error) {
    return json({ error });
  }
  return json(data);
}

export async function DELETE({ request }) {
  const { game_id } = await request.json();
  console.log("DELETE /api/games", game_id);
  const { data, error } = await supabase
    .from("games")
    .delete()
    .match({ game_id });
  if (error) {
    return json({ error });
  }
  return json(data);
}
