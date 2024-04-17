<script>
  import SearchBar from "../lib/SearchBar.svelte";
  import { onMount } from "svelte";
  import Carousel from "../lib/Carousel.svelte";
  import Categories from "../lib/Categories.svelte";
  let games = [];
  let searchTerm = "";
  async function fetchData() {
    const res = await fetch("/api/games");
    const data = await res.json();
    games = data;
  }

  $: filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  onMount(() => {
    fetchData();
  });
</script>

<div class="absolute top-3"><SearchBar bind:searchTerm /></div>

<div class="w-full h-full py-2 gap-8 flex flex-col overflow-y-auto">
  <Carousel />
  <Categories />
  <div
    class="w-full h-auto px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 3xl:grid-cols-8 gap-8"
  >
    {#each filteredGames as game (game)}
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

<style>
  ::-webkit-scrollbar {
    background-color: #171918;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #1b1d1c;
    border-radius: 2.5px;
  }
</style>
