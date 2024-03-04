<script>
  let current = 1;
  const carouselList = [
    {
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/578080/ss_63bb4a659968c3417ddd2ea5fd82cd2143e458a0.600x338.jpg",
      title: "BGMI",
      description: "PUBG PC",
      link: "1",
    },
    {
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/730/ss_d830cfd0550fbb64d80e803e93c929c3abb02056.600x338.jpg",
      title: "CS 2",
      description: "Counter Strike 2",
      link: "2",
    },
    {
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/1623730/ss_06e27c15c7b4b10233c937b887cf6a6925c83009.600x338.jpg",
      title: "Palworld",
      description: "Pokemons with guns",
      link: "3",
    },
    {
      image:
        "https://cdn.akamai.steamstatic.com/steam/apps/1158310/ss_950a6f6dc67f521877345db6d2c0cebb27ddc528.600x338.jpg",
      title: "Crusader Kings III",
      description: "Medieval Strategy Game",
      link: "4",
    },
  ];
  let categories = [
    "All",
    "Action",
    "Adventure",
    "RPG",
    "Strategy",
    "Simulation",
  ];

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

  function goNextCategory() {
    categories.push(categories.shift());
    categories = [...categories];
  }

  function goPreviousCategory() {
    categories.unshift(categories.pop());
    categories = [...categories];
  }

  function getItem(index) {
    if (index < 0) {
      index = carouselList.length - 1;
    } else if (index >= carouselList.length) {
      index = 0;
    }
    return carouselList[index];
  }

  function goForward() {
    if (current < carouselList.length - 1) {
      current += 1;
    } else {
      current = 0;
    }
  }

  function goBackward() {
    if (current > 0) {
      current -= 1;
    } else {
      current = carouselList.length - 1;
    }
  }
</script>

<div class="w-full h-full py-2 gap-8 flex flex-col">
  <div class="w-full h-48 flex gap-1 min-h-[190px]">
    <div
      class="w-8 h-full flex items-center justify-center hover:bg-secondary transition-all"
    >
      <button type="button" class="h-full w-full" on:click={goBackward}
        >&lt</button
      >
    </div>
    <div class="w-full h-full rounded-lg flex gap-2">
      <div class="w-full h-full rounded-lg flex gap-2">
        <div
          class="w-1/3 hidden xl:flex bg-tertiary h-full rounded-lg image-container items-end"
          style="background-image: url({getItem(current - 1)
            .image}); background-size: cover; position: relative;"
        >
          <h2 class="font-semibold text-lg px-3 py-2 z-20">
            {getItem(current - 1).title}
          </h2>
        </div>

        <div
          class="w-full xl:w-1/3 bg-tertiary h-full rounded-lg image-container flex items-end"
          style="background-image: url({getItem(current)
            .image}); background-size: cover; position: relative;"
        >
          <h2 class="font-semibold text-lg px-3 py-2 z-20">
            {getItem(current).title}
          </h2>
        </div>

        <div
          class="w-1/3 hidden xl:flex bg-tertiary h-full rounded-lg image-container items-end"
          style="background-image: url({getItem(current + 1)
            .image}); background-size: cover; position: relative;"
        >
          <h2 class="font-semibold text-lg px-3 py-2 z-20">
            {getItem(current + 1).title}
          </h2>
        </div>
      </div>
    </div>
    <div
      class="w-8 h-full flex items-center justify-center hover:bg-secondary transition-all"
    >
      <button on:click={goForward} class="h-full w-full" type="button"
        >&gt</button
      >
    </div>
  </div>
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
        <div class="h-full">
          <div
            class="h-16 bg-secondary rounded-md border-[1px] border-utility flex items-center justify-center font-medium"
          >
            {category}
          </div>
        </div>
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
  .image-container::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 50%
    );
  }
</style>
