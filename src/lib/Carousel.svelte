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
    <button on:click={goForward} class="h-full w-full" type="button">&gt</button
    >
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
