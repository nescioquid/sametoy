<script>
  import ThemeController from "$lib/components/ThemeController.svelte";
</script>

<header class="shadow-sm navbar bg-base-100">
  <div class="flex-1">
    <a href="https://pokemon-gt.netlify.app/" class="text-xl opacity-50 btn btn-ghost"
      >Demo | Same Toy</a
    >
  </div>
  <div class="flex-none">
    <!-- <button
      title="menu" 
      class="btn btn-square btn-ghost">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="inline-block w-5 h-5 stroke-current"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
        ></path>
      </svg>
    </button> -->
    <ThemeController />
  </div>
</header>
