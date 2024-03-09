<script>
  let categories = [
    "All",
    "Action",
    "Adventure",
    "RPG",
    "Strategy",
    "Simulation",
  ];
  function goNextCategory() {
    categories.push(categories.shift());
    categories = [...categories];
  }

  function goPreviousCategory() {
    categories.unshift(categories.pop());
    categories = [...categories];
  }
</script>

<div class="w-full h-16 flex gap-2">
  <div class="w-8 h-full flex items-center justify-center">
    <button
      on:click={goPreviousCategory}
      type="button"
      class="bg-secondary p-2 aspect-square h-6 flex items-center justify-center rounded-full border-[1px] border-utility"
      >&lt</button
    >
  </div>
  <div
    class="w-full h-16 gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 overflow-hidden"
  >
    {#each categories as category (category)}
      <a class="h-full" href={`/category/${category.toLowerCase()}`}>
        <div
          class="h-16 bg-secondary rounded-md border-[1px] border-utility flex items-center justify-center font-medium"
        >
          {category}
        </div>
      </a>
    {/each}
  </div>
  <div class="w-8 h-full flex items-center justify-center">
    <button
      on:click={goNextCategory}
      type="button"
      class="bg-secondary p-2 aspect-square h-6 flex items-center justify-center rounded-full border-[1px] border-utility"
      >&gt</button
    >
  </div>
</div>
