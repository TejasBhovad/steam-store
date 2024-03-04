<script>
  const isAuthenticated = false;
</script>

<div class="w-auto h-full items-center flex">
  <button
    type="button"
    class="bg-primary px-3 py-1 rounded-md hover:bg-opacity-80 transition-all"
  >
    {isAuthenticated ? "Logout" : "Login"}
  </button>
</div>
