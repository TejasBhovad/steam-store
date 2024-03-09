<script>
  import Carousel from "../lib/Carousel.svelte";
  import Categories from "../lib/Categories.svelte";
  const Games = [
    "BGMI",
    "CS 2",
    "Palworld",
    "Crusaders",
    "Angry Birds",
    "GTA V",
    "Minecraft",
    "Among Us",
    "Valorant",
  ];
</script>

<div class="w-full h-full py-2 gap-8 flex flex-col overflow-y-auto">
  <Carousel />
  <Categories />
  <div
    class="w-full h-auto px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 3xl:grid-cols-8 gap-8"
  >
    {#each Games as game (game)}
      <div
        class="w-32 h-40 bg-secondary border-[1px] border-utility rounded-md px-3 py-3"
      >
        <div class="bg-utility w-full aspect-square rounded-md">
          <img
            src={`https://robohash.org/${game}`}
            alt={game}
            class="w-full h-full object-cover rounded-md"
          />
        </div>
        <span class="w-full items-center justify-center flex py-1">{game}</span>
      </div>
    {/each}
  </div>
</div>

<style>
</style>
