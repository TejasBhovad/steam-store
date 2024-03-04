<script>
  import Sidebar from "../lib/Sidebar.svelte";
  import Navbar from "../lib/Navbar.svelte";
  import "../app.css";
</script>

<main class="w-full h-full flex">
  <Sidebar />
  <Navbar />
  <div class="w-full h-full pt-14 px-6 pb-4">
    <slot />
  </div>
</main>
