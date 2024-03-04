<script>
  import SearchBar from "./SearchBar.svelte";
  import AuthButton from "./AuthButton.svelte";
</script>

<nav class="pl-52 absolute w-full h-14 pr-4 py-2">
  <div class="w-fullh-full">
    <div class="flex justify-between items-center">
      <SearchBar />
      <div class="flex justify-between items-center gap-3">
        <AuthButton />
        <div class="bg-tertiary h-8 w-8 rounded-full"></div>
      </div>
    </div>
  </div>
</nav>
