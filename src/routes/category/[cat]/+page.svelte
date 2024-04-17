<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  let games = [];
  async function fetchData() {
    try {
      const res = await fetch("/api/games/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: $page.params.cat,
        }),
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      games = data;
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
  onMount(() => {
    fetchData();
  });
</script>

<div class="w-full h-full py-2 gap-8 flex flex-col overflow-y-auto">
  <div class="px-8 py-3">
    <span
      class="bg-utility px-8 py-3 rounded-lg bg-opacity-25 border-[1px] border-utility capitalize text-4xl font-semibold"
      >{$page.params.cat}</span
    >
  </div>

  <div
    class="w-full h-auto px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 3xl:grid-cols-8 gap-8"
  >
    {#each games as game (game)}
      <a
        href={`/games/${game.game_id}`}
        class="w-32 h-40 bg-secondary border-[1px] border-utility rounded-md px-3 py-3"
      >
        <div class="bg-utility w-full aspect-square rounded-md">
          <img
            src={game.cover_image}
            alt={game.name}
            class="w-full h-full object-cover rounded-md"
          />
        </div>
        <span class="w-full items-center justify-center flex py-1"
          >{game.name}</span
        >
      </a>
    {/each}
  </div>
</div>
