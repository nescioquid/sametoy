<script>
  import '../app.css'
  import favicon from '$lib/assets/favicon.svg'
  import Footer from '$lib/Footer.svelte'
  import Header from '$lib/Header.svelte'

  let { children } = $props()
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<header><Header /></header>

{@render children()}

<footer><Footer /></footer>
