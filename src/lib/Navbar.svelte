<script>
  import { page } from "$app/stores";
  import SearchBar from "./SearchBar.svelte";
  import AuthButton from "./AuthButton.svelte";

  let userImage;
  if ($page.data.session && $page.data.session.user) {
    userImage = $page.data.session.user.image;
  }
</script>

<nav class="pl-52 absolute w-full h-14 pr-4 py-2">
  <div class="w-fullh-full">
    <div class="flex justify-between items-center">
      <div
        class="opacity-100 px-2 py-1 flex gap-1 items-center rounded-md w-1/3"
      ></div>

      <div class="flex justify-between items-center gap-3">
        {#if userImage}
          <!-- svelte-ignore a11y-img-redundant-alt -->
          <img
            class="w-10 h-10 rounded-full"
            src={userImage}
            alt="User Image"
          />
        {/if}
        <AuthButton />
      </div>
    </div>
  </div>
</nav>
