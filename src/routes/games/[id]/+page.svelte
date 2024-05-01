<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  let categories = [];
  let current = 0;
  let carousel;
  let game_id = $page.params.id;
  const handleNextClick = () => {
    current = (current + 1) % images.length;
  };
  let images = [
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=3",
    "https://picsum.photos/200/300?random=4",
  ];
  let game;
  async function getGame() {
    try {
      console.log(game_id);
      const res = await fetch("/api/games/info/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          game_id: game_id,
        }),
      });
      const data = await res.json();
      game = data;
      console.log(data);
    } catch (error) {
      console.error("Error fetching game data:", error);
    }
  }

  onMount(() => {
    getGame();
    carousel = setInterval(() => {
      handleNextClick();
    }, 6000);
  });

  $: {
    if (game) {
      images = game[0].images;
      categories = game[0].categories;
    }
  }
</script>

<div class="w-full h-full">
  <div class="w-full h-32 border-b-[1px] border-utility p-5 flex">
    <div class="aspect-square h-full rounded-md">
      {#if game}
        <img
          src={game ? game[0].cover_image : ""}
          alt="Game cover"
          class="w-full h-full object-cover rounded-md"
        />
      {:else}{""}{/if}
    </div>
    <div class="w-full h-full flex flex-col gap- px-4 py-2">
      <div class="w-full h-8 text-lg font-semibold">
        {#if game}
          {game[0].name}
        {:else}
          Loading...
        {/if}
      </div>
      <div class="w-full h-6 text-sm text-white/50 font-medium">
        {#if game}
          {game[0].developer}
        {:else}
          Loading...
        {/if}
      </div>
      <div
        class="my-2 rounded-full bg-primary h-8 w-1/2 flex sm:hidden min-w-24"
      >
        <button class="w-full h-full text-black font-semibold text-md px-3"
          >Download</button
        >
      </div>
    </div>
    <div class="hidden sm:flex w-1/4 flex items-center justify-center">
      <div class="rounded-full bg-primary h-8">
        <button class="w-full h-full text-black font-semibold text-md px-3"
          >Download</button
        >
      </div>
    </div>
  </div>
  <div class="w-full border-b-[1px] border-utility h-14 flex p-3 gap-2">
    {#each categories as category (category)}
      <a href={`/category/${category.toLowerCase()}`}>
        <div
          class="h-full w-auto px-3 py-1 bg-tertiary rounded-full flex items-center justify-center font-medium"
        >
          {category}
        </div>
      </a>
    {/each}
  </div>
  <div class="w-full h-64 bg-green-400 bg-opacity-5 flex rounded-md">
    <div class="w-full h-64">
      <img src={images[current]} alt="" class="w-full h-full object-cover" />
    </div>

    <button
      on:click={handleNextClick}
      class="relative px-2 py-1 rounded-sm bg-secondary">></button
    >
  </div>

  <div class="w-full h-auto p-5 flex flex-col gap-2">
    <div class="w-full h-auto text-lg font-semibold">Description</div>
    <div class="w-full h-auto text-md font-medium opacity-75">
      {#if game}
        {game[0].description}
      {:else}
        Loading...
      {/if}
    </div>
  </div>
</div>
