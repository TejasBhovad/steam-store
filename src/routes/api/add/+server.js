import { json } from "@sveltejs/kit";
import { API_KEY } from "$env/static/private";
export async function POST({ request }) {
  const { a, b } = await request.json();
  return json(a + b);
}
