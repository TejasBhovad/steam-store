<script>
  // export let data;
  import { onMount } from "svelte";
  let name, developer, description, cover_image, downloads, likes;
  let images = [];
  let categories = [];
  let games = [];
  async function fetchData() {
    const res = await fetch("/api/games");
    const data = await res.json();
    games = data;
  }
  async function postData() {
    images = images.split(",").map((item) => item.trim());
    categories = categories.split(",").map((item) => item.trim().toLowerCase());
    console.log({
      name,
      developer,
      description,
      cover_image,
      images,
      categories,
      downloads,
      likes,
    });
    const res = await fetch("/api/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        developer,
        description,
        cover_image,
        images,
        categories,
        downloads,
        likes,
      }),
    });
    const data = await res.json();
    console.log(data);

    fetchData();
  }

  async function deleteData(game_id) {
    const res = await fetch("/api/games", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        game_id: game_id,
      }),
    });
    const data = await res.json();
    console.log(data);

    fetchData();
  }

  onMount(fetchData);
</script>

<main
  class="gap-2 p-4 bg-tertiary/50 rounded-md flex flex-col w-full h-full overflow-y-auto"
>
  <!-- inputs bind -->
  <div class="w-full flex flex-col gap-2">
    <input
      type="text"
      class="w-full bg-secondary px-2 py-1 rounded-md"
      bind:value={name}
      placeholder="Name"
    />
    <input
      type="text"
      class="w-full bg-secondary px-2 py-1 rounded-md"
      bind:value={developer}
      placeholder="Developer"
    />
    <input
      type="text"
      class="w-full bg-secondary px-2 py-1 rounded-md"
      bind:value={description}
      placeholder="Description"
    />
    <input
      type="text"
      class="w-full bg-secondary px-2 py-1 rounded-md"
      bind:value={cover_image}
      placeholder="Cover Image"
    />
    <textarea
      class="w-full bg-secondary px-2 py-1 rounded-md"
      bind:value={images}
      placeholder="Images (separate with commas)"
    ></textarea>

    <textarea
      class="w-full bg-secondary px-2 py-1 rounded-md"
      bind:value={categories}
      placeholder="Categories (separate with commas)"
    ></textarea>
    <input
      type="text"
      class="w-full bg-secondary px-2 py-1 rounded-md"
      bind:value={downloads}
      placeholder="Downloads"
    />
    <input
      type="text"
      class="w-full bg-secondary px-2 py-1 rounded-md"
      bind:value={likes}
      placeholder="Likes"
    />

    <button
      class="w-full bg-primary px-2 py-1 rounded-md text-black font-semibold"
      type="button"
      on:click={postData}>Add Game</button
    >
  </div>

  <button
    class="w-full bg-primary px-2 py-1 rounded-md text-black font-semibold"
    type="button"
    on:click={fetchData}>Fetch Games</button
  >

  <div class="bg-tertiary p-3 rounded-sm flex flex-col gap-2">
    {#each games as game (game)}
      <div
        class="bg-white/10 px-3 py-1 rounded-md flex justify-between items-center"
      >
        <span>{game.name}</span>
        <button
          class="bg-tertiary text-white px-2 py-1 rounded-full w-6 h-6 flex items-center justify-center font-semibold text-sm"
          on:click={() => deleteData(game.game_id)}>X</button
        >
      </div>
    {/each}
  </div>
</main>

<style>
  ::-webkit-scrollbar {
    background-color: #171918;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #1b1d1c;
    border-radius: 2.5px;
  }
</style>
