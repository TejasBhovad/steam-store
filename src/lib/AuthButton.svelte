<script>
  import { page } from "$app/stores";
  import { signIn, signOut } from "@auth/sveltekit/client";
  // console.log($page.data.session);
</script>

<div class="w-auto h-full items-center flex">
  {#if $page.data.session}
    <button
      class="bg-primary text-black font-semibold px-4 py-2 rounded-md hover:bg-opacity-80 transition-all duration-200 ease-in-out"
      on:click={() => signOut()}
    >
      Sign Out
    </button>
  {:else}
    <button
      class="bg-primary text-black font-semibold px-4 py-2 rounded-md hover:bg-opacity-80 transition-all duration-200 ease-in-out"
      on:click={() => signIn()}
    >
      Sign In
    </button>
  {/if}
</div>
