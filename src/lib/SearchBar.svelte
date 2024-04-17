<script>
  import Search from "./logos/Search.svelte";
  export let searchTerm = "";
</script>

<div
  class="w-full opacity-100 px-3 py-1 flex gap-1 items-center bg-utility rounded-md w-1/3"
>
  <Search class="w-6 h-6" />
  <input
    type="text"
    bind:value={searchTerm}
    class="w-full h-auto px-1 bg-utility border-0 rounded-md outline-0"
    placeholder="Search for games"
  />
</div>
