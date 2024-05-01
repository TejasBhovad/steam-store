<script>
  import { page } from "$app/stores";
  console.log($page.data.session);

  const adminList = [
    "tejasbhovad@gmail.com",
    "jaydarje@gmail.com",
    "denisanthony871@gmail.com",
  ];
  const user =
    $page.data.session && $page.data.session.user
      ? $page.data.session.user.email
      : undefined;
  const isAdmin = user ? adminList.includes(user) : false;
  import Cart from "./logos/Cart.svelte";
  import Explore from "./logos/Explore.svelte";
  import Featured from "./logos/Featured.svelte";
  let pageList = [
    {
      name: "Explore",
      href: "/",
      component: Explore,
    },
    {
      name: "Lab",
      href: "/experiments",
      component: Featured,
    },
    // {
    //   name: "Cart",
    //   href: "/cart",
    //   component: Cart,
    // },
  ];
  // append admin page if admin
  if (isAdmin) {
    pageList.push({
      name: "Admin",
      href: "/admin",
      component: Featured,
    });
  }
</script>

<nav
  class="z-10 w-52 bg-secondary h-full border-r-[1px] border-utility rounded-r-md py-2 px-3 flex flex-col justify-between"
>
  <div class="flex flex-col gap-6">
    <a href="/" class="text-2xl"
      ><span class="font-semibold text-primary">Game</span><span
        class="font-medium">Store</span
      ></a
    >
    <ul class="flex flex-col gap-4">
      {#each pageList as page}
        <li>
          <a
            href={page.href}
            class="flex items-center gap-2 text-white hover:text-primary transition-all duration-200 ease-in-out"
          >
            <svelte:component this={page.component} />
            <span class="font-medium text-xl">{page.name}</span>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</nav>
