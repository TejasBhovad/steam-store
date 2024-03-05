<script>
  const CountrCapitalList = [
    { country: "India", capital: "New Delhi" },
    { country: "USA", capital: "Washington, D.C." },
    { country: "UK", capital: "London" },
    { country: "Japan", capital: "Tokyo" },
    { country: "China", capital: "Beijing" },
    { country: "France", capital: "Paris" },
    { country: "Germany", capital: "Berlin" },
    { country: "Italy", capital: "Rome" },
    { country: "Russia", capital: "Moscow" },
    { country: "Brazil", capital: "Brasília" },
  ];
  const currentDate = new Date();
  function getDay() {
    return currentDate;
  }
  let num = 0;
  let selectedCountry = "India";
  let resCap = "New Delhi";
  function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  function getTable(n) {
    let tableData = "";
    for (let i = 1; i <= 10; i++) {
      tableData += `${i} * ${n} = ${i * n}\n`;
    }
    return tableData;
  }

  function getInputFromAlert() {
    let input = prompt("Enter a number", "0");
    let input_2 = prompt("Enter a number", "0");
    // sum
    let sum = parseInt(input) + parseInt(input_2);
    return `Sum of ${input} and ${input_2} is ${sum}`;
  }
  $: resCap = CountrCapitalList.find(
    (item) => item.country === selectedCountry
  ).capital;
</script>

<div class="flex flex-col gap-4 px-4 py-8">
  <button
    type="button"
    class="bg-tertiary px-3 py-1 rounded-md"
    on:click={() => alert(getDay())}>Get Day</button
  >
  <br />
  <input type="text" bind:value={num} class="rounded-sm text-black" />
  <button
    type="button"
    class="bg-tertiary px-3 py-1 rounded-md"
    on:click={() => alert(factorial(num))}>Get Factorial</button
  >
  <br />
  <button
    type="button"
    class="bg-tertiary px-3 py-1 rounded-md"
    on:click={() => alert(getTable(num))}>Get Table</button
  >
  <br />
  <button
    type="button"
    class="bg-tertiary px-3 py-1 rounded-md"
    on:click={() => alert(getInputFromAlert())}>Get Input</button
  >
  <br />
  <select class="bg-tertiary px-3 py-1 rounded-md" bind:value={selectedCountry}>
    {#each CountrCapitalList as item}
      <option value={item.country}>{item.country}</option>
    {/each}
  </select>
  <span class="text-lg font-semibold">{resCap}</span>
</div>
